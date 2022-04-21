let cookieAry = document.cookie.split(';')
let cookieKey = []
let userData = {}


for (let i = 0; i < cookieAry.length; i++) {
       cookieKey = cookieAry[i].split('=')[0].trim()
       if(cookieKey == 'talents') {
       userData = cookieAry[i].trim().replace('talents=', '') }
}
