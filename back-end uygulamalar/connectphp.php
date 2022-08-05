<?php
$servername="Localhost";
$dbuser="mhm";
$dbpass="1234";
$dbname="website";
$dbconnect=mysqli_connect($servername,$dbuser,$dbpass,$dbname);
if($dbconnect){
    echo "yes";
    }else{
        echo "no";
        }
        ?>