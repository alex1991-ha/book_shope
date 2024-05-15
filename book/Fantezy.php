<?php 	
        include ('../book_shope/../additional_php/up.php');
		$Fantezy = new Up();
		$Fantezy->Up("Фантастика");
?>

<div id="booksbestsellers">
		<p id="otstupbestsellers" class="textzagolovok">ФАНТАСТИКА</p>
</div>	
	
<?php 
	include ('additional_php/Class_book.php');
	include ('additional_php/connect_db.php');

	print '<div id="GamesTrones" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 14');
	while ($row = $q->fetch()) {
	$GamesTrones = new book();
	$GamesTrones->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonGamesTrones", "GamesTronesButtonVKorzinu", "GamesTrones()");
	}

	print '<div id="GreenMilia" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 15');
	while ($row = $q->fetch()) {
	$GreenMilia = new book();
	$GreenMilia->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonGreenMilia", "GreenMiliaButtonVKorzinu", "GreenMilia()");
	}

	print '<div id="Metro" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 16');
	while ($row = $q->fetch()) {
	$Metro = new book();
	$Metro->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonMetro", "MetroButtonVKorzinu", "Metro()");
	}

	print '<div id="Vedmak" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 17');
	while ($row = $q->fetch()) {
	$Vedmak = new book();
	$Vedmak->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonVedmak", "VedmakButtonVKorzinu", "Vedmak()");
	}

	print '<div id="Piknik" class="bookstyle">';
	$q = $db->query('SELECT * FROM books WHERE ID = 18');
	while ($row = $q->fetch()) {
	$Piknik = new book();
	$Piknik->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
	 "ButtonPiknik", "PiknikButtonVKorzinu", "Piknik()");
	}

	include ('../book_shope/../additional_php/down.php');
?>