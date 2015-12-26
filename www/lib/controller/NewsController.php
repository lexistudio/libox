<?php
  include_once ROOT."/lib/modules/news.php";

  class NewsController {
    public function actionIndex() {
      $newsList = array();
      $newsList = News::getNewsList();

      require_once(ROOT."/template/news/list.php");

      return true;
    }

    public function actionView($id) {
      if($id) {
        $newsList = News::getNewsItemById($id);

        echo "<pre>";
        print_r($newsList);
        echo "</pre>";
      }

      return true;
    }
  }