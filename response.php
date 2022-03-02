<?PHP
 include_once('./header.php');


  // 웹입력폼에서 전송한 데이터
  $name = $_POST['name'];
  $mail = $_POST['mail'];

    //데이터를 변수를 통해서 데이터베이스의 테이블에(member_mail) 저장(INSERT)

    $sql = "insert into member_mail (name, mail)
            values ('$name', '$mail')";
    mysqli_multi_query($conn, $sql);


    // insert(저장)
    // select(검색)
    // update(수정)
    // delate(삭제)


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
  
    //  echo $json;

    // 헤더 header.php
    // 푸터 footer.php

    // 저장 insert_member.php
    // 저장 select_member.php

    // 데이터베이스 테이블에 저장된 데이터를
    // 가져와서(select) 외부 json 파일로 저장하고 
    // 저장된 json파일을 AJAX를 사용 웹화면에 테이블 태그를 사용
    // 목록을 출력한다

  

  
    
  // 데이터베이스 접속 종료
  include_once('./footer.php');
  
?>
