class Veichle{

}
class Car extends Veichle{

    start(){
        console.log('car--start');
    }

    stop(){
        console.log('car--stop');
    }

    refuel()
    {
        console.log('car---refuel');
    }

    static billing()
    {
        console.log('car---billing');
    }
}

class BMW extends Car{
    speed = 200;
    //overriden
    start()
    {
        console.log('BMW--start');
    }

    //indvidual
    autoParking()
    {
        console.log('BMW---autoParking');
    }
}