<?php

  class MainController {
    public function actionIndex() {
      require_once(ROOT."/template/layout/main.phtml");
      return true;
    }
  }