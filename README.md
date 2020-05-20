# Scripting with Node.js

We want to create JSON objects of each "component" (the name, description, inputs, and other UI for each function) from our Utility Library HTML pages.

Below is an example of a component object.

We want to produce an array of these objects.

```javascript
{
   name: "thirdBasicFunc", // String
   desc: "The third function in my basic utility library.", // String
   inputs: 3, // Number
   type: "basic", // String
   typeNum: 100, // Number
   isFavorite: false, // Boolean
   order: 102 // Number
}
```

Each HTML page has a type of "basic", "intermediate", "functional", "algorithm", or "regex". Just assign the type based on the page you are scraping. You are scraping one page at a time, so adjust your script each time.

These types are associated with a made-up number below.
These numbers will help with ordering our data later.

```javascript
const typeNums = {
   basic: 100,
   intermediate: 200,
   functional: 300,
   algorithm: 400,
   regex: 500,
};
```

Simply "hard-code" `type`, `typeNum`, and `isFavorite` when mapping the HTML to a JavaScript object. `order` is simply the index of the object in the array added to the `typeNum` (I explain this more in the video).

The following functions get the relevant data from our HTML page:

`getComponents()`
`getName()`
`getDesc()`
`getInputs()`

These functions are provided to you in `regex.js` and I discuss how to use them in the video.
