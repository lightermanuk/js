// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 3
 
 
// Lists
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add an element to the end
numbers.splice(2, 1); // Remove one element at index 2
console.log(numbers); // Output: [1, 2, 4, 5, 6]
 
//Dictionaries
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
 
// sets
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate value will not be added
mySet.add('hello');
 
console.log(mySet); // Output: Set { 1, 5, 'hello' }
console.log(mySet.has(1)); // Output: true
mySet.delete(5);
console.log(mySet); // Output: Set { 1, 'hello' }
 
// Maps
//A Map is a collection of key-value pairs where the keys can be of any type.
//This is similar to objects but with some differences,
//such as preserving the insertion order and allowing any type of keys.
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'Boolean Key');
 
console.log(myMap.get('name')); // Output: Alice
console.log(myMap.size); // Output: 3
myMap.delete('age');
console.log(myMap); // Output: Map { 'name' => 'Alice', true => 'Boolean Key' }
 
// Weak Set
//A WeakSet is similar to a Set but only allows objects as its members and holds weak references to them.
//This means that if there are no other references to an object stored in the WeakSet,
//it can be garbage-collected.
 
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
 
console.log(weakSet.has(obj)); // Output: true
obj = null; // Now the object can be garbage-collected
 
//Typed Arrays
//Typed Arrays provide a way to work with binary data.
//They allow you to create arrays of a specific type (e.g., Int8Array, Uint8Array, Float32Array).
 
let buffer = new ArrayBuffer(8); // Create a buffer of 8 bytes
let view = new Int32Array(buffer); // Create a typed array view
 
view[0] = 42;
console.log(view[0]); // Output: 42
 
// Stacks and queues
class Stack {
    constructor() {
        this.items = [];
    }
 
    push(element) {
        this.items.push(element);
    }
 
    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }
 
    isEmpty() {
        return this.items.length === 0;
    }
 
    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }
}
 
let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack.peek()); // Output: 1
 
// QUEUE FIFO
class Queue {
    constructor() {
        this.items = [];
    }
 
    enqueue(element) {
        this.items.push(element);
    }
 
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
 
    isEmpty() {
        return this.items.length === 0;
    }
 
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }
}
 
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
