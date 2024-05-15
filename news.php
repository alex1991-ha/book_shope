<?php 
    include('../book_shope/additional_php/up.php');
    $index = new Up();
	$index->Up("Новости");
?>
	<div id="newsOsnovnoe">	
		<p class="textzagolovok">НОВОСТИ</p>
		<div class="PostNewsOsnovnoe">
		<a href="news\martin.php"><img class="KartinkaNewsOsnovnoe" src="news\img\martin_news_Osnovnoe.jpg" alt="Мартин"></a>
		<a href="news\martin.php" class="textzagolovokNews">Джордж Мартин рассказал, когда закончит «Песнь льда и пламени»</a>
		</div>
		<div class="PostNewsOsnovnoe">
			<a href="news\PocketBook.php"><img class="KartinkaNewsOsnovnoe" src="news\img\PocketBook_news_Osnovnoe.jpg" alt="PocketBook"></a>
			<a href="news\PocketBook.php" class="textzagolovokNews">PocketBook открыл книжный интернет-магазин</a>
		</div>
		<div class="PostNewsOsnovnoe">
			<a href="news\King.php"><img class="KartinkaNewsOsnovnoe" src="news\img\King_news_Osnovnoe.jpg" alt="Кинг"></a>
			<a href="news\King.php" class="textzagolovokNews">Самым упоминаемым романом в сети стал «Институт» Стивена Кинга</a>
		</div>
		<div class="PostNewsOsnovnoe">
			<a href="news\BookBY.php"><img class="KartinkaNewsOsnovnoe" src="news\img\BookBY_news_Osnovnoe.jpg" alt="BookBY"></a>
			<a href="news\BookBY.php" class="textzagolovokNews">В Беларуси почти каждая пятая книга издается на белорусском языке</a>
		</div>
	</div>
<?php 
        include('../book_shope/additional_php/down.php');
?>
