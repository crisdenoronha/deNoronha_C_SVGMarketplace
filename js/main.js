//this is a self-invoking anonymous function
/* it is also called a module (my variation of the module pattern)
  it encapsulates all of your custom code and makes it private */

(() => {

  console. log('this is some text');
  //go into the document and make a reference to an element that you want to work with
  let theHeader = document.querySelector(".main-header"),
      theIcons = document.querySelectorAll(".icon");

  //create a function that runs when the element is clicked
  function logElement() {
    console.log('clicked on an element: ', this.id);
  }
  //add event handling here (user "triggers")
  //add event you want to listen for, and the function that should be runs
  theHeader.addEventListener('click', logElement);

  //loop through all of the icons and add event handling to them
  //process each icon one at a time and add behaviour
  theIcons.forEach(icon => icon.addEventListener("click", logElement));


})();
