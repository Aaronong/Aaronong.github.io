---
layout: post
title: You Might Not Need React
categories: [CS3216, Programming]
tags: [javascript, frontend]
comments: true
description: React offers a great development experience but suffers from poor performance. This blog post introduces Preact, a React alternative with superior performance but reads and feels like React.
---

Since it was released in March 2013, React has been taking over front-end development by storm. Unlike most popular front-end that are template based, React offers a component based approach to front-end development. While React often requires a much larger boilerplate compared to other front-end frameworks, its continues to attract a large following as front-end developers find its declarative components easy to reason about. Coupled with its functional coding style which minimizes side-effects, React allows you to manage large front-end projects with ease. 

The cost of using React, however, is its poor performance and bloated codebase for its relatively small set of offerings. 

![Frontend Library Benchmark](https://cdn-images-1.medium.com/max/1600/1*5ojdO-TAEqnRE2OQyVHpSw.png)

[Source: Medium @rajaraodv](https://medium.com/@rajaraodv/using-preact-instead-of-react-70f40f53107c)

##### <u>Poor Performance</u>

The figure above benchmarks a variety of popular front-end libraries/frameworks based on its todo app performance. Despite employing a virtual DOM which is associated with better performance, React ranks extremely low on the benchmark. 

##### <u>Bloated Codebase</u>

As it stands today, React's library is ~45kb large. This makes React unsuitable for mobile web apps where data usage and internet speed are of concern. In fact, [Uber recently switched away from using react on their mobile web apps in favour of using preact](https://eng.uber.com/m-uber/) due to React's poor performance on 2G networks.

##### <u>Preact</u>

This brings us to the crux of this blog post - **Preact**. 

What is [Preact](https://blog.logrocket.com/introduction-to-preact-a-smaller-faster-react-alternative-ad5532eb6d79)?

- Preact is a lightweight alternative to React with the same ES6 API.
- Preact weighs in at 3kb compared to React's much larger codebase.
- Preact is ranked 2nd on the todo app benchmark.

**But most importantly,** Preact's code reads and feels like React. It offers the same declarative, functional programming style that React offers and supports jsx, states and React's component lifecycle methods. 

[**Get started with Preact now**](https://preactjs.com/guide/getting-started)

[Github Repo: 13k stars](https://github.com/developit/preact)