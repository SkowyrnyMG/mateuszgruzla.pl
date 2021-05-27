---
date: 2021-05-27T21:39:14.460Z
authors:
  - author: Mateusz Gruźla
tags:
  - Javascript
title: Cypress Windows installation error solution
image: group-2.jpg
description: Cypress is a wonderful testing framework, but it won't be so useful
  if you could not run it on your PC. Let me quickly show you a simple solution
  with Windows installation of Cypress.
---
## Cypress error story

Last week after my job interview I've decided to learn about some e2e testing environment and as you probably already noticed, I've chosen Cypress.

So I've oppened \[Cypress docs](https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install) and I've followed all necessary steps to install their framework. After installation process was finished, I just hopped to my project and i run:

\`\``shell

npx cypress open

\`\``

unfortunately for me, my commend line threw one big error right into my face, and I was stuck for a long time with it, but after some time I've found one workaround that helped me to successfully install and run Cypress on my Mashine.

### ERROR BODY

The error that I've met on start of my e2e testing road looked like this:

![Cypress error image](przechwytywanie.jpg "Cypress error image")