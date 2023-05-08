function irquiz() {
    var idade = document.getElementById("idade").value;
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();
  
    var anoNascimento = parseInt(idade.split("-")[0]);
    var mesNascimento = parseInt(idade.split("-")[1]);
    var diaNascimento = parseInt(idade.split("-")[2]);
  
    var idade = anoAtual - anoNascimento;
  
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
  
    //if (idade >= 18) {
      //alert("Você é maior de idade, pode prosseguir ao quiz.");
      //var caixas = document.querySelector("form");
     // for (var i = 0; i < caixas.length; i++) {
        //if (caixas[i].value == "") {
          //return true;
        //}
      //}
      window.location.href = "quiz.html";
    //} else {
     // alert("Você é menor de idade, não deveria estar aqui.");
     // location.reload();
    //}
    //return false;
  }
  
  //document.querySelector("form").addEventListener("submit", function(event) {
    //event.preventDefault();
    //if (irquiz()) {
      //this.submit();
    //}
  //});