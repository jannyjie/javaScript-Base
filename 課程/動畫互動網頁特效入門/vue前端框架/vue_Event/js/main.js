var vm = new Vue({
    el: '#app',
    data: {
        a: 1,
        b: 10,
        what: '',
        tag: '',
        doWhat: ''
    },
    methods: {
        aPlus1AndbMinus: function (event) {
            this.a += 1;
            this.b -= 1;

            console.log(`You clicked ${event.target.tagName}`);
        },
        clickWhat: function (what, event) {
            this.what = what;
            this.tag = event.target.tagName;
        },
        showUp: function (event) {
            this.doWhat = `up ${event.target.tagName}`;
        },
        showDown: function (event) {
            this.doWhat = `down ${event.target.tagName}`;
        }
    }
});