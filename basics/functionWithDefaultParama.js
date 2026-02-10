function print(name = "MalluMani") {
    console.log("hi " + name);
}
print();
/**
 * 
 * @param {String} envName 
 */
function runTestcase(envName = "dev") {
    switch (envName) {
        case "qa":
            console.log("tests run on qa");
            break;
        case "stage":
            console.log("tests run on stage");
            break;
        case "uat":
            console.log("tests run on uat");
            break;
        case "prod":
            console.log("tests run on prod");
            break;
        case "dev":
            console.log("tests run on dev");
            break;
        default:
            console.log("invalid env" + envName);
            break;
    }
}
runTestcase();
runTestcase("dev");

