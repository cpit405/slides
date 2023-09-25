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

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>CPIT-405</title>
</head>
<body>
<h1>Web Applications</h1>
<p>
  This course introduces you to web development using HTML, CSS, Javascript, React, and PHP.
</p>
</body>
</html>
```

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

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Khalid Alharbi" />
    <meta name="description" content="This is CPIT 405 course website. 
          This course introduces students to web development using HTML, CSS, 
          Javascript, React, and PHP." />
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
  - [Refer to the complete list of valid attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body#attributes)

::right::


```html {monaco}
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
## Common HTML elements

- Headings `<h1>` to `<h6>`
- Paragraphs `<p>`



---

# HTML Headings `<h1>` to `<h6>`

- Heading content defines the heading of a section 
- The `<h1>` to `<h6>` HTML elements represent six levels of section headings. 
  - `<h1>` is the highest section level and `<h6>` is the lowest.
<iframe height="75%" style="width: 100%;" scrolling="no" title="HTML Heading Elements" src="https://codepen.io/kalharbi/embed/eYbvRyp?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/eYbvRyp">
  HTML Heading Elements</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

# HTML Paragraphs
<iframe width="100%" height="300" src="//jsfiddle.net/kalharbi/6ht4ubde/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

---

# HTML Links - Hyperlinks
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.Gio/kalharbi/embed/LYMbLOm?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/LYMbLOm">
  Untitled</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
---

## HTML Images
<iframe width="100%" height="100%" src="//jsfiddle.net/kalharbi/w36u0eoz/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
---

## Lists: Unordered lists \<ul\>
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML Examples" src="https://codepen.io/kalharbi/embed/MWZbOPm?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/MWZbOPm">
  HTML Examples</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Lists: Ordered Lists \<ol\>
<iframe height="300" style="width: 100%;" scrolling="no" title="Ordered List Example" src="https://codepen.io/kalharbi/embed/XWoNzoz?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/XWoNzoz">
  Ordered List Example</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Nesting a List

- The `<ul>` and `<ol>` elements may be nested as deeply as desire.

<iframe height="90%" style="width: 100%;" scrolling="no" title="Nesting a List Example" src="https://codepen.io/kalharbi/embed/dywOdYX?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/dywOdYX">
  Nesting a List Example</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
---

## Table

<iframe height="90%" style="width: 100%;" scrolling="no" title="HTML Table Example" src="https://codepen.io/kalharbi/embed/jOXVZyQ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/jOXVZyQ">
  HTML Table Example</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## HTML Table Colspan & Rowspan

<iframe height="90%" style="width: 100%;" scrolling="no" title="HTML Table Colspan &amp; Rowspan Example" src="https://codepen.io/kalharbi/embed/KKbNQWb?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kalharbi/pen/KKbNQWb">
  HTML Table Colspan &amp; Rowspan Example</a> by Khalid Alharbi (<a href="https://codepen.io/kalharbi">@kalharbi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

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
