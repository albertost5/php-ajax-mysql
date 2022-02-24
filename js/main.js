let loadBtn = document.getElementById('btn_load_users');
let loaderDiv = document.getElementById('loader');
let errorBox = document.getElementById('error_box');
let userTable = document.getElementById('user_table');
let formAddUser = document.getElementById('addUser');

let userName;
let userAge
let userCountry;
let userEmail;

const loadUsers = () => {
    userTable.innerHTML = '<tr><th>ID</th><th>Name</th><th>Age</th><th>Country</th><th>Email</th></tr>';

    let request = new XMLHttpRequest();
    request.open('GET', 'php/users.php');
    loaderDiv.classList.add('active');

    request.onload = function(){
        // Get data
        let data = JSON.parse(request.responseText);
        
        if(data.error){
            errorBox.classList.add('active');
        }else{ 
            // Print data
            data.forEach(user => {
                let row = document.createElement('tr');
                row.innerHTML += ('<td>' + user.id + '</td>');
                row.innerHTML += ('<td>' + user.name + '</td>');
                row.innerHTML += ('<td>' + user.age + '</td>');
                row.innerHTML += ('<td>' + user.country + '</td>');
                row.innerHTML += ('<td>' + user.email + '</td>');
                document.getElementById('user_table').appendChild(row);
            });
        }

    };

    request.onreadystatechange = () => {     
        if(request.readyState == 4 && request.status == 200){
            loaderDiv.classList.remove('active');
        }
    };

    request.send();
}

const validForm = () => {
    if(userName == ''){
        return false;
    }else if (isNaN(userAge)){
        return false;
    }else if (userCountry == ''){
        return false;
    }else if (userEmail == ''){
        return false;
    }

    return true;
}

const addUser = (e) => {
    e.preventDefault();

    let request = new XMLHttpRequest();
    request.open('POST', 'php/add_user.php');
    
    // do some COMPLEX and USEFUL validation here...
    userName = formAddUser.name.value.trim();
    userAge = parseInt(formAddUser.age.value.trim());
    userCountry = formAddUser.country.value.trim();
    userEmail = formAddUser.email.value.trim();
    
    if(validForm()) {
        errorBox.classList.remove('active');

        let response  = 'name=' + userName + '&age=' + userAge + '&country=' + userCountry + '&email=' + userEmail;

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        loaderDiv.classList.add('active');

        request.onload = () => {
            loadUsers();
            formAddUser.name.value = '';
            formAddUser.age.value = '';
            formAddUser.country.value = '';
            formAddUser.email.value = '';
        }
        
        request.onreadystatechange = () => {
            if(request.readyState == 4 && request.status == 200){
                loaderDiv.classList.remove('active');
            }
        }

        request.send(response);
    }else {
        errorBox.classList.add('active');
        errorBox.innerHTML = 'Please, complete the form correctly.';
    }


}

loadBtn.addEventListener('click', () => {
    loadUsers();
});

formAddUser.addEventListener('submit', (e) => {
    addUser(e);
});