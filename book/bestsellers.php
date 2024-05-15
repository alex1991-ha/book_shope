<?php 	
    include ('../book_shope/../additional_php/up.php');
	$Bellit = new Up();
	$Bellit->Up("Бестселлеры");
?>
	<div id="booksbestsellers">
		<p id="otstupbestsellers" class="textzagolovok">БЕСЦЕЛЛЕРЫ</p>

		<?php
		include ('additional_php/Class_book.php');
		include ('additional_php/connect_db.php');

		print '<div id="Hoking">';
		$q = $db->query('SELECT * FROM books WHERE ID = 1');
		while ($row = $q->fetch()) {
		$Hoking = new book();
		$Hoking->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]", "testBooksHoking", "hokingButtonVKorzinu", "ButtonHoking()");
		}

		print '<div id="petitPrints">';
		$q = $db->query('SELECT * FROM books WHERE ID = 2');
		while ($row = $q->fetch()) {
		$PetitPrints = new book();
		$PetitPrints->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]", 
		"ButtonSmallPrints", "SmallPrintsButtonVKorzinu", "SmallPrints()");
		}

		print '<div id="kapital">';
		$q = $db->query('SELECT * FROM books WHERE ID = 3');
		while ($row = $q->fetch()) {
		$Kapital = new book();
		$Kapital->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]", 
		"ButtonKapital", "KapitalButtonVKorzinu", "Kapital()");
		}
		
		print '<div id="Uayld">';
		$q = $db->query('SELECT * FROM books WHERE ID = 4');
		while ($row = $q->fetch()) {
		$Uayld = new book();
		$Uayld->text("$row[Name]", "$row[Description]", "$row[Price]", "$row[ImgURL]", "ButtonUayld", "UayldButtonVKorzinu", "Uayld()");
		}
		?>
	<div id="nizbestsellers">
		<div id="loganiz">
				<img src="../img/logo.png" alt="Logo">
				<div id="textniz">
						<p>ОАО "Кнiга.by"</p>
						<p>Свидетельство о государственной регистрации #1111111111 от 20.03.2018 г. выдано Мингорисполкомом
						В торговом реестре с 20.05.2016 г.</p>
				</div>
				<div id="menuniz">
						<p class="ZaglavieTextBold">МЕНЮ</p>
						<p><a href="../index.html" class="textnizmenussilka">Главная</a></p>
						<p><a href="../news.html" class="textnizmenussilka">Новости</a></p>
						<p><a href="../book.html" class="textnizmenussilka">Книги</a></p>
						<p><a href="../contacts.html" class="textnizmenussilka">Контакты</a></p>
						<p><a href="../vacancy.html" class="textnizmenussilka">Вакансии</a></p>          
				</div>
				<div id="contaktyniz">
						<p class="ZaglavieTextBold">КОНТАКТЫ</p>
						<p class="textnizkontakty">+375 17 111-11-11;</p>
						<p class="textnizkontakty">e-mail: <span style="color: blue">office@kniga.by</span></p>
						<p class="textnizkontakty">224000, г. Брест, <br> ул. Брестская, 14</p>
						<div>
								<div><a href="https://vk.com" id="vkniz" target="_blank"></a></div>
								<div><a href="https://www.facebook.com" id="facebookniz" target="_blank"></a></div>
								<div><a href="https://ok.ru" id="odnoklassnikiniz" target="_blank"></a></div>  
								<div><a href="https://twitter.com" id="twitterniz" target="_blank"></a></div> 
								<div><a href="https://www.youtube.com" id="youtubeniz" target="_blank"></a></div>       
						</div>
				</div>
				<div id="RegimWork">
						<p class="ZaglavieTextBold">РЕЖИМ РАБОТЫ</p>
						<p class="textnizkontakty"><span style="color: #4cbd00">Пн - Чт:</span> 8.30 - 13.00, 13.30 - 17.00</p>
						<p class="textnizkontakty"><span style="color: #4cbd00">Пт:</span> 8.30 - 13.00, 13.30 - 16.00</p>
				</div>
				<div id="razrabotka">
						<hr id="cherta">
				</div>
				<div id="razrabotchik">
						<p>разработал: Alex</p>
				</div>
		</div>
</div>
	</body>
</html>