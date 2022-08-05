<?php
session_start();
include(`xampp\connectphp.php`);





?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link href="img/logo/logo.png" rel="icon">
  <title>RuangAdmin - Register</title>
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="css/ruang-admin.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-login">
  <!-- Register Content -->
  <div class="container-login">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                  </div>
                  <form>
                    <div class="form-group">
                        <?php 
                     if(isset($_post[`but`])){
                        $user_name=$_post(`ad`);
                        $usersoname=$_post(`soyad`);
                        $email=$_post(`email`);
                        $userpass=$_post(`password`);
                        $userpassy=$_post(`passwordy`);
                     }
                     date(`y-m-d`);
                     md5($user_code=uniqid(rand()));
                     $user_pass=md5($userpass);
                     if(empty($user_name) or user_name==" "){
                         echo "you cant to leave emptee area";
                     }
                     else{
                         $sql1="SELECT `userid`, `user_name`, `usersoname`, `email`, `userpass`, `userpassy`, `userbirthday` FROM `musteri` WHERE `email`=`$postemail`"
                         $sql2=mysqi_query($dbconnect,$sql);
                          if(mysql_num_rows($sql2)>0){
                            $mag= <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block" name="but">Register</button>
                          </div>
                          }
                          else{
                              $sql3="INSERT INTO `musteri`(`userid`, `user_name`, `usersoname`, `email`, `userpass`, `userpassy`, `userbirthday`, `userstatus`)
                               VALUES ([$user_id],[$user_name],[$user_soyad],[$user_email],[$user_password],[$user_passwordy],[$user_age],[$user_status])";
                        $sql4=mysqli_query($dbconnect,$sql3);  
                        }
                     
                     ?>
                     
                        }
                      <label>First Name</label>
                      <input type="text" class="form-control" name="ad" id="exampleInputFirstName" placeholder="Enter First Name">
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" class="form-control" name="soyad" id="exampleInputLastName" placeholder="Enter Last Name">
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" name="email" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email Address">
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" name="password" id="exampleInputPassword" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <label>Repeat Password</label>
                      <input type="password" class="form-control" name="passwordy" id="exampleInputPasswordRepeat"
                        placeholder="Repeat Password">
                    </div>
                    <div class="form-group">
                    
                      <button type="submit" class="btn btn-primary btn-block" name="but">Register</button>
                    </div>
                    <hr>
                    <a href="gmail.com" class="btn btn-google btn-block">
                      <i class="fab fa-google fa-fw"></i> Register with Google
                    </a>
                    <a href="facebook.com" class="btn btn-facebook btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <a class="font-weight-bold small" href="login.html">Already have an account?</a>
                  </div>
                  <div class="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Register Content -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/ruang-admin.min.js"></script>
</body>

</html>