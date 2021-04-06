function ExampleConstructor() {}
console.log('log the value of prototype property of the ExampleConstructor function to the console: ', Object.getPrototypeOf(ExampleConstructor));
console.log('lgo the value of the prototype property of variable to console: ', typeof Object.getPrototypeOf(ExampleConstructor));
var newVariable = new ExampleConstructor();
console.log('Call the example constructor function with the neew var etc... ', newVariable); // it seems it calls the original function.
var instanceOfBool = newVariable instanceof ExampleConstructor;
console.log('is newVariable an instance of ExampleConstructor function?: ', instanceOfBool);
