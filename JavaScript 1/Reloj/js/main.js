var meses = ['Enero', 'Febrero']
var dias = ['Lunes']

var actualizar = function(){
    var miFecha = new Date();
    document.getElementById('dia').innerHTML = dias[miFecha.getDay() - 1]+ '' + miFecha.getUTCDate() + 'de ';
    document.getElementById('mes').innerHTML = meses[miFecha.getMonth]+ 'del';
    document.getElementById('año').innerHTML = miFecha.getFullYear();
    
    document.getElementById('hora').innerHTML = miFecha.getHours() + ' : ';
    document.getElementById('minuto').innerHTML = miFecha.getMinutes() + ' : ';
    document.getElementById('segundo').innerHTML = miFecha.getSeconds();