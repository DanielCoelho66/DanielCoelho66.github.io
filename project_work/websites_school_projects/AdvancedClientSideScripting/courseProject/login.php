<?php

//connects to the database
$dsn = 'mysql:host=localhost;dbname=db200250436';
$userName = 'db200250436';
$password = '98078';
try {
    $db = new PDO($dsn, $userName, $password);
} catch (PDOException $e) {
    echo 'There was a problem connecting to the database ';
    echo $e->getMessage();
}

session_start();

// check if they requested json or html
$request_verb = strtolower($_SERVER['REQUEST_METHOD']);
$match_regex = '/application\/json/i';
$request_type = (
        ( isset($_SERVER['CONTENT_TYPE']) && strtolower($_SERVER['CONTENT_TYPE']) == 'application/json' ) ||
        ( isset($_SERVER['HTTP_ACCEPT']) && preg_match($match_regex, $_SERVER['HTTP_ACCEPT']) )
        ) ? 'json' : 'html';

$errors = array();

//see if theres already an active session logged in
function loggedIn() {
    if (isset($_SESSION['loginUser'])) {
        return true;
    } else {
        return false;
    }
}

if ($request_verb == 'post') {
    if (!loggedIn()) {
        if (preg_match('/^\s*$/', $_POST['loginUser'])) {
            $errors['loginUser'] = 'You must supply a username';
        }
        if (preg_match('/^\s*$/', $_POST['loginPass'])) {
            $errors['loginPass'] = 'You must supply a password';
        }

//fetch the username and password from the database
        if (empty($errors)) {
            $result = $db->prepare('SELECT * FROM todoUsers WHERE loginUser=? AND loginPass=? LIMIT 1');
            $result->bindParam(1, $_POST['loginUser']);
            $result->bindParam(2, $_POST['loginPass']);
            $result->setFetchMode(PDO::FETCH_OBJ);
            $result->execute();
            $user = $result->fetch();
            if (!$user) {
                $errors['loginUser'] = 'Username or password is invalid';
            }
        }
    }
    if (empty($errors)) {
        if (!loggedIn()) {
            $_SESSION['loginUser'] = $_POST['loginUser'];
        }

        if ($request_type == 'json') {
            header('Content-type: application/json', true, 200);
            echo json_encode(array('success' => true));
            exit;
        } else {
            header("Location: index.php");
            exit;
        }
    } else {
        if ($request_type == 'json') {
            header('Content-type: application/json', true, 400);
            echo json_encode(array(
                'errors' => $errors
            ));
            exit;
        } else {
            header("Location: index.php?" . http_build_query(array("errors" => $errors)));
            exit;
        }
    }
} elseif ($request_verb == 'get') {
    if ($request_type == 'json') {
        if (loggedIn()) {
            header('Content-type: application/json', true, 200);
            echo json_encode(array("username" => $_SESSION['loginUser']));
            exit;
        } else {
            header('Content-type: application/json', true, 401);
            exit;
        }
    } else {
        header("Location: index.php");
        exit;
    }
// log the user out
} elseif ($request_verb == 'delete') {
    if (loggedIn()) {
        session_destroy();
    }
    if ($request_type == 'json') {
        header('Content-type: application/json', true, 200);
        echo json_encode(array("status" => ' You have logged out'));
        exit;
    } else {
        header('Location: index.php');
        exit;
    }
} else {
    header('X-Error-Message: Invalid verb', true, 500);
    exit;
}
?>
