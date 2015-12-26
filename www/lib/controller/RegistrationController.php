<?php

  class RegistrationController {
    public function actionIndex() {
      require_once(ROOT."/template/registration/form.phtml");
      return true;
    }
  }