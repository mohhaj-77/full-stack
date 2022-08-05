<?php
function role(){
    global $dbconnect;
    $sql2="SELECT (`userid`, `user_name`, `usersoname`, `email`, `userpass`, `userpassy`, `userbirthday` FROM `musteri` WHERE ´userid´=$_SESSION[´login´]);"
$result2=mysqli_query($dbconnect,$sql2);
$row2=mysqli_fetch_array($result2);
if($row2[´role´]===´manager´){ is_log_in();
}else{
    logout();
}
return $row2;
}
?>