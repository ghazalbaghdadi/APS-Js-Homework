// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// ** Why event bubbling is bad ?
// the event bubbling is bad cause when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. (DOM tree) , in some cases you don't want to do the event on its parent or ancestors (for example, from our HTML code, that you want the div to open a modal when it is clicked. For the button, on the other hand, you want it to make an API request when it is clicked. you may not want the modal to open when you click the button. You might want the modal to only open when you actually click it (and not when you click any of its children). This is the issue of event bubbling !

//** How can we prevent it ?
// To prevent event bubbling, you use the (stopPropagation) method of the event object. 
// The stopPropagation method of an event prevents the event from propagating to the parents and ancestors of the element the event was triggered on.

// body.addEventListener('click', () => {
//   console.log("body was clicked")
// })

// div.addEventListener('click', () => {
//   console.log("div was clicked")
// })

// span.addEventListener('click', () => {
//   console.log("span was clicked")
// })

// button.addEventListener('click', (event) => {
//   event.stopPropagation()
//   console.log("button was clicked")
// }) 

//** With this, when you click on the button, all you get in the console is: button was clicked

// (event.stopPropagation) will prevent handlers on parent elements from running 
// (event.stopImmediatePropagation) will also prevent other handlers on the same element from running.