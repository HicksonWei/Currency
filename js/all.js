
let xhr = new XMLHttpRequest();
xhr.open('get','http://www.apilayer.net/api/live?access_key=5c507631757044bf6493b35d08fb72e1&format=1D',true);
xhr.send(null);
xhr.onload = function(){
    let str = xhr.responseText;
    let obj = JSON.parse(str);
    let currency = obj.quotes;
    let curStr = JSON.stringify(currency);
    localStorage.setItem('info', curStr);
};

setTimeout(function () {
    location.reload();
}, 5 * 60 * 1000);

let refresh = document.querySelector('.refresh');
refresh.addEventListener('click', function(e){
    location.reload();
    console.log('click');
}, false);


let money = new Vue({
    el: '#money',
    data: {
        basic: 1000,
        info: JSON.parse(localStorage.getItem('info')),
    },
    computed: {
        USD: function(){
            return this.basic / this.info.USDTWD;
        },
        JPY: function () {
            return this.basic / this.info.USDTWD * this.info.USDJPY;
        },
        HKD: function () {
            return this.basic / this.info.USDTWD * this.info.USDHKD;
        },
        EUR: function () {
            return this.basic / this.info.USDTWD * this.info.USDEUR;
        },
        CNY: function () {
            return this.basic / this.info.USDTWD * this.info.USDCNY;
        },
        GBP: function () {
            return this.basic / this.info.USDTWD * this.info.USDGBP;
        },
        AUD: function () {
            return this.basic / this.info.USDTWD * this.info.USDAUD;
        },
    },
});