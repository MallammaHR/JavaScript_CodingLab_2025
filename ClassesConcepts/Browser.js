class broswer{

    launchBrowser()
    {
        console.log('Launching-Browser....');
        this.#checkRAM();
        this.#checkVersionUpDate();
        this.#checkOSCompatible();
        this.#checkNewUpDates();
        console.log('Browser is Launched......');
    }

    #checkRAM(){
        console.log('Checking the RAM....');
    }

    #checkVersionUpDate()
    {
        console.log('Checking the Vsersion of the Broswer....');
    }

    #checkOSCompatible()
    {
        console.log('OS is compatible....');
    }

    #checkNewUpDates()
    {
        console.log('Check New Updates from market place...');
    }
}

let obj=new broswer();
obj.launchBrowser();