<?php 	
    include ('../book_shope/../additional_php/up.php');
	$Bellit = new Up();
	$Bellit->Up("Беларуская лiтаратура");
?>

<div id="booksbestsellers">
		<p id="otstupbestsellers" class="textzagolovok">БЕЛАРУСКАЯ ЛIТАРАТУРА</p>
</div>	
<?php
	include ('additional_php/Class_book.php');
	include ('additional_php/connect_db.php');

	print '<div id="Bykov" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 5');
	while ($row = $q->fetch()) {
	$Bykov = new book();
	$Bykov->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonBykov", "BykovButtonVKorzinu", "Bykov()");
	}

	print '<div id="Kalasy" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 6');
	while ($row = $q->fetch()) {
	$Kalasy = new book();
	$Kalasy->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonKalasy", "KalasyButtonVKorzinu", "Kalasy()");
	}

	print '<div id="Lydzi" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 7');
	while ($row = $q->fetch()) {
	$Kalasy = new book();
	$Kalasy->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonLydzi", "LydziButtonVKorzinu", "Lydzi()");
	}

	print '<div id="Paliavanne" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 8');
	while ($row = $q->fetch()) {
	$Kalasy = new book();
	$Kalasy->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonPaliavanne", "PaliavanneButtonVKorzinu", "Paliavanne()");
	}

	include ('../book_shope/../additional_php/down.php');
?>