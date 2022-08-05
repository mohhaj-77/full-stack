<?php
function login(){
if(isset($_post[`sign-in`])){
    $postemail=$_post[`user-email`];
    $postpass=md5($_post[`user-password`]);
    $yes="y";
$sql="SELECT `userid`, `user_name`, `usersoname`, `email`, `userpass`, `userpassy`, `userbirthday` FROM `musteri` WHERE `email`=`$postemail` AND `userpass`=`$postpass` AND `userstatus`=`$yes`";
$result=mysqli_query($dbconnect,$sql);
error_reporting(0);
$row=mysqli_fetch_array($result);
}
if(`userstatus`===$yes){
 if($row[`useremail`]===$postemail){
    if($row[`userpass`]===$postpass){
$_SESSION[`login`]=$row[`userid`];
    }
}
}
if($row[`userstatus`]!==$yes){
    if($row[`useremail`]!==$postemail){
       if($row[`userpass`]!==$postpass){
         header(`Location:sign-in.php?error`);  
    }
   }
   }
}
?>