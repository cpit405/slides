---
# try also 'default' to start simple
theme: default
title: 'Ajax'
titleTemplate: '%s - CPIT-405'
# apply any windi css classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: | 
    AJAX (Asynchronous JavaScript and XML) and using the fetch API
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

# JAJAX
## Asynchronous JavaScript and XML (AJAX) and using the fetch API
### CPIT-405 Web Applications


<div class="absolute left-30px bottom-30px">
Fall 2023 &copy; Khalid Alharbi, Ph.D.
</div>

---
layout: center
---
## Table of Contents
- JSON
- AJAX
- Fetch API

---

# JSON
- JSON stands for JavaScript Object Notation
- JSON is a lightweight, text-based, language-independent data interchange format
- The goal is to facilitate structured data-interchange
- Based on a small subset of JavaScript, but it is programming language independent
- JSON provides a simple notation that is easy to read and write
- Often used with AJAX as a replacement for XML
- Most programming languages have support for encoding and decoding JSON

---

## Comparison with XML
- Both JSON and XML can be used to exchange data with a server.
- JSON is often shorter, faster, and easier to read and write
- Unlike XML, comments are not supported in JSON
- JSON can be parsed by a standard JavaScript function while XML is parsed with a special XML parser.
- Most RESTful APIs (e.g., Twitter API, Instagram API, and GitHub API) return responses in JSON format only.

---

# JSON Syntax
- Uses key/value pairs  (e.g., `{"name": "Ali"}` )
- A key is a string in double quotes
- A value can be a string in double quotes, a number, true, false, null, an object, or an array. 
- Pairs are separated by commas (e.g., `{"name": "Ali", "age": 20}`)
- Curly braces hold zero or more name/value pairs
- Square brackets hold arrays
- Double quotes around both the name (key) and value
- Filename extension is **.json**
- Internet media type (MIME type in RESTful APIs) is `"application/json"`

---

# JSON Value
- A value can be a string in double quotes, a number, an object, an array, true, false, or null.

![](/images/json-value.png)

---

# JSON Data Types

- JSON Values must be in one of the following types:
- **Number**: JSON treats numbers as a sequence of digits. No distinction between integer and floating-point
- **String**: A sequence of zero or more Unicode characters enclosed in double quotes
- **Boolean**: `true` or `false`
- **Array**: Ordered list of zero or more values wrapped in square brackets `[]`
- **Object**: Unordered collection of key/value pairs
- **Null**: Empty value using the word `null`

---

# JSON Example

```json{monaco}
 {
      "name": "Ali",
      "age": 26,
      "employed": true, 
      "car": null,
      "address": {
           "city": "Jeddah",
           "street": "300 Airport Rd."
      },
      "languages": [ "JavaScript", "Python", "Go"]
  }

```

---

# Creating and Parsing JSON

- JSON is often used to exchange data to/from a web server
- Data is always sent and received over HTTP in a string format
- To convert a JavaScript object into string, we use JSON.stringify()
- To convert a string into a JavaScript object, we use JSON.parse()

---

# Creating JSON in JS using `JSON.stringify()`

- To convert any JavaScript value into JSON notation, use the static method `JSON.stringify()`.

### Example

```html{monaco}
<body>
    <code id="json-block"></code>
<script>
  // Create an object
  var user = { name: "Ali", 
               languages: ["JavaScript", "Python", "Go"] };
  // Convert it into JSON
  var jsonText = JSON.stringify(user);
  document.getElementById("json-block").innerHTML = jsonText;
</script>
</body>

```

---

# Parsing JSON in JS using `JSON.parse()`

- To parse a JSON string and construct a JavaScript value or an object, use the static method `JSON.parse()`.

```html{monaco}
<body>
<h2 id="user-name"></h2>
<p id="languages"></p>
<script>
// Our JSON string
var jsonText = '{"name": "Ali",
                "languages": ["JavaScript", "Python", "Go"] }';
// Parse it into a JS object
var user = JSON.parse(jsonText);
document.getElementById("user-name").innerHTML= user.name;
document.getElementById("languages").innerHTML = "Loves: " + user.languages.join(", ");
</script>
</body>

```

---

# JSON validation

- JSON data is often written and sent without whitespaces to save space; hence, it becomes difficult to read and solve syntax errors in JSON.
- JSON data that does not follow JSON syntax rules can’t be parsed by JSON.parse()
Tools that aid in formatting and debugging JSON data is often called beautifiers and linters respectively.
- Many text editors (e.g., VS Code) provide support for formatting JSON data.
- Online third-party tools are also available: e.g., https://jsonlint.com

---

# Asynchronous JavaScript (Ajax programming)

- Asynchronous JavaScript and XML (Ajax) is an approach to using a set of existing web technologies to create asynchronous web applications that are capable of fetching resources over a network and update the web page without reloading the entire page. 
- This makes web applications faster and more responsive to user actions.
- Although the X in Ajax stands for XML, JSON is preferred over XML nowadays because of its many advantages such as being more readable, lighter in size and very close to JavaScript with native support for parsing JSON using the built in method `JSON.parse()`.

---

# Ajax programming
- We will look at three ways on how to consume an API in JavaScript using three methods:
  - The `XMLHttpRequest` API
  - The `fetch` API
  - The `fetch` API with `async`/`await`

- For examples, please refer to the lecture note at [cpit405.gitlab.io/examples/ajax/](https://cpit405.gitlab.io/examples/ajax/)

---

# Receiving JSON data - `XMLHttpRequest`
- The most common way of using JSON is when exchanging data with a web server through a RESTful API.
- The XMLHttpRequest object is used to send and receive data from web servers without having to do a full web page refresh/reload.
- Despite the XML and Http in its name, it can be used to retrieve any kind of data including JSON and over other protocols such as FTP and File.
- It is part of a technique named Asynchronous JavaScript And XML (AJAX) that was originally designed by Microsoft and adopted by Mozilla, Apple, and Google.


---

# `XMLHTTPRequest` Example

```html{monaco}
<script>
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
 // When the request is successful, finished, and response is ready
 if (this.readyState == 4 && this.status == 200) {
   document.getElementById("gh-users").innerHTML = xhttp.responseText;
 }
};
// Send an asynchronous HTTP GET request to the given end point (url)
xhttp.open("GET", "https://api.github.com/users/github", true);
xhttp.send();
</script>
```