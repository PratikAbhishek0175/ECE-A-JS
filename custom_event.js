import {EventEmmiter} from 'events';
const emitter = new EventEmmiter();

//Event register using .on() method
emitter.on('login', (data) => {
    console.log(`data received ${data}`);
});