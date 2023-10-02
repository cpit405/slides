---
# try also 'default' to start simple
theme: default
title: 'HTML'
titleTemplate: '%s - CPIT-405'
# apply any windi css classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: | 
    HTML: HyperText Markup Language
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
# Make monaco available in the exported SPA
monaco: true 
# Make content selectable/copyable
selectable: true
---


# HTML: HyperText Markup Language
### CPIT-405 Web Applications


<div class="absolute left-30px bottom-30px">
Fall 2023 &copy; Khalid Alharbi, Ph.D.
</div>

---
layout: center
---
## Table of Contents
- Introduction to HTML
- Brief history
- Concept and syntax
- Basic structure of an HTML document
- The `<head>` element for Metadata
- The `<body>` element
- Common HTML elements
- Hyperlinks
- Form elements
- HTML tables
- Multimedia and embedding
- Validating and debugging HTML
---

# Introduction
- HTML (HyperText Markup Language) is the most basic building block of the web.
- HTML is a markup language, which means it uses tags `< >` to tell the browser how to display the content of a web page. 
- The purpose of HTML is to describe the structure of a web page.
  - HTML defines headings, paragraphs, lists, images, links and more elements that make up a web page
- Standardized by World Wide Web Consortium (W3C)
- W3C handed HTML over to a group of browser vendors known as  Web Hypertext Application Technology Working Group (WHATWG).
  - WHATWG is made up of the four major browser vendors: Apple, Google, Microsoft, and Mozilla.
- The complete HTML specification is maintained by WHATWG at [https://html.spec.whatwg.org](https://html.spec.whatwg.org).

---

## History of HTML (I)
- HTML was invented by Tim Berners-Lee in late 1991 at CERN, the European Organization for Nuclear Research.
- HTML version timeline:
  - 1991: The first public description of HTML is released. 
  - 1993: HTML 1.0 is released.
  - 1994: The World Wide Web Consortium (W3C) was founded and led by Tim Berners-Lee as the the main international standards organization for the World Wide Web.
  - 1995: HTML 2.0 is released.
  - 1997: HTML 3.0 is released.
  - 1998: W3C had shifted priorities away from HTML and instead began working on an XML-based equivalent, called XHTML. 
    - XHTML strictly enforce XML rules. If there was a syntax error, the page wouldn’t load properly.
  - 1999: HTML 4.0 is released.

---

## History of HTML (II)
- HTML version timeline (Cont.):
    - 2000: XHTML 1.0 is released as a reformulation of HTML as an XML application.
    - 2004: WHATWG was founded by individuals of Apple, the Mozilla Foundation, and Opera Software.
    - 2008: HTML 5.0 first draft appeared with better support for video, audio, and mobile devices.
    - 2012: W3C and WHATWG announced that WHATWG would maintain a living standard, while the W3C would continue with versions.
    - 2014: HTML5 became a W3C recommendation.
    - 2019: both WHATWG and W3C signed an agreement to collaborate on a single version of HTML going forward: ["Living Standard"](https://html.spec.whatwg.org/multipage/).
- The W3C and WHATWG had different goals. WHATWG wanted to continue working on a Living Standard for HTML while W3C wanted to publish a finished implementation of HTML.
- WHATWG had set up a solid process in which HTML features get early support by browsers before the details of a specification are fully worked out.

---

## History of HTML (III)
- Interestingly, WHATWG existed due to the reason why W3C lost power over the HTML specs.
- In 2004, W3C abandoned organizational efforts on HTML in favor of the the Semantic Web, also known as Web 3.0.
  - Their efforts shifted to towards new standards that promote common data formats and exchange protocols on the Web such as XHMTL 2, RDF, OWL, etc.
- WHATWG was formed in reaction to that, rewriting HTML completely from its W3C HTML 4.0 version to make it better for web 2.0 applications.
- Now, that both groups came to an agreement, there will be no more versions of HTML. 
- Although HTML is a mature language, HTML specs are constantly being proposed, discussed, updated and revised in a draft called ["the living standard"](https://html.spec.whatwg.org/multipage/).
- W3C still controls a number of other important web technologies, including CSS, WebAssembly, and web performance.

---
layout: center
---
## Concepts and Syntax

- The elements of HTML
- The `<!DOCTYPE`> element
- The `<head>` element
- The `<body>` element



---

## HTML Element

![HTML Element](/images/html-element.svg)


---

## HTML Element's Attributes

![HTML Element's Attribute](/images/html-attribute.svg)

---

## HTML Document

<iframe src="http://jsbin.com/dozulok/1/embed?html,output" title="HTML document Example" height="80%" width="100%"></iframe> 

- Save this as an HTML file (e.g., `index.html`) and open it up in your browser.

---

# The `!DOCTYPE` element
```html
<!DOCTYPE html>
```

- In HTML the doctype is a required preamble at the top of HTML documents to prevent the browser from switching into the so-called "quirks mode" when rendering a document.
- In the old days of the web and before W3C HTML standards,  HTML documents were typically written in two versions for two major browsers: Microsoft Internet Explorer and Netscape Navigator.
- Layout engines in web browsers support three modes: quirks mode, limited-quirks mode, and no-quirks mode.
  -  In **quirks mode**, layout engines emulate behavior in Navigator 4 and Internet Explorer 5.
  - In **limited-quirks mode**, there are only a very small number of quirks implemented.
  - In **no-quirks mode**, layout engines emulate the behavior described by the modern HTML and CSS specifications.
    - The `<!DOCTYPE html>` tag is used to indicate that the HTML document uses the no-quirks mode.

---

# The `<head>` element
- The `<head>` element contains elements that won't get displayed in the web browser.
- It contains the `<meta>` element for metadata (data about the HTML document).
  - Examples include character encoding, description, and viewport size.
- It also contains other elements such as:
  - `<title>` for the document's title.
  - `<link>` for links to CSS, JS, and custom favicons.

```html {monaco}
<head>
    <meta charset="utf-8" />
    <meta name="author" content="Khalid Alharbi" />
    <meta name="description" content="This is CPIT 405 course website. 
          This course introduces students to web development using HTML, CSS, 
          Javascript, React, and PHP." />
    <link rel="icon"  type="image/vnd.microsoft.icon"  href="https://example.com/image.ico">
    <title>CPIT 405 - Learning HTML</title>
</head>
```

---
layout: two-cols-header
---
# The `<body>` element

::left::
- The `<body>` element represents the content of an HTML document. 
- There can be only one `<body>` element in a document.
- It has a number of attributes that can be used to control the appearance and behavior of the web page (e.g., `bgcolor` to set the document's background color). 
  - However, it is best to avoid using style attributes in HTML and to use CSS instead.
  - [Refer to the complete list of valid attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body#attributes)

::right::


```html {monaco}
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>
      The body contains all of the content 
      that is displayed in the browser window.
    </p>
  </body>
</html>
```

---
layout: center
---
# HTML elements

- Text content elements: `<h1>` through `<h6>`, `<p>`, `<strong>`, and `<em>`.
- Inline elements: `<a>`, `<span>`, `<img>`, `<video>`, `<audio>`, and `<table>`
- List elements: `<ul>`, `<ol>`, and `<dl>`.
- Sectioning elements: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`, `<aside>`, and `<section>`.
- Form elements: `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>`, and `<button>`.

---

# HTML Headings `<h1>` through `<h6>`

- Heading content defines the heading of a section 
- The `<h1>` to `<h6>` HTML elements represent six levels of section headings. 
  - `<h1>` is the highest section level and `<h6>` is the lowest.

<iframe src="http://jsbin.com/hamoray/5/embed?html,output" title="HTML document Example" height="50%" width="100%"></iframe> 

---

# Paragraphs `<p>`, `<strong>`, and `<em>`.
- The `<p>` element represents a paragraph.
- The `<strong>` element is used to add strong emphasis to text. It is typically displayed in bold.
  - Screen readers will pronounce the words in `<strong>` with added stress.
- The `<em>` element marks text that has stress emphasis. It is typically displayed in italic.
  - Screen readers will pronounce the words in `<em>` with an emphasis, using verbal stress.
- **NOTE**: These two tags should not be used to apply italic and bold styling. Instead, use the CSS `font-style` property for that purpose.

<iframe src="http://jsbin.com/fezufab/7/edit?html,output" title="HTML document Example" height="50%" width="100%"></iframe> 

---

# `<a>` The anchor element for links 
- The `<a>` element with its `href` attribute creates a hyperlink to a URL.
- Links are not restricted to web pages and can include email addresses, files, phone number, JavaScript, and anything else with a URL.
- The `target` attribute is used to indicate where to open the linked URL.
  -  Examples: `target="_blank"` will open the link in a new tab.

```html {monaco}
<a href="example.com" target="_blank">Go to example.com</a>

<a href="example.com">Go to example.com</a>

<a href="mailto:nowhere@example.com">Send email to nowhere</a>

<a href="tel:+9668008501520">Call FedEx Express now!</a>

<a sms="sms:1411">To check your balance, text 1 to 1411</a>

<a href="./file.pdf">Download PDF file</a>

<a href="javascript:alert('An alert message!');">Show me an alert popup in JavaScript</a>
```

---


# `<a>` The anchor element and linking to an element in the same webpage

1. Add an `id` attribute to the header element (e.g., `<h2>`, `<h3>`, etc.) that you want to link to.
2. Add an anchor `<a>` element with an `href` attribute that points to the header element with the corresponding id attribute.

```html
<a href="#section-1">
<h1 id="section-1">Section 1</h1>
```

### Demo
<iframe class="jsfiddle" width="100%" height="40%" title="HTML internal links example" src="//jsfiddle.net/kalharbi/dqaf3p8h/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> 

---

# List elements: `<ul>` The unordered list element
- The `<ul>` element represents an unordered list of items, typically rendered as a bulleted list.
- It may contain a list item (`<li>` element) or another list nested as deeply as desired.
### Demo
<iframe src="http://jsbin.com/dutovaz/1/embed?html,output" title="HTML unordered list example" height="70%" width="100%"></iframe> 


---

# List elements: `<ol>` The ordered list element
- The `<ol>` element represents an ordered list of items, typically rendered as a numbered list.
- It may contain a list item (`<li>` element) or another list nested as deeply as desired.
### Demo
<iframe src="http://jsbin.com/cakedey/1/embed?html,output" title="HTML ordered list example" height="70%" width="100%"></iframe> 

---

# List elements: `<dl>` The description list element
- The `<dl>` element represents a description list of items, typically rendered as a numbered list.
- It contains a list of terms (using the `<dt>` element) and descriptions (using the `<dd>` element).
- It may contain a list item (`<li>` element) or another list nested as deeply as desired.
### Demo
<iframe src="http://jsbin.com/tujoqil/1/embed?html,output" title="HTML description list example" height="70%" width="100%"></iframe>

---

## Multimedia elements: `<img>`, `<video>`, and `<audio>`
- Multimedia on the web includes images (`<img>`), sound/music (`<audio>`), videos/movies (`<video>`).
### Demo
<iframe src="http://jsbin.com/hokupum/5/embed?html,output" title="HTML description list example" height="90%" width="100%"></iframe>

---

# Table element `<table>` (I) 
- The `<table>` element represents tabular data comprised of rows (`<tr>` elements), columns of headers (`<th>` elements), and cells containing data (`<td>` elements).
- It may contain a caption (`<caption>`) element that specifies the title of the table.

### Demo

<iframe src="http://jsbin.com/refisop/1/embed?html,output" title="HTML description list example" height="70%" width="100%"></iframe>

---

## Table element `<table>` (II): Table colspan and rowspan
- The `colspan` attribute specifies the number of *columns* that a cell should span.
- The `rowspan` attribute specifies the number of *rows* that a cell should span.
### Demo

<iframe src="http://jsbin.com/curoleg/1/edit?html,output
/1/embed?html,output" title="HTML description list example" height="70%" width="100%"></iframe>

---

## HTML Form

<iframe height="90%" style="width: 100%;" scrolling="no" title="HTML Form Example I" src="https://codepen.io/kalharbi/embed/ExGNQvj?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/ExGNQvj">
  HTML Form Example I</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## HTML Form (Cont.)
<iframe height="90%" style="width: 100%;" scrolling="no" title="HTML Form Example II" src="https://codepen.io/kalharbi/embed/QWzGQMJ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/QWzGQMJ">
  HTML Form Example II</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
