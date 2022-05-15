async function parseData(){
    let data = await fetch("https://randomuser.me/api/");
    let parseData = await data.json();
    console.log(parseData);
}

parseData();
