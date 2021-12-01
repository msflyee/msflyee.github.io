
var date_compute = function(){
    var date_now = new Date()
    var date_begin = new Date('2020/10/20 20:10:00')
    var date_diff = date_now.getTime() - date_begin.getTime()

    var days = Math.floor(date_diff/(24*3600*1000))
    var left1 = date_diff%(24*3600*1000)

    var hours = Math.floor(left1/(3600*1000))
    var left2 = left1%(3600*1000)

    var mins = Math.floor(left2/(60*1000))
    var left3 = left2%(60*1000)

    var secs = Math.floor(left3/1000);

    var data = {
        days:  days,
        hours: secs,
        mins: mins,
        secs: secs
    }
    var app = new Vue({
        el:'#time',
        data:data,
        
    })
}
date_compute()
setInterval(date_compute(),1000)

