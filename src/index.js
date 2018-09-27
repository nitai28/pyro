function init() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=' + 293396 + '&APPID=c22f034e2258cb9bcf0ac02604034c7b&units=metric')
        .then(function (res) {
            document.querySelector('.temp').innerHTML = Math.floor(res.data.list[0].main.temp);
        });
    updateDateTimeTemp()
}

function updateDateTimeTemp() {
    var dateNow = moment().format('DD/MM/YY');
    moment.locale('he');
    var day = moment().format('dddd');
    var currTime = moment().format('LT');
    document.querySelector('.time').innerHTML = currTime;
    document.querySelector('.day-name-heb').innerHTML = 'יום ' + day;
    document.querySelector('.curr-date').innerHTML = dateNow;

}