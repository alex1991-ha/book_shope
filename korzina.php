<?php 
    include('../book_shope/additional_php/up.php');
    $index = new Up();
    $index->Up("Корзина");
?>
	<div id="korzinaContent">
                <p id="otstupbestsellers" class="textzagolovok">КОРЗИНА</p>
                <div id="onstupKorzina"></div>
                <?php
                include ('../book_shope/book/additional_php/connect_db.php');
                include ('../book_shope/additional_php/Class_Korzina.php');

                //Хокинг
                $q = $db->query('SELECT * FROM Price WHERE ID = 1');
                while ($row = $q->fetch()) {
                        $Hoking_Korzina = new Korzina();
                        $Hoking_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusHoking()",
                        "hokingInput", "PlusHoking()", "summaHoking", "deleteHoking()");
                }

                //Маленький принц
                $q = $db->query('SELECT * FROM Price WHERE ID = 2');
		while ($row = $q->fetch()) {
                $SmallPrints_Korzina = new Korzina();
                $SmallPrints_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusSmallPrints()", 
                "SmallPrintsInput", "PlusSmallPrints()", "summaSmallPrints", "deleteSmallPrints()");
                }

                //Капитал
                $q = $db->query('SELECT * FROM Price WHERE ID = 3');
		while ($row = $q->fetch()) {
                $Kapital_Korzina = new Korzina();
                $Kapital_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusKapital()", 
                "KapitalInput", "PlusKapital()", "summaKapital", "deleteKapital()");
                }

                //Уайльд
                $q = $db->query('SELECT * FROM Price WHERE ID = 4');
		while ($row = $q->fetch()) {
                $Uayld_Korzina = new Korzina();
                $Uayld_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusUayld()", 
                "UayldInput", "PlusUayld()", "summaUayld", "deleteUayld()");
                }

                //Быков
                $q = $db->query('SELECT * FROM Price WHERE ID = 5');
		while ($row = $q->fetch()) {
                $Bykov_Korzina = new Korzina();
                $Bykov_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusBykov()", 
                "BykovInput", "PlusBykov()", "summaBykov", "deleteBykov()");
                }

                //Каласы
                $q = $db->query('SELECT * FROM Price WHERE ID = 6');
		while ($row = $q->fetch()) {
                $Kalasy_Korzina = new Korzina();
                $Kalasy_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusKalasy()", 
                "KalasyInput", "PlusKalasy()", "summaKalasy", "deleteKalasy()");
                }

                //Людзи на болоте
                $q = $db->query('SELECT * FROM Price WHERE ID = 7');
		while ($row = $q->fetch()) {
                $Lydzi_Korzina = new Korzina();
                $Lydzi_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusLydzi()", 
                "LydziInput", "PlusLydzi()", "summaLydzi", "deleteLydzi()");
                }

                //Паляванне
                $q = $db->query('SELECT * FROM Price WHERE ID = 8');
		while ($row = $q->fetch()) {
                $Paliavanne_Korzina = new Korzina();
                $Paliavanne_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusPaliavanne()", 
                "PaliavanneInput", "PlusPaliavanne()", "summaPaliavanne", "deletePaliavanne()");
                }

                //Гюго
                $q = $db->query('SELECT * FROM Price WHERE ID = 9');
		while ($row = $q->fetch()) {
                $Gugo_Korzina = new Korzina();
                $Gugo_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusGugo()", 
                "GugoInput", "PlusGugo()", "summaGugo", "deleteGugo()");
                }

                //Преступление
                $q = $db->query('SELECT * FROM Price WHERE ID = 10');
		while ($row = $q->fetch()) {
                $Prestuplenie_Korzina = new Korzina();
                $Prestuplenie_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusPrestuplenie()", 
                "PrestuplenieInput", "PlusPrestuplenie()", "summaPrestuplenie", "deletePrestuplenie()");
                }

                //Пушкин
                $q = $db->query('SELECT * FROM Price WHERE ID = 11');
		while ($row = $q->fetch()) {
                $Pushkin_Korzina = new Korzina();
                $Pushkin_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusPushkin()", 
                "PushkinInput", "PlusPushkin()", "summaPushkin", "deletePushkin()");
                }

                //Ремарк
                $q = $db->query('SELECT * FROM Price WHERE ID = 12');
		while ($row = $q->fetch()) {
                $Remark_Korzina = new Korzina();
                $Remark_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusRemark()", 
                "RemarkInput", "PlusRemark()", "summaRemark", "deleteRemark()");
                }

                //Булгаков
                $q = $db->query('SELECT * FROM Price WHERE ID = 13');
		while ($row = $q->fetch()) {
                $Bulgakov_Korzina = new Korzina();
                $Bulgakov_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusBulgakov()", 
                "BulgakovInput", "PlusBulgakov()", "summaBulgakov", "deleteBulgakov()");
                }

                //Игра престолов
                $q = $db->query('SELECT * FROM Price WHERE ID = 14');
		while ($row = $q->fetch()) {
                $GamesTrones_Korzina = new Korzina();
                $GamesTrones_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusGamesTrones()", 
                "GamesTronesInput", "PlusGamesTrones()", "summaGamesTrones", "deleteGamesTrones()");
                }

                //Зелёная миля
                $q = $db->query('SELECT * FROM Price WHERE ID = 15');
		while ($row = $q->fetch()) {
                $GreenMilia_Korzina = new Korzina();
                $GreenMilia_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusGreenMilia()", 
                "GreenMiliaInput", "PlusGreenMilia()", "summaGreenMilia", "deleteGreenMilia()");
                }

                //Метро 2033
                $q = $db->query('SELECT * FROM Price WHERE ID = 16');
		while ($row = $q->fetch()) {
                $Metro_Korzina = new Korzina();
                $Metro_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusMetro()", 
                "MetroInput", "PlusMetro()", "summaMetro", "deleteMetro()");
                }

                //Ведьмак
                $q = $db->query('SELECT * FROM Price WHERE ID = 17');
		while ($row = $q->fetch()) {
                $Vedmak_Korzina = new Korzina();
                $Vedmak_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusVedmak()", 
                "VedmakInput", "PlusVedmak()", "summaVedmak", "deleteVedmak()");
                }

                //Пикник
                $q = $db->query('SELECT * FROM Price WHERE ID = 18');
		while ($row = $q->fetch()) {
                $Piknik_Korzina = new Korzina();
                $Piknik_Korzina->output_Korzina("$row[ImgURL]", "$row[Name]", "$row[Price]", "minusPiknik()", 
                "PiknikInput", "PlusPiknik()", "summaPiknik", "deletePiknik()");
                }

                //Выдод суммы за все книги
                $q = $db->query('SELECT ID FROM price LIMIT 1');
                while ($row = $q->fetch()) {
                        if (isset($row)){
                                print  '<div id="itogo">
                                        <p class="price">Итого: 
                                        <input type="number" disabled id="ItogoInput" class="InputPrice" step="1" min="1" max="27" value="">  
                                        <input type="button" id="oformZakaz" value="Оформить заказ" onclick="oformZakaz()"> 
                                        </p>     
                                        </div>';   
                                } else {
                                        print '<p id="TextKorzina" class="textzagolovok">В вашей корзине пока ничего нет</p>';
                                }
                        }
                        ?> 
                </div>
		
<?php 
        include('../book_shope/additional_php/down.php');
?>