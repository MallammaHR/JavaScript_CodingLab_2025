//sync - async activities

//task ; async steps ---> execute all the async steps in a particular sequence
//step1 - III
//step2 - IV
//step3 - II
//step4 - V
//step5 - I

//Async -- parallel 
//1. startMAchine -- 5 secs
//2. boilwater -- 3 secs
//3. addCoffeePowder --- 4 secs
//4. pourInCup -- 2 secs
//5. serveCoffee -- 1 sec


//Async -- functions: having its own timeout
function startMachine(callback) {
    setTimeout(() => {
        console.log('1. Machine started');
        callback();
    }, 5000);
}

function boilWater(callback) {
    setTimeout(() => {
        console.log('2. Water bolied');
        callback();
    }, 3000);
}


function addCoffeePowder(callback) {
    setTimeout(() => {
        console.log('3. Coffee powder added');
        callback();
    }, 2000);
}

function pourInCup(callback) {
    setTimeout(() => {
        console.log('4. Poured in cup');
        callback();
    }, 2500);
}

function serveCoffee(callback) {
    setTimeout(() => {
        console.log('5. Coffee served');
        callback();
    }, 500);
}

// startMachine(() => { });
// boilWater(() => { });
// addCoffeePowder(() => { });
// pourInCup(() => { });
// serveCoffee(() => { });


//callback hell: pyramid of doom... worst way of coding....10-15 yrs back -- protractor
startMachine(() => {
    boilWater(() => {
        addCoffeePowder(() => {
            pourInCup(() => {
                serveCoffee(() => {
                    console.log('hey!! your coffee is ready...enjoy!!!');
                })
            })
        })
    })
})

//to solve callback hell ---> we have to start using Promises ----> Async/Await



