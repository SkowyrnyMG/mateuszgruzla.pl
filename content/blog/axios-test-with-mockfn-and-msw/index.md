---
date: 2021-01-22T09:09:06.112Z
authors:
  - author: Mateusz Gruźla
tags:
  - React
  - Jest
title: Axios test with mockFn and MSW
image: testing-jest-react.png
description: Testing your app is sometimes harder than coding it. Especially
  when you are trying to test your axios or fetch requests. I've spend a lot of
  time with Kent C. Dodds tutorials and articles to finally figure out how
  mocking and MSW works.
---
## *"Do I need to write tests?"*

This question was bothering me for a while and I couldn't find the answer until last month. 

In October I've started to think about writing something bigger than I usually do. That is why I wanted to create a plan that I could follow during my development process. I wrote on a piece of paper every functionality that I want to implement in my new Invoicing app and after that first concerns appeared.

How long it takes to manually test every new feature?

How often do I need to repeat my manual test?

In simple words how can I gain more confidence during deploying my app?

At this moment I've started to read more about Jest and React testing library and I felt that it may be a great thing to learn. After few Kent C. Dodds courses and many other youtube videos I know that I have to write tests for my apps and right now I want to share with you my favorite ways to test axios with jest **mock** functions and Mock the Service Worker(**MSW**).

## Testing axios

When I've tested axios for the first time I went straight forward with it. I didn't mock my requests and I didn't use MSW either. My tests were using regular GET, POST requests. As long as the API responded with 200 and with correct data all of my tests passed, but when I've lost internet connection for a while all of them failed. At this point, I've figured out that maybe I should write my axios test in another way?

After research, I found 2 reasonable ways that allow me to test my API request in a fast and predictable way. The first old-school way is **mocking your axios/fetch**, second is the **Mocking the Service Worker**.

### Mocking axios

How does mocking work? In simple words, you are "switching" regular axios request with a jest function with a predefined Promise that will be used to test your code.

Let's look at the example:

For test purposes, I will be using free cat API with *https://api.thecatapi.com/v1/images/search* endpoint*.*

At the start, let's create a cat getter function.

```javascript
import axios from 'axios';

export const CatGetter = async () => {
  
  try {
    const result = await axios
    .get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: "full" } }) //we want to get only one img with full size of it
    return await result.data[0].url;
  }
  catch(err) {
    console.log(err);
  }
}
```

To test this function manually we would have to write a component that would fire our request and display API response, but we can also mock our axios and check if the app is working correctly.

To mock our axios we have to create *\_\_mocks\_\_* folder inside our src folder. In this directory you can create mock functions depends on your needs. For now, we just need to create an axios.js file and put our mocks inside.

To keep it simple we are going to mock only get request

```javascript
// because our axios requests always returns a Promise, we have to make sure
// that our jest.fn() is returning the Promise as well
// src/__mocks__/axios.js
export default {
  get: jest.fn(() => new Promise.resolve({data: ""})), 
}
```

After our mock is set up we are free to write our first mock axios test. To do that let's create \_\_test\_\_ folder with cat-getter.js file next to our cat-getter.js hook.

```javascript
// src/cat-frame/__tests__/cat-getter.js
// we have to import function from our hook
import { CatGetter } from '../cat-getter'; 
// here the magic happen. Jest will replace regular axios with mock that we have creaded
// in __mocks__ directory.
import axiosMock from 'axios'; 


describe('Cat getter mock', () => {
  // test should be asynchronius, because we will be using Promises
  test('should run once', async () => { 
    // jest.fn() allow us to fire additional method on it. mockImplementatnionOnce
    // allow us to create response that will be returned from our get request
    axiosMock.get.mockImplementationOnce(() => Promise.resolve({ 
      data: [{
        url: "returned-url-from-database"
      }]
    }))
    
    // after our mock is set up we can fire our CatGetter hook, but instead of hitting API
    // the test will use our mocked funcion instead
    const result = await CatGetter();

    // we can test if the test has run the mocked get request only once
    expect(axiosMock.get).toHaveBeenCalledTimes(1); 
    // we can test with what our get request was called in CatGetter function
    expect(axiosMock.get).toHaveBeenCalledWith("https://api.thecatapi.com/v1/images/search", {"params": {"limit": 1, "size": "full"}});
    // and also we can test that CatGetter have returned value from our mocked function
    expect(await result).toBe("returned-url-from-database");
  });
});
```

And that's it! You have written your first test with mocked axios. This solution is fine and if tests like that make you confident that the app will not crash on this request then you are free to go.

Tests with mocked axios will be fast, predictable and they are not going to hit the real API.

After that being said I have to go a little bit further and get you into the Mock the Service Router package because that is the recommended way to write your axios/fetch tests.

## MSW - the game changer

[MSW](https://mswjs.io/docs/) stands for Mock the Service Worker. This library does literally what the name of it says. Instead of mocking one specific function, you can now mock a server that will intercept requests during your tests. 

How does it all work? Let me explain the next simple example. To do that we will have to modify our codebase a little bit. First of all, we no longer need \_\_mocks\_\_ directory so you have to delete it, otherwise, it may cause testing errors.

### Installation and configuration

Add MSW to your project with:

```
npm install msw --save-dev
# or
yarn add msw --dev
```

You can configure and fire mocked server directly in each test, but it's recommended to create few external files to separate server logic and keep the DRY and clean code. 

#### Handlers

To interact with the mocked server you will have to create some endpoints to fire your requests to (they are almost like express API endpoints).

To keep everything organized you can create a directory in the src/ and keep all MSW files in there.

Let's create some handlers:

```javascript
// src/msw/server-handlers.js

import {rest} from 'msw';

const handlers = [
  rest.get('https://api.thecatapi.com/v1/images/search', (req, res, ctx) => {
    return res(ctx.status(200),
    ctx.json(
      [{
        url: 'https://cdn2.thecatapi.com/images/4iu.gif',
      }]
    ))
  }),
]

export {handlers};
```

To set up your response you will have to create a unique handler for each specific endpoint. To do that you have to put a unique endpoint as the first argument of rest.get() function (https://api.thecatapi.com/v1/images/search - in our example). The second thing that you pass to this function is a callback and this is where you handle how the server should respond. So you are giving here 3 things (req, res, ctx):

1. req - actual request
2. res - response function which you trigger to get a response back
3. ctx - context to build up responses

From this function you will have to return the response with some context inside (ctx). For example you can return response status (ctx.status(200)) and the actual body of your response in our example we have returned JSON (ctx.json()) with some data. In the body of the response, you can return literally anything, but your JSON structure should be matching regular API call response, otherwise your tests may fail.

#### Server

After we have created some handlers, setting up the server will be a piece of cake.

Let start with creating another .js file in msw directory called server.js and fill it up with some msw functions:

```javascript
import {setupServer} from 'msw/node'
import {handlers} from './server-handlers';

const server = setupServer(...handlers);

export {server};
```

At this place we have to import setupServer function from 'msw/node' and our handlers that we have created in the previous step. We will use setupServer function to create a server and store it into a variable, which we can export from the file. To make the server run correctly we have to pass to it a number of request handlers. Each of these handlers intercepts some specific request according to our handlers' configuration. From now on server can handle how it should respond rather than hitting regular API. The last thing left to do is running our the server during our tests. So let's jump quickly to the next step.

#### Run the server

After our handlers and server setup is complete we have to make our server start listening for the requests. To do that we can use jest callbacks as beforeAll, afterEach and afterAll. You can use those directly in your test file, but it's recommended to put it into our setupTest.js file to keep the code clean.

```javascript
//src/setupTests.js - this file will be added after creating project with create-react-app
import {server} from './msw/server.js';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
```

At this point we have to import our server that has been created in the previous step.

In beforeAll we start the server to listen before all tests have been run.

One of the most important thing what you have to remember to do happens in afterEach() function. Here we will reset all the handlers with resetHandlers() function. Why this is so important? All of the handlers can be overwritten for each individual test and with the reset function, we are just taking it back to the original state that we have created in our server-handlers.js file.

After all tests are finished we have to close the server in afterAll function.

Right now your tests won't hit the real API, but a server that we have just created!

### Test example

With a setup like that our test can look something like that:

```javascript
// src/cat-frame/__tests__/cat-getter.js
import { CatGetter } from '../cat-getter';

describe('Cat getter mock', () => {
  test('should run once', async () => {
    
    const result = await CatGetter();
    console.log(result)
    
    expect(result).toBe('https://cdn2.thecatapi.com/images/4iu.gif');
  });
});
```

### Conclusion

Let me just quickly point out why I think this way of testing request is better than the old mock function:

1. You can test your request statuses
2. You do not have to worry about providing details of fetch as headers etc.
3. It works with axios and fetch without adding any additional code!
4. And most importantly, if you would mess up your fetch request, the test will correctly fail. Because of that you can track broken code before you would deploy it to production.

If you are interested in going deep into the msw, check their [documentation](https://mswjs.io/docs/)!

##### THE END

Thank you for reading! You can find the codebase to our examples in [here](https://github.com/SkowyrnyMG/mock-fn-vs-msw/tree/msw-testing).