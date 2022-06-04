var vm = new Vue({
    el: "#app",
    data: {
        basePrice: 100,
        serviceFee: 10,
        minPrice: 0,
        maxPrice: 10000,
        keyword: "",
        cards: [{
                title: "醬油拉麵",
                cover: "http://www.tabirai.net/tabirai-uploader/img/0005408/s1_0005408.jpg",
                price: 150,
                soldOut: true
            },
            {
                title: "豚股拉麵",
                cover: "http://3.bp.blogspot.com/-aj0ideQcly0/VfZ5RvLGyDI/AAAAAAAAWzE/Vy6U0R6vs90/s1600/IMG_2848.jpg",
                price: 250
            },
            {
                title: "南洋咖哩拉麵",
                cover: "http://img.anikolife.com/uploads/20180325191054_65.jpg",
                price: 300
            }, {
                title: "味噌叉燒拉麵",
                cover: "http://img.listen-vision.com/uploads/20170830235936_33.jpg",
                price: 150
            },
            {
                title: "蝦醬豚骨拉麵",
                cover: "http://d10pyp7ylo9bub.cloudfront.net/2017/06/tokyofruitramen_papapapapain1.jpg",
                price: 250
            },
            {
                title: "豚骨叉燒拉麵",
                cover: "https://farm1.static.flickr.com/380/32022985490_3e2bfbe774_b.jpg",
                price: 300
            }

        ]
    }
})