function irlogin(){
    window.location.href = "login.html"
}
function pedirNome(){
    var nome = prompt("Olá, qual é o seu nome?")
    if (nome!= null && nome!= ""){
        alert("Bem vindo, " + nome + "!")
    }
}