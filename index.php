<?php 
        include('../book_shope/additional_php/up.php');
        $index = new Up();
	$index->Up("Кнiга.by");
?>
        <div id="kartinky">
                <img id="imeges" src="img/imege index/masochny_rejim.jpg" alt="Книги детям">
                <div id="buttonImg">
                <input type="button" id="buttonImgBack" onclick="Back()">
                <input type="button" class="buttonImg" id="buttonImg1" onclick="Img1()">
                <input type="button" class="buttonImg" id="buttonImg2" onclick="Img2()">
                <input type="button" class="buttonImg" id="buttonImg3" onclick="Img3()">
                <input type="button" class="buttonImg" id="buttonImg4" onclick="Img4()"> 
                <input type="button" id="buttonImgNext" onclick="Next()">
        </div>
        <div id="NewsBookWorld">
                <div id="NewsText"><h1>Новости книжного мира</h1></div>
                <div id="FalseMarginLeftNews"></div>
                <div id ="martin">
                        <p class="NewsImgText"><a class="NewsTextText" href="news/martin.php">Джордж Мартин рассказал, когда закончит «Песнь льда и пламени»</a></p>
                        <a href="news/martin.html"><img class="NewsTextPadding" src="news\img\martin.jpg" alt="Мартин"></a>
                </div>
                <div id ="PocketBook">
                        <p class="NewsImgText"><a class="NewsTextText" href="news/PocketBook.php">PocketBook открыл книжный интернет-магазин</a></p>
                        <a href="news/PocketBook.html"><img class="NewsTextPadding" src="news\img\PocketBook.jpg" alt="PocketBook"></a>
                </div>
                <div id ="King">
                        <p class="NewsImgText"><a class="NewsTextText" href="news/King.php">Самым упоминаемым романом в сети стал «Институт» Стивена Кинга</a></p>
                        <a class="NewsTextText" href="news/King.html"><img class="NewsTextPadding" src="news\img\King.jpg" alt="Кинг"></a>
                </div>
                <div id ="bookby">
                        <p class="NewsImgText"><a class="NewsTextText" href="news/BookBY.php">В Беларуси почти каждая пятая книга издается на белорусском языке</a></p>
                        <a class="NewsTextText" href="news/BookBY.html"><img class="NewsTextPadding" src="news\img\bookby.jpg" alt="bookby"></a>
                </div>
        </div>
<?php 
        include('../book_shope/additional_php/down.php');
?>
        