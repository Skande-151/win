<?php

$coon = mysqli_connect('localhost','root','','lol');
if(!$coon){
    echo 'eroor: '. mysqli_connect_eroor();
}
