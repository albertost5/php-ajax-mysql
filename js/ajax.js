let loadBtn = document.getElementById('btn_load_users');
let loaderDiv = document.getElementById('loader');



loadBtn.addEventListener('click', function(){

    let request = new XMLHttpRequest();
    // request.open('GET', 'https://api.json-generator.com/templates/Kn4n6fEVUIsC/data');
    request.open('GET', 'php/users.php');
    request.setRequestHeader('Authorization', 'Bearer ' + 'i3xud8ubg5ll5yypdv2wzumdz5zlxo88grhakmrf');
    
    loaderDiv.classList.add('active');

    request.onload = function(){
        // Get data
        let data = JSON.parse(request.responseText);

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
    };

    // 2 request received
    // 3 processing request
    // 4 response ready

    request.onreadystatechange = function(){
        
        if(request.readyState == 4 && request.status == 200){
            loaderDiv.classList.remove('active');
        }

    };

    request.send();
});