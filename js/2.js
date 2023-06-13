// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }

const deliverPizza = (pizzaName)  => `Delivering ${pizzaName} pizza.`;

  
const makePizza = (pizzaName) => `Pizza ${pizzaName} is being prepared, please wait...`;

  
  const makeMessage = (pizzaName, callback) => callback(pizzaName);
