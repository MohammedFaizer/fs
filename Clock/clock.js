function app() {
    var d =new Date();
    var hr=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    document.getElementById('main').innerHTML=hr+":"+min+":"+sec;
}
setInterval(app,1000)