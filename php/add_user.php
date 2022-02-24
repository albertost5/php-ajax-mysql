<?php

error_reporting(0);
header('Content-type: application/json; charset=utf-8');


$name = $_POST['name'];
$age = $_POST['age'];
$country = $_POST['country'];
$email = $_POST['email'];

function validateData($name, $age, $country, $email)
{
    // do some COMPLEX and USEFUL validation here...
    if($name == ''){
        return false;
    }else if($age == ''){
        return false;
    }else if($country == ''){
        return false;
    }else if($email == ''){
        return false;
    }

    return true;
}


if(validateData($name, $age, $country, $email)){
    $mysqli = new mysqli('localhost', 'root', '', 'php_ajax');
    $mysqli->set_charset('utf-8');

    if($mysqli->connect_errno) {
        $response  = [
            'error' => 'There was an error connecting to the db.'
        ];
    }else {
        $statement = $mysqli ->prepare("INSERT INTO user (name, age, country, email) VALUES (?,?,?,?)");
        $statement->bind_param("siss", $name, $age, $country, $email);
        $statement->execute();

        if($mysqli ->affected_rows <= 0){
            $response = [
                'error' => 'There was a problem adding the new user.'
            ];
        }
    }

    $response = [
        'message' => 'The new user was added succesfully.'
    ];
    
}else {
    $response = [
        'error' => 'Invalid data.',
        'name' => $name,
        'age' => $age,
        'country' => $country,
        'email' => $email
    ];
}   

echo json_encode($response);