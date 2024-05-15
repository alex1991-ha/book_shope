<?php 
    include('../book_shope/additional_php/up.php');
    $index = new Up();
	$index->Up("Книги");
?>
	<br>
	<br>
	<div id="bookvkladka">	
		<p class="textzagolovok">КНИГИ</p>
		<div>
			<a href="book/bestsellers.php"><img id="bookbestseller" src="book\img\bestsellers.jpg" alt="Бесцеллеры"></a>
			<a href="book/bestsellers.php" class="textzagolovokBook">Бестселлеры</a>
	</div>
		<div id="bellit">
			<a href="book/Bellit.php"><img id="bookbellit" src="book\img\bellit.jpg" alt="Беларуская лiтаратура"></a>
			<a href="book/Bellit.php" id="textbellit" class="textzagolovokBook">Беларуская лiтаратура</a>
		</div>
		<div id="klasika">
			<a href="book/Klassika.php"><img src="book\img\Klassika.jpg" alt="Классика"></a>
			<a href="book/Klassika.php" id="textklasika" class="textzagolovokBook">Классическая литература</a>
		</div>
		<div id="Fantezy">
			<a href="book/Fantezy.php"><img src="book\img\Fantezy.jpg" alt="Фанастика"></a>
			<a href="book/Fantezy.php" id="textFantezy" class="textzagolovokBook">Фантастика</a>
		</div>
	</div>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
<?php 
    include('../book_shope/additional_php/down.php');
?>
	