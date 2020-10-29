// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(value, result) {
  //input: value
  //output: a stringified version of the value
  //constraints:
  //edgecase: must use recursion

  //base case - when the function can produce a result without recursing
  //recursive case - function which calls on itself

  if (result) {
    result = result;
  } else {
    result = '';
  }

  //Check if value is a function or undefined since they are unstringifiable;
  if (typeof value === 'function' || typeof value === 'undefined') {
    result = undefined;

  //Check if value is null or not an object and if it it a string
  } else if (value === null || typeof value !== 'object' ) {
    if (typeof value === 'string') {
      result = result + `"${value}"`;
    } else {
      result = result + value;
    }

  //Check if it is an array
  } else if (Array.isArray(value)) {
    result += '[';
    for (var i = 0; i < value.length; i++) {
      result = stringifyJSON(value[i], result);
      if (i < value.length - 1) { result += ','; }
    }
    result += ']';

  //If it not an array it is an object
  } else {
    var counter = 0;
    result += '{';
    for (var key in value) {
      if (stringifyJSON(value[key])) {
        result = stringifyJSON(key, result) + ':';
        result = stringifyJSON(value[key], result);
        if (counter < Object.keys(value).length - 1) { result += ','; }
      }
      counter++;
    }
    result += '}';
  }
  return result;
};


/*

Notes:
JSON is a format to represent values and objects.
JSON. stringify to convert objects into JSON.
  It can be applied to objects, arrays, and primitives: strings, numbers, booleans, null

Pseudocode:

Start with an empty string unless a value for result is passed in
if value is type of function or undefined: result = undefined
if value is typeof null or not an object
  If true check if typeof is string
    if true result = result + "value"
  Otherwise
  result = result + value
Otherwise if value is an array
  Add "[" to result
  Loop over the array
  Stringify each element of an array before adding to result by using recursion and calling the function at the element
  If the element is not the last index add a comma between elements
  Add "]"
Otherwise (value is an object)
  Create counter and set it equal to 0 for the commas later;
  Add "{"
  Loop over object
    If calling on the function at the value
      add stringified key to the result
      add stringified value to the result
      If the key value pair is not the last pair
      Add a comma between elements
    Increase the counter for every loop through the keys
  Add "}";
return result;

*/
