<?php

error_reporting(0);
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'php_ajax');

if ($db->connect_errno) {
    $response = [
        'error' => 'There was an error getting the data.'
    ];
} else {
    $db->set_charset("utf-8");
    $statement = $db->prepare("SELECT * FROM user");
    $statement->execute();
    $users = $statement->get_result()->fetch_all();

    $response = [];

    foreach ($users as $user) {
        $row = [
            'id'        => $user[0],
            'name'      => $user[1],
            'age'       => $user[2],
            'country'   => $user[3],
            'email'     => $user[4]
        ];
        array_push($response, $row);
    }
}

echo json_encode($response);
