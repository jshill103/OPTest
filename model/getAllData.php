<?php

function connect(){
$dbh = new PDO('CONNECTION STRING');
if (!$dbh) {
    die('Could not connect: ' . mysql_error());
}
return $dbh;
}
function GetData(){
    
     try{
       $link = connect();

    $query = "SELECT * from weather";

	$stmt = $link->prepare($query);
	
        $stmt->execute();
	$result = $stmt->fetchAll();
	
	} catch(PDOException $e) {
   $result = false;
   
}

    return $result;
}

$results = GetData();
echo json_encode($results);

?>