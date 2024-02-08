function login() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    var remember = document.getElementById('rememberCheckbox').checked;

    // Obter dados existentes ou inicializar um array vazio
    var loginData = JSON.parse(localStorage.getItem('loginData')) || [];

    // Adicionar novo conjunto de dados
    loginData.push({ email: email, password: password, remember: remember });

    // Salvar os dados no localStorage
    localStorage.setItem('loginData', JSON.stringify(loginData));

    // Adicione aqui a lógica de autenticação, redirecionamento, etc.
}

// Preencher os campos com os dados salvos, se existirem
window.onload = function () {
    var loginData = JSON.parse(localStorage.getItem('loginData'));

    if (loginData && loginData.length > 0) {
        var lastLogin = loginData[loginData.length - 1];

        document.getElementById('emailInput').value = lastLogin.email;
        document.getElementById('passwordInput').value = lastLogin.password;
        document.getElementById('rememberCheckbox').checked = lastLogin.remember;
    }
};