
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (6, 'Уладзімір Караткевіч \"Каласы пад сярпом тваiм\"', '32.18', 
				'img/imege korzina/Bellit/Каласы_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch(Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	