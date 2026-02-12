async function fetchData() {
    return "Hello from fetchData!";
}

await fetchData()
    .then(data=>console.log(data))
    .catch(err=>console.log(err));


async function getData(params) {
    try {
        let data=fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }   
}
getData();