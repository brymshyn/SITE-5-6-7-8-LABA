<?php

session_start();
require 'login.php';
logout();
header('Location: index.html');
?>