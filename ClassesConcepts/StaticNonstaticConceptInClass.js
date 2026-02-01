class Util
{
    static timeOut=10;

     static readExcelData()
     {
        console.log('Reading Data from excel.....'); 

     }


     writeData()
     {
        console.log('Writing Data into -File....');
     }
}

let ut=new Util();
console.log(ut.timeOut);//undefine ,should be called through the class name
console.log(Util.timeOut);

//static method
//Util.readExcelData();//classname with static method allowed 
//ut.readExcelData();//refernce with static method not alled 

//non-static method
ut.writeData();
Util.writeData();