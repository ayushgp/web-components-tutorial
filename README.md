# Web Components tutorials

This repository contains the code I wrote to go along with [web component posts](https://ayushgp.github.io/html-web-components-using-vanilla-js/). To run the code, you need a static server. I use [static-server](https://github.com/nbluis/static-server) for it. Go to either directory and run:

```
$ static-server
```

Then navigate to [localhost](http://localhost:9080).

Links to tutorials:
1. Part 1: [HTML Web Component using Vanilla JavaScript](https://ayushgp.github.io/html-web-components-using-vanilla-js/)
2. Part 2: [Making Higher Order Components](https://ayushgp.github.io/html-web-components-using-vanilla-js-part-2/)
3. Part 3: [Using Attributes to define web components' behavior](https://ayushgp.github.io/html-web-components-using-vanilla-js-part-3/)

### Components Created for examples:
#### Part 2:
![Part 2 Component](https://user-images.githubusercontent.com/7992943/32207972-794dd8de-be25-11e7-8333-37aece4c030c.gif)

#### Part 3:
![Part 3 Component](https://user-images.githubusercontent.com/7992943/32566632-8b030bde-c4de-11e7-98ff-9be1534c2c2b.gif)

### About Web Components:
The HTML and DOM standards define four new standards/APIs that are helpful for defining Web Components. These standards are:

1. [Custom Elements](https://www.w3.org/TR/custom-elements/): With Custom Elements, web developers can create new HTML tags, beef-up existing HTML tags, or extend the components other developers have authored. This API is the foundation of Web Components. 
2. [HTML Templates](https://www.html5rocks.com/en/tutorials/webcomponents/template/#toc-pillars): It defines a new `<template>` element, which describes a standard DOM-based approach for client-side templating. Templates allow you to declare fragments of markup which are parsed as HTML, go unused at page load, but can be instantiated later on at runtime. 
3. [Shadow DOM](https://dom.spec.whatwg.org/#shadow-trees): Shadow DOM is designed as a tool for building component-based apps. It brings solutions for common problems in web development. It allows you to isolate DOM for the component and scope, and simplify CSS, etc.
4. [HTML Imports](https://www.html5rocks.com/en/tutorials/webcomponents/imports/): While HTML templates allow you to create new templates, HTML imports allows you to import these templates from different HTML files. Imports help keep code more organized by neatly arranging your components as separate HTML files.
