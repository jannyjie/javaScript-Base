methods: {
    this.fetchData(this.talentNoApiPath, (res) => {
        if(res.data.talentNo !== ''){
            this.talentNo = res.data.talentNo
        } else{
            this.talentNo = false
            alert('請登入會員');
            window.location.href = 'http://192.168.1.234/talents/memberlogin.asp?ref='+ window.location.href 
        }
    });
    async action(){
        if(this.isActionAnimation){
            // alert('抽獎進行中 請稍候再點擊')
            return
        }
        if(!this.talentNo){
            alert('請先登入會員')
            return
        }
        this.isActionAnimation = true
        
        let data = new FormData();
        data.append('select_staff', this.talentNo)//47652779
        data.append('is_test', 0)
        data.append('count_people', 50)
        data.append('winner_max', this.winner_max)
        await this.postData(
            this.lotteryApiPath,
            data,
            (res) => {
                console.log('status = ', res.data[0].status)
            }
        )
    };
    /**
        * 資料獲取
        * @param {string} url - API路徑
        * @param {function} callback - 回呼函數
        */
     fetchData(url, callback) {
        return axios
            .get(url)
            .then((res) => {
                callback(res)
            })
            .catch((error) => {
                console.log('error path = ', url)
                console.log('error msg = ', error)
            })
    };
    postData(url, data, callback) {
        return axios({
                method: 'post',
                url: url,
                data: data
            })
            .then((res) => {
                callback(res)
            })
            .catch((error) => {
                console.log('error path = ', url)
                console.log('error msg = ', error)
            })
    };
}