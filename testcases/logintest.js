// testcases/logintest.js
import  { TestUtil,age } from "../Utils/TestUtil.js";

let ul = new TestUtil();

ul.readData();
ul.writeData();
TestUtil.print();
console.log(TestUtil.count);
ul.testPrivateMethod();   // accessing private method via public method        // calling static method
console.log(age);

TestUtil.drive(ul);
