<?php
include(`\xampp\htdocs\xampp\php programming\connectphp.php`);

global $dbconnect;
    $sql2="SELECT (`yan` FROM `ab` WHERE ´userid´=$_SESSION[´login´]);"
$result2=mysqli_query($dbconnect,$sql2);
$row2=mysqli_fetch_array($result2);

if(isset($_post[`sign-in`])){
      if(isset($_post[`btt`])){
         if(is_not_empty($row2[`yan`])){ 
             $sonbelirtme=$row2[`yan`];
            }
         else if(empty($row2[`yan`]){
             echo "theres no notification(bildirimler) to you";
         }
       
            }


?>

<button type="button" id="" >bilirtmelere bak</button>


<?php
        echo "this is last notification" +   $sonbelirtme ;
    }
}
?>