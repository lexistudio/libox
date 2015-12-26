<?php

  class router {
    private $routes;

    public function __construct() {
      $routesPath = ROOT."/lib/config/routes.php";
      $this->routes = include($routesPath);
    }

    private function getURI() {
      if(!empty($_SERVER["REQUEST_URI"])) {
        return trim($_SERVER["REQUEST_URI"], "/");
      }
    }

    public function run() {
      $url = $this->getURI();

      foreach($this->routes as $urlPattern => $path) {
        if(preg_match("~$urlPattern~", $url)) {

          $internalRoute = preg_replace("~$urlPattern~", $path, $url);

          $segments = explode("/", $internalRoute);

          $controllerName = array_shift($segments)."Controller";
          $controllerName = ucfirst($controllerName);

          $actionName = "action".ucfirst(array_shift($segments));

          $parameters = $segments;

          $controllerFile = ROOT."/lib/controller/".$controllerName.".php";

          if(file_exists($controllerFile)) {
            include_once($controllerFile);
          } else echo "not fount controller";

          $controllerObject = new $controllerName;
          @$result = call_user_func_array(array($controllerObject, $actionName), $parameters);
          if($result != null) {
            break;
          }
          else {
            echo "Страница не найдена";
          }
        }
      }
    }
  }