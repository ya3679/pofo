<?php
    header('Content-Type: text/html; charset=utf-8');

    // 데이터베이스권한인증 - 접속(Conection)
    // 서버 이름 - $servername
    // 사용자 이름 - $username
    // 비밀번호- $password
    // 데이터베이스(database)- $dbname


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
    // else{
    //   echo '데이터베이스 접속 성공! 접속정보는 : ' . $servername . '사용자:' . $username . '비밀번호:' . $password .'데이터베이스이름:' . $dbname;
    // }
?>    