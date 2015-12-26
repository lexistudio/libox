<?php
  
  class News {
    public static function getNewsItemById($id) {
      $id = intval($id);
      if($id) {
        $db = Db::getConnection();
        $result = $db->query("SELECT * FROM news WHERE id=".$id);

        $result->setFetchMode(PDO::FETCH_ASSOC);
        $newsitem = $result->fetch();
        return $newsitem;
      }
    }

    public static function getNewsList() {
      $db = Db::getConnection();

      $newsList = array();
      $result = $db->query("SELECT * FROM news ORDER BY id DESC LIMIT 10");

      $i = 0;
      while($row = $result->fetch()) {
        $newsList[$i]["id"] = $row["id"];
        $newsList[$i]["title"] = $row["title"];
        $i++;
      }

      return $newsList;
    }
  }