<?php

function connect(){
$dbh = new PDO('CONNECTION STRING');
if (!$dbh) {
    die('Could not connect: ' . mysql_error());
}
return $dbh;
}
function GetDataByYear($year){
    
     try{
       $link = connect();

    $query = "SELECT * from weather WHERE year = :year";


	$stmt = $link->prepare($query);
	$stmt->bindValue(':year', $year);
        $stmt->execute();
	$result = $stmt->fetchAll();
	
	} catch(PDOException $e) {
   $result = false;
   
}

    return $result;
}

$results = GetDataByYear($_GET['action']);
echo json_encode($results);

?>