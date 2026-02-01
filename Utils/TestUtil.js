let age=70;
console.log("I am outside the classs.....");
// Utils/TestUtil.js
class TestUtil {

    static count = 0;
    static   
    {
      
        console.log('static-Block---1....');
    }
       static   
    {
      
        console.log('static-Block---1....');
    }
    readData() {
        console.log('reading -Data...');
    }
    writeData() {
        console.log('writing-Data...');
    }

    #readCellData() {
        console.log('reading cell Data....');
    }

    static print() {
        console.log('printing...');
        TestUtil.drive();
    }

    /**
     * 
     * @param {TestUtil} tu 
     */

    static drive(tu)
    {
        console.log('driving...');
        //s-->NS
        //1.create the object of the class and access NOn-static memenber
        // let t1=new TestUtil();
        // t1.readData();
        //2.call  by ref
        tu.readData();
    }   

    testPrivateMethod() {       // public method to access private method
        this.#readCellData();
    }
}

export { age,TestUtil };