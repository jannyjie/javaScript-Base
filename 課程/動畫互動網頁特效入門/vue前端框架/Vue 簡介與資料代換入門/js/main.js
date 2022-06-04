var vm = new Vue({
    el: "#app",
    data: {
        company: "台灣鐵路局",
        ticket: {
            date: "2018.05.02-05.04",
            from: "臺北",
            to: "新竹",
            direction: "south",
            other: "限當日當次車有效",
            price: 250,
            discount: 0.5,
            link: "http://twtraffic.tra.gov.tw/twrail/TW_Quicksearch.aspx"
        }
    }
})