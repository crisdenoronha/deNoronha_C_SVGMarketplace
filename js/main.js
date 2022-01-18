//this is a JS comment
/* this is a block comment
  that can run over a couple of lines */

(() => {

  console. log('this is some text');
  //go into the document and make a reference to an element that you want to work with
  let theHeader = document.querySelector("#main-header");

  //create a function that runs when the element is clicked
  function logElement() {
    console.log('clicked on an element!');
  }
  //the "do something" is the function we run when the element is clicked
  theHeader.addEventListener('click', logElement);

})();
