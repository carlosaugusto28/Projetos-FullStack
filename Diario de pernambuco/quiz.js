function redirecionar(){
    window.location.href = "noticia.html"
}
function mostrarAlerta(){
    alert("Obrigado pelo seu tempo!, agora vamos te redirecionar até o site principal")
    location.reload()
    window.location.href = "quiz.html"
}
function irdiario(){
    location.reload()
    window.location.href = "noticia.html"
}
const checkboxes = document.querySelectorAll('input[type=checkbox]');

const checkboxesArray = Array.from(checkboxes);

checkboxesArray.forEach(function(checkbox){
    checkbox.addEventListener('click', function(){
        checkboxesArray.forEach(function(currentCheckbox){
            if(currentCheckbox !== checkbox){
                currentCheckbox.checked = false;
            }
        });
    });
});
