<?PHP
  header('Content-Type: text/html; charset=utf-8');

  


  $servername = 'localhost';
  $username   = 'yaun97929';
  $password   = 'ya3679zeze!';
  $dbname     = 'yaun97929';

  // 접속(Connection) - $conn:  mysquli_connect()  데이터베이스 접속함수
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  mysqli_set_charset($conn, 'utf8');

  if(!$conn){ //접속정보가 틀리면
    echo '데이터베이스 접속실패! 데이터베이스 접속정보를 확인하세요!';
    die('데이터베이스 접속실패! 데이터베이스 접속정보를 확인하세요!');
  }

  /////////////////////////////////////////////////////////////////////

  $sql = "select * from member_mail";
  $result = mysqli_query($conn, $sql);

  $arr = array();//배열선언

  if( mysqli_num_rows($result) > 0 ){ //데이터가 들어있다면
    while( $row = mysqli_fetch_array($result) ){
        array_push($arr, array(
            "이름"   => $row['name'],
            "이메일" => $row['mail']
        ));
    }
  }

  $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
            file_put_contents('./data/member_mail.json', $json);

 echo $json;





///////////////////////////////////////////////////////////////////









mysqli_close($conn);
  
?>