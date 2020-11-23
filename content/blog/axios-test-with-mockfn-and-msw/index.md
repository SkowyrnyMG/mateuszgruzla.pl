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
## "Do I need to write tests?"

This question was bothering me from a while and I could't find answer until last month. 

In October I've started to think about writing something bigger than I usually do. That is why I wanted to create a plan that I could follow during my development process. I wrote on a piece of papper every funcionality that I want to implement in my new Invoicing app and after that first concerns appeard.

How long it takes to manually test every new feature?

How often do I need to repeat my manual test?

In simple words how can I gain more confidence during deploying my app?

In this moment I've started to read more about Jest and React testing library and I felt that it may be a great thing to learn. After few Kent C. Dodds courses and many other youtube videos I now that YES I have to write tests for my apps and right now I want to share with you my favourite ways to test axios with jest mock functions and Mock the Service Worker