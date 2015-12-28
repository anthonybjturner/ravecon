<?php 

//Models
//include("./models/Messages.php");
//include("./models/User.php");
//include("./models/Friend.php");
include("./models/Authentication.php");
//require("./inc/global.php");

$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : null;
$model = null;
$errors = null;


switch($action){
  
  case "login": 

   // $model = Authentication::GetUser(); 
   $_SESSION['User'] = ["users-name"=>"Anthony", "users-age"=>"30"];
   $model =  $_SESSION['User'];
   break;
    
  default: $model = null;
  
}
echo json_encode(array('model'=> $model, 'errors'=> $errors));


