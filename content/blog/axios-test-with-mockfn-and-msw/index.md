---
date: 2020-11-23T09:09:06.112Z
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

This question was bothering me from a while and I could't find answer until last month. 

In October I've started to think about writing something bigger than I usually do. That is why I wanted to create a plan that I could follow during my development process. I wrote on a piece of papper every funcionality that I want to implement in my new Invoicing app and after that first concerns appeard.

How long it takes to manually test every new feature?

How often do I need to repeat my manual test?

In simple words how can I gain more confidence during deploying my app?

In this moment I've started to read more about Jest and React testing library and I felt that it may be a great thing to learn. After few Kent C. Dodds courses and many other youtube videos I now that YES I have to write tests for my apps and right now I want to share with you my favourite ways to test axios with jest **mock** functions and Mock the Service Worker(**MSW**).

## Testing axios

When I've tested axios for the first time I went straight forward with it. I didn't mock my requests and I didn't use MSW neither. My tests was using regular GET, POST requests. As long as the API responded with 200 and correct data all of my test passed, but when I've lost internet connection for a while all of them failed. At this point I've figured out that maybe I should write my axios test in other way. 

After reaserch I found 2 reasonable ways that allow me to test my API request in a fast and predictable way. First old school way is **mocking your axios/fetch**, second is the **Mocking the Service Worker**.

### Mocking axios

How does mocking work? In a simple words you are "switching" regular axios request with a jest function with predifined Promise that will be used to test your code.

Let's look on the example:

For the test purpouses I will be using free cat API with *https://api.thecatapi.com/v1/images/search* endpoint*.*

At start lets create cat getter hook.

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

To test this hook manualy we would have to wirite a component that would fire our request and display API response, but we can also mock our axios and check if the app is working in correct way.

To mock our axios we have to create *\_\_mocks\_\_* folder inside our src folder. In this directory you can create mock functions depends on your needs. For now we just need to create axios.js file and put our mocks inside.

To keep it simple we are going to mock only get request

```javascript
// because our axios requests always returns a Promise, we have to make sure
// that our jest.fn() is returning the Promise as well
export default {
  get: jest.fn(() => new Promise.resolve({data: ""})), 
}
```

After our mock is setted up we are free to write our first mock axios text. To do that lets create \_\_test\_\_ folder with cat-getter.js file next to our cat-getter.js hook.

```javascript
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

And that's it! You have writted your first test with mocked axios. This solution is fine and if test like that make you confident that the app will not crash on this hook then you are free to go.

Tests with mocked axios will be fast, predictable and they are not going to hit the real API.

After that beeing said I have to go a little bit further and get you into the Mock the Service Router package, because that is the recommended way to write your async tests.