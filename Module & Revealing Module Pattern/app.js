
// Basic Structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions

//   }
// })();


// Standard Module Pattern
const UIControl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UIControl.callChangeText();

// Revealing Module Pattern
const ItemControl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added......')
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemControl.add({id: 1, name: 'John'});
console.log(ItemControl.get(1));