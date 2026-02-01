import {Car,BMW} from "../Inheritance/Inheritance.js";

let bw= new BMW();
bw.start();//overridden
bw.speed();//inheritend
bw.refuel();//inherted
bw.autoParking();//inidviusal
console.log(bw.speed);
bw.b