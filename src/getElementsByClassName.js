// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document) {

  //input: className
  //output: array
  //constraints:
  //edgecase: must use recursion


  //base case - when the function can produce a result without recursing
  //recursive case - function which calls on itself

  var nodeArray = [];

  if (node.classList && node.classList.contains(className)) {
    nodeArray.push(node);
  }

  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      nodeArray = nodeArray.concat(getElementsByClassName(className, node.children[i]));
    }
  }

  return nodeArray;

};

/*
Psuedoecode
  Notes on function:
  node = document in the argument
    node - is an HTML element in a document or DOM tree structure representing the HTML of the website. Every HTML element is a node.
    document - or Document Object Model represents your web page,

  //create nodeArray to house our nodes

  //if node has a class && the className is what we are looking for
    //put the node inside our nodeArray

  //if node.children exist
    //loop over the node.children
      //set the nodeArray = to combining the the additional node childens classes

*/

