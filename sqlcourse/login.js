class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

function users() {
    let users_list = [
        new User('Eugen.Gheorghita', 'SQL_gr.1'),
        new User('Ana.Puscarenco', 'SQL_gr.1'),
        new User('Victoria.Ghidiu', 'SQL_gr.1'),
        new User('Fiodor.Sirghii', 'SQL_gr.1'),
        new User('Ion.Stog', 'SQL_gr.1'),
        new User('Polina.Tihanina', 'SQL_gr.1'),
        new User('Adriana.Cibotari', 'SQL_gr.1'),
        new User('Nicolai.Calin', 'SQL_gr.1'),
        new User('Alexandru.Bolocan', 'SQL_gr.1')
    ];

    return users_list;
}
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    for(let i = 0; i < users().length; i++) {

    }

    if (username != "" && password != "") {
        for(let i = 0; i < users().length; i++) {
            if (username.toLowerCase() == users()[i].username.toLowerCase() && password.toLowerCase() == users()[i].password.toLowerCase()) {
                message.innerHTML = 'success!';
                window.location.href = 'main_page.html';
                break;
            }
            else {
                message.innerHTML = 'Incorrect username or password!';
            }
        }
    }
    else {
        message.innerHTML = 'Incorrect username or password!';
    }
}