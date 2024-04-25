// quando o usuario digitar ela vai captura as informacões tanto do nome como da necessidades emocionais. 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('emotionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtém os valores do formulário
        var name = document.getElementById('name').value;
        var needs = document.getElementById('needs').value;

        // Redireciona para a próxima página com os parâmetros na URL
        window.location.href = "./chat.html?name=" + encodeURIComponent(name) + "&needs=" + encodeURIComponent(needs);
    });
});

