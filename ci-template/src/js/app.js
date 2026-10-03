// TODO: write your code here
import {Magician, Daemon} from './character';

console.log('worked');

const mag = new Magician(100);
mag.distance = 2;
console.log(mag.attack);

const daemon = new Daemon(100);
daemon.distance = 2;
daemon.stoned = true;
console.log(daemon.attack);

