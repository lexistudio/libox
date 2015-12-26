<?php

  ini_set("display_errors",1);
  error_reporting(E_ALL);

  define("ROOT", dirname(__FILE__));
  require_once(ROOT."/lib/components/route.php");
  require_once(ROOT."/lib/components/db.php");

  $router = new router();
  $router->run();