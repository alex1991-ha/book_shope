<?php 
Class Up {
        function Up($title) {
print
'<!DOCTYPE HTML>
<html lang="ru">
	<head>
        <title>'.$title.'</title>
        <meta charset="utf-8">
        <script src="http://localhost:8080/book_shope/classes.js"></script> 
        <script src="http://localhost:8080/book_shope/script.js"></script> 
        <link rel="stylesheet" href="http://localhost:8080/book_shope/style.css">
        <link rel="stylesheet" href="http://localhost:8080/book_shope/book/book_style.css">
        <link rel="stylesheet" href="http://localhost:8080/book_shope/news/news_style.css">
        <link rel="shortcut icon" href="http://localhost:8080/book_shope/img/logo-saita.png" type="image/png">
	</head>
	<body>
        <div id="zagolovok">
                <div id="logo">
                <img src="http://localhost:8080/book_shope/img/logo.png" alt="Лого">
                </div>
                        <div id="spravka">
                                <div id="znakvoprosa">
                                        <img src="http://localhost:8080/book_shope/img/spravka.png" alt="Справка">
                                </div>
                                <div id="tekstpospravke">
                                        <p>Справка по книгам</p>
                                        <p id="otstupmejduabzacami">+375(17)555-33-22</p>
                                </div>
                       <div id="timework">
                                <p>Пн - Чт: 8.30 - 13.00, 13.30 - 17.00</p>
                                <p id="otstupmejduabzacami">Пт: 8.30 - 13.00, 13.30 - 16.00</p>
                        </div>
                          <div id="socsety">
                                <div><a href="https://vk.com" id="vk" target="_blank"></a></div>
                                <div><a href="https://www.facebook.com" id="facebook" target="_blank"></a></div>
                                <div><a href="https://ok.ru" id="odnoklassniki" target="_blank"></a></div>
                                <div><a href="https://twitter.com" id="twitter" target="_blank"></a></div>    
                                <div><a href="https://www.youtube.com" id="youtube" target="_blank"></a></div>     
                        </div>
                        <div>
                                <input type="button" id="korzinaButton" value="Корзина    " onclick="KorzinaButton()">
                        </div>
                        </div>
                        </div>
        </div>
        <div id="navigation">
                <div id="FalseMarginLeft">
                </div>
                <div id="menu">
                <ul id="menuli">
                        <li><a href="http://localhost:8080/book_shope/index.php" id="index">Главная</a></li>
                        <li><a href="http://localhost:8080/book_shope/news.php" id="news">Новости</a></li>
                        <li><a href="http://localhost:8080/book_shope/book.php" id="book">Книги</a></li>
                        <li><a href="http://localhost:8080/book_shope/contacts.php" id="contacts">Контакты</a></li>
                        <li><a href="http://localhost:8080/book_shope/vacancy.php" id="vacancy">Вакансии</a></li> 
                </ul>
                </div>
                <div>
                        <input type="text" placeholder="Введите название книги или автора" id="poisk">
                </div>
                <div>
                        <input type="button" id="poiskbutton" value="Поиск   " onclick="poiskButton()">
                </div>
                </div>
        </div>';
        }
}
?>