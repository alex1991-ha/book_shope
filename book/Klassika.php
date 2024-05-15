<?php 	
        include ('../book_shope/../additional_php/up.php');
		$Klassika = new Up();
		$Klassika->Up("Классика");
?>

<div id="booksbestsellers">
		<p id="otstupbestsellers" class="textzagolovok">КЛАССИЧЕСКАЯ ЛИТЕРАТУРА</p>
</div>
	
<?php
include ('additional_php/Class_book.php');
include ('additional_php/connect_db.php');

print '<div id="Gugo" class="bookstyle">';
$q = $db->query('SELECT * FROM books WHERE ID = 9');
while ($row = $q->fetch()) {
$Gugo = new book();
$Gugo->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
 "ButtonGugo", "GugoButtonVKorzinu", "Gugo()");
}

print '<div id="Prestuplenie" class="bookstyle">';
$q = $db->query('SELECT * FROM books WHERE ID = 10');
while ($row = $q->fetch()) {
$Prestuplenie = new book();
$Prestuplenie->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
 "ButtonPrestuplenie", "PrestuplenieButtonVKorzinu", "Prestuplenie()");
}

print '<div id="Pushkin" class="bookstyle">';
$q = $db->query('SELECT * FROM books WHERE ID = 11');
while ($row = $q->fetch()) {
$Pushkin = new book();
$Pushkin->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
 "ButtonPushkin", "PushkinButtonVKorzinu", "Pushkin()");
}

print '<div id="Remark" class="bookstyle">';
$q = $db->query('SELECT * FROM books WHERE ID = 12');
while ($row = $q->fetch()) {
$Pushkin = new book();
$Pushkin->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
 "ButtonRemark", "RemarkButtonVKorzinu", "Remark()");
}

print '<div id="Bulgakov" class="bookstyle">';
$q = $db->query('SELECT * FROM books WHERE ID = 13');
while ($row = $q->fetch()) {
$Pushkin = new book();
$Pushkin->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]",
 "ButtonBulgakov", "BulgakovButtonVKorzinu", "Bulgakov()");
}
	include ('../book_shope/../additional_php/down.php');
?>