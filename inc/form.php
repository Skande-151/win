<?php

$firstName =            "";
$lastName =             "";
$email =                "";

$errors = [
'firstNameError'=> '', 
'lastNameError'=> '', 
'emailError'=> '', 



];



if(isset($_POST['submit'])){




    $firstName =            $_POST['firstName'];
    $lastName =            $_POST['lastName'];
    $email =               $_POST['email'];

    if(empty($firstName)){
        $errors['firstNameError'] ='يرجى ادخال الاسمك الاول';
    }
    if(empty($lastName)){
        $errors['lastNameError'] ='يرجى ادخال الاسمك الاخير';
    }
    if(empty($email)){
        $errors['emailError'] ='يرجى ادخال الايميل  ';
    }
    elseif(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        $errors['emailError'] ='يرجى ادخال  ايميل صحيح';

    }
if(!array_filter($errors)){

    $firstName =          mysqli_real_escape_string($coon, $_POST['firstName']); 
    $lastName =           mysqli_real_escape_string($coon, $_POST['lastName']);
    $email =              mysqli_real_escape_string($coon, $_POST['email']);


    
    $sql = "INSERT INTO users(firstName, lastName, email)
            VALUES('$firstName', '$lastName', '$email')";

if(mysqli_query($coon, $sql)){
    header('Location: ' .  $_SERVER['PHP_SELF']);
}else{
    echo 'eroor: '. mysqli_eroor($coon);
}
}




    }


    
