---
layout: post
title: CSS Selectors and orders of precedence
categories: [Programming, cs3216]
tags: [css, design]
comments: true
description: In this post, Aaron introduces CSS selectors from the ground-up and discusses the order of precedence between styling rules.
---

While I was trying to style this blog, I ran into problems selecting my DOM components. Since I had some time, I decided to go back to the basics to understand CSS Selectors and the order of precedence between styling rules.

### Basic Selectors

Basic selectors involve only a single rule. If the html element in question fulfills that singular rule, it will be selected for styling. 

##### **Element Selector**

```css
/*element selector*/
p {
  background-color: #eee;
}
```

The element selecter is the most basic amongst all CSS selectors. It simply selects all html elements with the given type.

**Class Selector**

```css
/*class selector*/
.background {
  background-color: #eee;
}
```

The class selector selects all html elements with the background class attribute. If an element implements multiple classes, the element will be styled by the styling rules all of the classes. Since the styles on the left are applied before the styles on the right, classes on the right take precedence over classes on the left.

**ID Selector**

```css
/*id selector*/
#grey-bg {
  background-color: #eee;
}
```

The ID selector above will select **the** html element with id='grey-bg'. Since html IDs are unique, ID selectors affect only a single element within any given DOM.

**Universal selector**

```css
/*universal selector*/
* {
  background-color: #eee;
}
```

Within programming nomenclature, the * character often takes on a universal value. Similarly in CSS, the universal selector will style **EVERYTHING** in the DOM with its rules. 

### Combination Selectors

Combination selectors involve more than one rule. It combines multiple selectors together using binary operators. Similar to arithmetic expressions, combination selectors are also expressions. The table below will map out their parallels. 

| Expressions      | Arithmetic Expressions | Combination Selectors |
| ---------------- | ---------------------- | --------------------- |
| Operands         | numbers                | html elements         |
| Binary Operators | +, -, *, /             | Combinators           |
| Expressions      | 3 + 2 / 4              | div > p + p           |

### Combinators

Combinators are the binary operators used in combination selectors. This section will explain the four main combinators.

##### **Descendant combinator -  ' '**

```css
/*descendant selector*/
div p {
  background-color: #eee;
}
```

The descendant selector above selects all p elements in the DOM that are descendants of div elements. Notice that the descendant combinator is simply a whitespace character.

##### **Child combinator - '>'**

```css
/*child selector*/
div > p {
  background-color: #eee;
}
```

The child relation is a special case of the descendant relation : A child is a direct descendant. 

The child selector above selects all p elements in the DOM that are children (direct descendants) of any div elements. The child combinator is denoted by the '>' character.

```html
<div>
	<form>
		<p> Hello World! </p>
	</form>
</div>
```

In the html snippet above, "Hello World!" will be selected by the "div p" combination selector but not by the "div > p" combination selector. 

**General sibling selectors**

```css
/*general sibling selector*/
div ~ p {
  background-color: #eee;
}
```

The adjacent sibling selector above selects for all p elements that are siblings any div elements.

**Adjacent sibling combinator - '+'**

```css
/*adjacent sibling selector*/
div + p {
  background-color: #eee;
}
```

The adjacent sibling relation is a special case of the general sibling relation in that they are adjacent to each other.

The adjacent sibling selector above selects for all p elements that immediately follow any div element.

```html
<div></div>
<p>Hello</p>
<p>World</p>
```

In the html snipped above, the "div + p" combination selector will style "Hello" but not "World". The "div ~ p" combination selector will style both "Hello" and "World".

### Attribute Selector

```css
/*attribute selector*/
p[attr=val] {
  background-color: #eee;
}
```

The attribute selector is also a combinator selector. However, unlike other combinators, the attribute combinator is a ternary operator and involves only one element. The above attribute selector will select all p tags with the "attr" attribute containing the value "val".



### Pseudo-elements

[Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) are abstractions of the tree representing entities beyond what HTML does. For example, HTML doesn't have an element describing the first letter or line of a paragraph, or the marker of a list. Pseudo-elements represent these entities and allow CSS rules to be associated with them. that way, these entitities can be styled independently. [(source: Mozilla Web Docs)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)



```css
/*pseudo elements selector*/
section::after {
  color: #dddddd;
}
```

The pseudo element selector above creates a pseudo-element "after" that is the last child of the selected element "section". The pseudo-element does not exist as an element in the DOM but can be used to apply cosmetic rules to specific parts of the selected element.

### Pseudo-classes

[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) allow us to select elements based on information that is not contained in the document tree like a state or that is particularly complex to extract. E.g. they match if a link has been previously visited or not. [(source: Mozilla Web Docs)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)



```css
/*pseudo class selector*/
a:visited {
  color: #dddddd;
}
```

Ever wondered why links that are clicked are often coloured differently? Anchor tags are styled by the browser's default style sheet using the pseudo class selector. It helps to think of pseudo-classes as dynamic states that elements take on based on certain interactions. For instance, whether a link is visited or not, whether we are currently hovering over a specific element, or whether the element is active. 

### Order of precedence

The "Cascading" in CSS means that styles can fall (or cascade) from one style sheet to another, enabling multiple style sheets to be used on a single HTML document. [(source: maxdesign)](http://css.maxdesign.com.au/selectutorial/advanced_cascade.htm)

The issue with multiple stylesheets is that the browser often receives conflicting instructions. How does the browser then deconflict the different styling rules? It does so using a simple order of precedence which we will explain in this section.

##### Styles from different sources

First, recognise that there are three sources from which our browser obtains its styles. 

1. Browser default stylesheet
2. User-specified stylesheet
3. Author stylesheet

The browser first applies its own default stylesheet, followed by the user-specified stylesheet, then the author stylesheet. In case of a styling conflict, styles defined later will always override its earlier defined counterparts.

##### Specificity

CSS cascade assigns a weight to each style rule. When several rules apply to the same element, the rule with the greatest weight takes precedence. Selectors that are more specific will be given a greater weight compared to less specific selectors.

Consider the below code snippets.

```css
/*index.css*/
body > div {
  background-color:red;
}

div {
  background-color:black;
}

* {
  background-color:green;
}
```

```html
<!--index.html-->
<head></head>
<body>
  <div>
    Hello World!
  </div>
</body>
```

*What color will "Hello World!" be displayed in?*

> It will be displayed in red. Test it out in your browser to convince yourself.

*Why is it red though?*

The browser calculates specificity based on three variables:

- A - count of id selectors (weight = 100)
- B - count of class and attribute selectors (weight = 10)
- C - count of type selectors (weight = 1)

The code snippet below will illustrate different selectors and their specificity values.

```css
* 			/* a=0 b=0 c=0 -> specificity = 0 */
LI			/* a=0 b=0 c=1 -> specificity = 1 */
UL LI		/* a=0 b=0 c=2 -> specificity = 2 */
LI.red 		/* a=0 b=1 c=1 -> specificity = 11 */
#content	/* a=1 b=0 c=0 -> specificity = 100 */
```



##### The !important property

Styles defined alongside the !important property will be applied with top priority. Think of it as brackets in arithmetic expressions. 

Important styles can only be overruled by another important style or by in-line styles defined within the element itself. 

> Since CSS is defined in the html head, styles defined in the body will naturally be applied later and thus overrides all CSS styles.

The !important property can be used as follows: 

```css
.class {
   color:red !important;
}
```

