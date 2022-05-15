// https://openweathermap.org/current
let myKey = '45911111b9c';
let city = 'Taipei';
let url = `http://api.weatherstack.com/current?access_key=${myKey}&query=${city}`;

async function getWeather(){
    let d = await fetch(url);
    let  dj = await d.json();
    console.log(dj);
}

getWeather()

// https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/%E4%BB%A5-api-key-%E4%B8%B2%E6%8E%A5%E5%BF%83%E6%9C%89%E8%A8%AD%E9%98%B2%E7%9A%84api-a499dee188e8

// 保護 API 的 API key
// Auth 採用 API key 的意思是我們使用 API 抓資料時必須將 API key 帶在 request 裡。API key 就像通關密語，就像阿里巴巴喊芝麻開門打開石門得到寶藏，只有知道 API key 的人才能連線後台抓取寶貴的資料。