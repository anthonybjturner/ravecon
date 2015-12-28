<?php

require_once __DIR__.'/../inc/global.php';

class Authentication {
	
    public static function IsLoggedIn(){
    	
    	$user = $_SESSION['User'];
    	
    	if( $user ){
    	
    		return true;
    	}else{
    		
    		return false;
    	}
    }
    
    
     public static function GetUser(){
    	
    	return $_SESSION['User'];

    }
}


