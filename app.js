function myFunction() {
    var para = document.createElement('p');
    var x = document.getElementById("txtform");
    var txt = document.getElementById('txtName').value + ' : ' + document.getElementById('txtMobile').value + '<br>';
    para.innerHTML = txt;
    document.getElementById('demo').appendChild(para);
    document.getElementById("txtName").value = null;
    document.getElementById("txtMobile").value = null;


}