

function mediaValores(){
    var s1 = document.getElementById("valor1").value;
    var s2 = document.getElementById("valor2").value;
    var s3 = document.getElementById("valor2").value;
    var s4 = document.getElementById("valor2").value;
    var result = (parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4)) / 4;
   document.getElementById("resultado"). innerHTML = result;
}

function limparValores(){
    document.getElementById('valor1').value=('');
    document.getElementById('valor2').value=('');
    document.getElementById('valor3').value=('');
    document.getElementById('valor4').value=('');
}
