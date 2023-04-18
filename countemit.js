const EventEmitter = require('events');

const myEmitter = new EventEmitter();


let count = 0;


myEmitter.on('increment', () => {
  count++;
  console.log(`Count is now ${count}`);
});


setInterval(() => {
  myEmitter.emit('increment');
}, 10000); 
