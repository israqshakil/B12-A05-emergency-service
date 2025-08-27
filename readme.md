### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    - getElementById() method returns an element with a specific value.
    - getElementsByClassName() method returns a collection of elements with a specific class name.
    - querySelector() method returns the first element of a CSS selector.

### 2. How do you create and insert a new element into the DOM?

    - createElement()
    - setAttribute()
    - createTextNode()
    - appendChild()

### 3. What is Event Bubbling and how does it work?

    - Event bubbling is the concept of DOM.
    - It is a phase in the event propagation process where an event starts from the target element and bubbles up through the DOM tree to its parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

    - Event Delegation is a pattern to handle events efficiently.
    - Improved performance
    - Attaching a single event listener is more efficient than attaching multiple event listeners to individual elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

    - preventDefault() is used to prevent the default action that belongs to the event.
    - stopPropagation() is used to stop the event from bubbling up to parent elements.
