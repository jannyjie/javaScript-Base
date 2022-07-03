//GET請求
var ss = []
axios({
    method: 'get',
    url: 'https://event.1111.com.tw/eventAPI/api/22yADM/Back/GetADMList?type=2&years=111&examType=2&page=1&pageshow=10'
})
.then((response) => {
    ss.push(response.data.dataLists)
    
})
.catch((error) => console.log(error))

console.log('ss', ss);

for (let i = 0; i < ss.length; i++) {
    console.log('ss[i]', ss[i]);
}