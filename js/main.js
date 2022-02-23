let loadBtn = document.getElementById('btn_load_users');
let loaderDiv = document.getElementById('loader');
let errorBox = document.getElementById('error_box');
let userTable = document.getElementById('user_table');

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

loadBtn.addEventListener('click', function(){
    loadUsers();
});