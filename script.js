window.onload = init;
function init() {
    document.getElementById("buttonImg1").style.backgroundColor = "#4cbd00";
    this.TextKorzina.removeChild();
}

function KorzinaButton() {
    location.href = 'http://localhost:8080/book_shope/korzina.php';
}

let index = 1;
let kolvo=4;

Kartinka= new Array();
Kartinka[0]=new Image();   // картинка 1
Kartinka[1]=new Image();   // картинка 2
Kartinka[2]=new Image();   // картинка 3
Kartinka[3]=new Image();   // картинка 4
 
//сами картинки, не ошибитесь с путем...
Kartinka[0].src="img/imege index/masochny_rejim.jpg";
Kartinka[1].src="img/imege index/akcia_deti.jpg";
Kartinka[2].src="img/imege index/sales.jpg";
Kartinka[3].src="img/imege index/asaloda_chytania.jpg";

function Img1(){
    document.images['imeges'].src=Kartinka[0].src;
    document.getElementById("buttonImg1").style.backgroundColor = "#4cbd00";
    document.getElementById("buttonImg2").style.backgroundColor = "white";
    document.getElementById("buttonImg3").style.backgroundColor = "white";
    document.getElementById("buttonImg4").style.backgroundColor = "white";
    index = 1;
}

function Img2(){
    document.images['imeges'].src=Kartinka[1].src;
    document.getElementById("buttonImg1").style.backgroundColor = "white";
    document.getElementById("buttonImg2").style.backgroundColor = "#4cbd00";
    document.getElementById("buttonImg3").style.backgroundColor = "white";
    document.getElementById("buttonImg4").style.backgroundColor = "white";
    index = 2;
}

function Img3(){
    document.images['imeges'].src=Kartinka[2].src;
    document.getElementById("buttonImg1").style.backgroundColor = "white";
    document.getElementById("buttonImg2").style.backgroundColor = "white";
    document.getElementById("buttonImg3").style.backgroundColor = "#4cbd00";
    document.getElementById("buttonImg4").style.backgroundColor = "white";
    index = 3;
}

function Img4(){
    document.images['imeges'].src=Kartinka[3].src;
    document.getElementById("buttonImg1").style.backgroundColor = "white";
    document.getElementById("buttonImg2").style.backgroundColor = "white";
    document.getElementById("buttonImg3").style.backgroundColor = "white";
    document.getElementById("buttonImg4").style.backgroundColor = "#4cbd00";
    index = 4;
}

function Back(){
    if (index > 1) {
    index--;
    document.images['imeges'].src=Kartinka[index-1].src;
    }
    if (index == 1) {
        document.getElementById("buttonImg1").style.backgroundColor = "#4cbd00";
        document.getElementById("buttonImg2").style.backgroundColor = "white";
        document.getElementById("buttonImg3").style.backgroundColor = "white";
        document.getElementById("buttonImg4").style.backgroundColor = "white";
    } 
    if (index == 2) {
        document.getElementById("buttonImg1").style.backgroundColor = "white";
        document.getElementById("buttonImg2").style.backgroundColor = "#4cbd00";
        document.getElementById("buttonImg3").style.backgroundColor = "white";
        document.getElementById("buttonImg4").style.backgroundColor = "white";
    } 
    if (index == 3) {
        document.getElementById("buttonImg1").style.backgroundColor = "white";
        document.getElementById("buttonImg2").style.backgroundColor = "white";
        document.getElementById("buttonImg3").style.backgroundColor = "#4cbd00";
        document.getElementById("buttonImg4").style.backgroundColor = "white";
    } 
    }

function Next() {
    if (index < kolvo) {
        index++;
        document.images['imeges'].src=Kartinka[index-1].src;
        }
    if (index == 2) {
        document.getElementById("buttonImg1").style.backgroundColor = "white";
        document.getElementById("buttonImg2").style.backgroundColor = "#4cbd00";
        document.getElementById("buttonImg3").style.backgroundColor = "white";
        document.getElementById("buttonImg4").style.backgroundColor = "white";
    } 
    if (index == 3) {
        document.getElementById("buttonImg1").style.backgroundColor = "white";
        document.getElementById("buttonImg2").style.backgroundColor = "white";
        document.getElementById("buttonImg3").style.backgroundColor = "#4cbd00";
        document.getElementById("buttonImg4").style.backgroundColor = "white";
    } 
    if (index == 4) {
        document.getElementById("buttonImg1").style.backgroundColor = "white";
        document.getElementById("buttonImg2").style.backgroundColor = "white";
        document.getElementById("buttonImg3").style.backgroundColor = "white";
        document.getElementById("buttonImg4").style.backgroundColor = "#4cbd00";
    } 
}


//Добавление в таблицу price 
//Хокинг
function ButtonHoking() {
    let HokingObject = new ButtonKorzina();
    HokingObject.AddButtonKorzina('additional_php/insert_books_bestsellers/insert_hoking.php',
    'hokingButtonVKorzinu');
}

function SmallPrints() {
    let SmallPrintsObject = new ButtonKorzina();
    SmallPrintsObject.AddButtonKorzina('additional_php/insert_books_bestsellers/insert_smalllPrints.php',
    'SmallPrintsButtonVKorzinu');
}

function Kapital() {
    let KapitalObject = new ButtonKorzina();
    KapitalObject.AddButtonKorzina('additional_php/insert_books_bestsellers/insert_kapital.php',
    'KapitalButtonVKorzinu');
}

function Uayld() {
    let UayldObject = new ButtonKorzina();
    UayldObject.AddButtonKorzina('additional_php/insert_books_bestsellers/insert_Uayld.php',
    'UayldButtonVKorzinu');
}

function Bykov() {
    let BykovObject = new ButtonKorzina();
    BykovObject.AddButtonKorzina('additional_php/insert_books_bellit/insert_Bykov.php',
    'BykovButtonVKorzinu');
}

function Kalasy() {
    let KalasyObject = new ButtonKorzina();
    KalasyObject.AddButtonKorzina('additional_php/insert_books_bellit/insert_Kalasy.php',
    'KalasyButtonVKorzinu');
}

function Lydzi() {
    let LudziObject = new ButtonKorzina();
    LudziObject.AddButtonKorzina('additional_php/insert_books_bellit/insert_Ludzi.php',
    'LydziButtonVKorzinu');
}

function Paliavanne() {
    let PaliavanneObject = new ButtonKorzina();
    PaliavanneObject.AddButtonKorzina('additional_php/insert_books_bellit/insert_Paliavanne.php',
    'PaliavanneButtonVKorzinu');
}

function Gugo() {
    let GugoObject = new ButtonKorzina();
    GugoObject.AddButtonKorzina('additional_php/insert_books_klassika/insert_Gugo.php',
    'GugoButtonVKorzinu');
}

function Prestuplenie() {
    let PrestuplenieObject = new ButtonKorzina();
    PrestuplenieObject.AddButtonKorzina('additional_php/insert_books_klassika/insert_Dostoevski.php',
    'PrestuplenieButtonVKorzinu');
}

function Pushkin() {
    let PushkinObject = new ButtonKorzina();
    PushkinObject.AddButtonKorzina('additional_php/insert_books_klassika/insert_Pushkin.php',
    'PushkinButtonVKorzinu');
}

function Remark() {
    let RemarkObject = new ButtonKorzina();
    RemarkObject.AddButtonKorzina('additional_php/insert_books_klassika/insert_Remark.php',
    'RemarkButtonVKorzinu');
}

function Bulgakov() {
    let BulgakovObject = new ButtonKorzina();
    BulgakovObject.AddButtonKorzina('additional_php/insert_books_klassika/insert_Bulgakov.php',
    'BulgakovButtonVKorzinu');
}

function GamesTrones() {
    let GamesTronesObject = new ButtonKorzina();
    GamesTronesObject.AddButtonKorzina('additional_php/insert_books_fantezy/insert_GamesTrones.php',
    'GamesTronesButtonVKorzinu');
}

function GreenMilia() {
    let GreenMiliaObject = new ButtonKorzina();
    GreenMiliaObject.AddButtonKorzina('additional_php/insert_books_fantezy/insert_GreenMilia.php',
    'GreenMiliaButtonVKorzinu');
}

function Metro() {
    let MetroObject = new ButtonKorzina();
    MetroObject.AddButtonKorzina('additional_php/insert_books_fantezy/insert_Metro.php',
    'MetroButtonVKorzinu');
}

function Vedmak() {
    let VedmakObject = new ButtonKorzina();
    VedmakObject.AddButtonKorzina('additional_php/insert_books_fantezy/insert_Vedmak.php',
    'VedmakButtonVKorzinu');
}

function Piknik() {
    let PiknikObject = new ButtonKorzina();
    PiknikObject.AddButtonKorzina('additional_php/insert_books_fantezy/insert_Piknik.php',
    'PiknikButtonVKorzinu');
}

//Вывод товара в корзину
//Хокинг
function PlusHoking() {
    let Hoking = new InputTovara();
    Hoking.VyvodTovaraPlus('hokingInput', 'summaHoking', 19.65, 'hoking', 'hokingSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('hokingInput').value;
    localStorage.setItem('hoking', InputStorage);
}

function minusHoking() {
    let Hoking = new InputTovara();
    Hoking.VyvodTovaraMinus('hokingInput', 'summaHoking', 19.65, 'hoking', 'hokingSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('hokingInput').value;
    localStorage.setItem('hoking', InputStorage);
}

//Маленький Принц
function PlusSmallPrints() {
    let SmallPrints = new InputTovara();
    SmallPrints.VyvodTovaraPlus('SmallPrintsInput', 'summaSmallPrints', 9.01, 'SmallPrints', 
    'SmallPrintsSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('SmallPrintsInput').value;
    localStorage.setItem('SmallPrints', InputStorage);
}

function minusSmallPrints() {
    let SmallPrints = new InputTovara();
    SmallPrints.VyvodTovaraMinus('SmallPrintsInput', 'summaSmallPrints', 9.01, 'SmallPrints', 'SmallPrintsSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('SmallPrintsInput').value;
    localStorage.setItem('SmallPrints', InputStorage);
}

//Капитал
function PlusKapital() {
    let Kapital = new InputTovara();
    Kapital.VyvodTovaraPlus('KapitalInput', 'summaKapital', 10.64, 'Kapital', 'kapitalSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('KapitalInput').value;
    localStorage.setItem('Kapital', InputStorage);
}

function minusKapital() {
    let Kapital = new InputTovara();
    Kapital.VyvodTovaraMinus('KapitalInput', 'summaKapital', 10.64, 'Kapital', 'kapitalSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('KapitalInput').value;
    localStorage.setItem('Kapital', InputStorage);
}

//Уайльд
function PlusUayld() {
    let Uayld = new InputTovara();
    Uayld.VyvodTovaraPlus('UayldInput', 'summaUayld', 9.44, 'Uayld', 'uayldSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    
    let InputStorage = document.getElementById('UayldInput').value;
    localStorage.setItem('Uayld', InputStorage);
}

function minusUayld() {
    let Uayld = new InputTovara();
    Uayld.VyvodTovaraMinus('UayldInput', 'summaUayld', 9.44, 'Uayld', 'uayldSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('UayldInput').value;
    localStorage.setItem('Uayld', InputStorage);
}

//Быков
function PlusBykov() {
    let Bykov = new InputTovara();
    Bykov.VyvodTovaraPlus('BykovInput', 'summaBykov', 7.33, 'Bykov', 'bykovSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    
    let InputStorage = document.getElementById('BykovInput').value;
    localStorage.setItem('Bykov', InputStorage);
}

function minusBykov() {
    let Bykov = new InputTovara();
    Bykov.VyvodTovaraMinus('BykovInput', 'summaBykov', 7.33, 'Bykov', 'bykovSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('BykovInput').value;
    localStorage.setItem('Bykov', InputStorage);
}

//Каласы
function PlusKalasy() {
    let Kalasy = new InputTovara();
    Kalasy.VyvodTovaraPlus('KalasyInput', 'summaKalasy', 32.18, 'Kalasy', 'kalasySummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    
    let InputStorage = document.getElementById('KalasyInput').value;
    localStorage.setItem('Kalasy', InputStorage);
}

function minusKalasy() {
    let Kalasy = new InputTovara();
    Kalasy.VyvodTovaraMinus('KalasyInput', 'summaKalasy', 32.18, 'Kalasy', 'kalasySummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('KalasyInput').value;
    localStorage.setItem('Kalasy', InputStorage);
}

//Людзи на балоте
function PlusLydzi() {
    let Lydzi = new InputTovara();
    Lydzi.VyvodTovaraPlus('LydziInput', 'summaLydzi', 18.98, 'Lydzi', 'lydziSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('LydziInput').value;
    localStorage.setItem('Lydzi', InputStorage);
}

function minusLydzi() {
    let Lydzi = new InputTovara();
    Lydzi.VyvodTovaraMinus('LydziInput', 'summaLydzi', 18.98, 'Lydzi', 'lydziSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('LydziInput').value;
    localStorage.setItem('Lydzi', InputStorage);
}

//Паляванне
function PlusPaliavanne() {
    let Paliavanne = new InputTovara();
    Paliavanne.VyvodTovaraPlus('PaliavanneInput', 'summaPaliavanne', 33.90, 'Paliavanne', 'paliavanneSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PaliavanneInput').value;
    localStorage.setItem('Paliavanne', InputStorage);
}

function minusPaliavanne() {
    let Paliavanne = new InputTovara();
    Paliavanne.VyvodTovaraMinus('PaliavanneInput', 'summaPaliavanne', 33.90, 'Paliavanne', 'paliavanneSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PaliavanneInput').value;
    localStorage.setItem('Paliavanne', InputStorage);
}

//Гюго
function PlusGugo() {
    let Gugo = new InputTovara();
    Gugo.VyvodTovaraPlus('GugoInput', 'summaGugo', 10.28, 'Gugo', 'gugoSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('GugoInput').value;
    localStorage.setItem('Gugo', InputStorage);
}

function minusGugo() {
    let Gugo = new InputTovara();
    Gugo.VyvodTovaraMinus('GugoInput', 'summaGugo', 10.28, 'Gugo', 'gugoSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('GugoInput').value;
    localStorage.setItem('Gugo', InputStorage);
}

//Преступление
function PlusPrestuplenie() {
    let Prestuplenie = new InputTovara();
    Prestuplenie.VyvodTovaraPlus('PrestuplenieInput', 'summaPrestuplenie', 18.14, 'Prestuplenie', 
    'prestuplenieSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PrestuplenieInput').value;
    localStorage.setItem('Prestuplenie', InputStorage);
}

function minusPrestuplenie() {
    let Prestuplenie = new InputTovara();
    Prestuplenie.VyvodTovaraMinus('PrestuplenieInput', 'summaPrestuplenie', 10.28, 'Prestuplenie', 
    'prestuplenieSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PrestuplenieInput').value;
    localStorage.setItem('Prestuplenie', InputStorage);
}

//Пушкин
function PlusPushkin() {
    let Pushkin = new InputTovara();
    Pushkin.VyvodTovaraPlus('PushkinInput', 'summaPushkin', 18.71, 'Pushkin', 
    'pushkinSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PushkinInput').value;
    localStorage.setItem('Pushkin', InputStorage);
}

function minusPushkin() {
    let Pushkin = new InputTovara();
    Pushkin.VyvodTovaraMinus('PushkinInput', 'summaPushkin', 18.71, 'Pushkin', 
    'prestuplenieSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PushkinInput').value;
    localStorage.setItem('Pushkin', InputStorage);
}

//Ремарк
function PlusRemark() {
    let Remark = new InputTovara();
    Remark.VyvodTovaraPlus('RemarkInput', 'summaRemark', 19.93, 'Remark', 
    'remarkSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('RemarkInput').value;
    localStorage.setItem('Remark', InputStorage);
}

function minusRemark() {
    let Remark = new InputTovara();
    Remark.VyvodTovaraMinus('RemarkInput', 'summaRemark', 19.93, 'Remark', 
    'remarkSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('RemarkInput').value;
    localStorage.setItem('Remark', InputStorage);
}

//Булгаков
function PlusBulgakov() {
    let Bulgakov = new InputTovara();
    Bulgakov.VyvodTovaraPlus('BulgakovInput', 'summaBulgakov', 10.28, 'Bulgakov', 
    'bulgakovSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('BulgakovInput').value;
    localStorage.setItem('Bulgakov', InputStorage);
}

function minusBulgakov() {
    let Remark = new InputTovara();
    Remark.VyvodTovaraMinus('BulgakovInput', 'summaBulgakov', 10.28, 'Bulgakov', 
    'bulgakovSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('BulgakovInput').value;
    localStorage.setItem('Bulgakov', InputStorage);
}

//Игра престолов
function PlusGamesTrones() {
    let GamesTrones = new InputTovara();
    GamesTrones.VyvodTovaraPlus('GamesTronesInput', 'summaGamesTrones', 21.87, 'GamesTrones', 
    'gamesTronesSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('GamesTronesInput').value;
    localStorage.setItem('GamesTrones', InputStorage);
}

function minusGamesTrones() {
    let GamesTrones = new InputTovara();
    GamesTrones.VyvodTovaraMinus('GamesTronesInput', 'summaGamesTrones', 21.87, 'GamesTrones', 
    'gamesTronesSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('GamesTronesInput').value;
    localStorage.setItem('GamesTrones', InputStorage);
}

//Зелёная миля
function PlusGreenMilia() {
    let GreenMilia = new InputTovara();
    GreenMilia.VyvodTovaraPlus('GreenMiliaInput', 'summaGreenMilia', 13.59, 'GreenMilia', 
    'greenMiliaSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('GreenMiliaInput').value;
    localStorage.setItem('GreenMilia', InputStorage);
}

function minusGreenMilia() {
    let GreenMilia = new InputTovara();
    GreenMilia.VyvodTovaraMinus('GreenMiliaInput', 'summaGreenMilia', 13.59, 'GreenMilia', 
    'greenMiliaSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('GreenMiliaInput').value;
    localStorage.setItem('GreenMilia', InputStorage);
}

//Метро2033
function PlusMetro() {
    let Metro = new InputTovara();
    Metro.VyvodTovaraPlus('MetroInput', 'summaMetro', 32.63, 'Metro', 
    'metroSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('MetroInput').value;
    localStorage.setItem('Metro', InputStorage);
}

function minusMetro() {
    let Metro = new InputTovara();
    Metro.VyvodTovaraMinus('MetroInput', 'summaMetro', 32.63, 'Metro', 
    'metroSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('MetroInput').value;
    localStorage.setItem('Metro', InputStorage);
}

//Ведьмак
function PlusVedmak() {
    let Vedmak = new InputTovara();
    Vedmak.VyvodTovaraPlus('VedmakInput', 'summaVedmak', 16.49, 'Vedmak', 
    'vedmakSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('VedmakInput').value;
    localStorage.setItem('Vedmak', InputStorage);
}

function minusVedmak() {
    let Vedmak = new InputTovara();
    Vedmak.VyvodTovaraMinus('VedmakInput', 'summaVedmak', 16.49, 'Vedmak', 
    'vedmakSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('VedmakInput').value;
    localStorage.setItem('Vedmak', InputStorage);
}

//Пикник
function PlusPiknik() {
    let Piknik = new InputTovara();
    Piknik.VyvodTovaraPlus('PiknikInput', 'summaPiknik', 11.38, 'Piknik', 
    'piknikSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('PiknikInput').value;
    localStorage.setItem('Piknik', InputStorage);
}

function minusPiknik() {
    let Piknik = new InputTovara();
    Piknik.VyvodTovaraMinus('PiknikInput', 'summaPiknik', 11.38, 'Vedmak', 
    'vedmakSummaLocal');

    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();

    let InputStorage = document.getElementById('VedmakInput').value;
    localStorage.setItem('Vedmak', InputStorage);
}

//запустить 
window.onload = total;
function total() {
    //Загрузка книг из Local Storage
    //Хокинг
    if (localStorage.getItem('hoking') > 0 ) {
    let hokinglLoad = new InputTovara();
    hokinglLoad.loadStorage('hoking', 'hokingInput', 'hokingSummaLocal', 'summaHoking', 19.95);
    }

    //Маленький принц
    if (localStorage.getItem('SmallPrints') > 0 ) {
    let SmallPrintslLoad = new InputTovara();
    SmallPrintslLoad.loadStorage('SmallPrints', 'SmallPrintsInput', 'SmallPrintsSummaLocal', 'summaSmallPrints',
    9.01); 
    }    

    //Капитал
    if (localStorage.getItem('Kapital') > 0 ) {
    let KapitalLoad = new InputTovara();
    KapitalLoad.loadStorage('Kapital', 'KapitalInput', 'kapitalSummaLocal', 'summaKapital', 10.64);
    } 

    //Уайльд
    if (localStorage.getItem('Uayld') > 0 ) {
    let UayldLoad = new InputTovara();
    UayldLoad.loadStorage('Uayld', 'UayldInput', 'uayldSummaLocal', 'summaUayld', 9.44);
    }

    //Быков
    if (localStorage.getItem('Bykov') > 0 ) {
    let BykovLoad = new InputTovara();
    BykovLoad.loadStorage('Bykov', 'BykovInput', 'bykovSummaLocal', 'summaBykov', 7.33);
    }

    //Каласы
    if (localStorage.getItem('Kalasy') > 0 ) {
    let KalasyLoad = new InputTovara();
    KalasyLoad.loadStorage('Kalasy', 'KalasyInput', 'kalasySummaLocal', 'summaKalasy', 32.18);
    }

    //Людзи на балоте
    if (localStorage.getItem('Lydzi') > 0 ) {
    let LydziLoad = new InputTovara();
    LydziLoad.loadStorage('Lydzi', 'LydziInput', 'lydziSummaLocal', 'summaLydzi', 18.98);
    }

    //Паляванне
    if (localStorage.getItem('Paliavanne') > 0 ) {
    let PaliavanneLoad = new InputTovara();
    PaliavanneLoad.loadStorage('Paliavanne', 'PaliavanneInput', 'paliavanneSummaLocal', 'summaPaliavanne', 33.90);
    }

    //Гюго
    if (localStorage.getItem('Gugo') > 0 ) {
    let GugoLoad = new InputTovara();
    GugoLoad.loadStorage('Gugo', 'GugoInput', 'gugoSummaLocal', 'summaGugo', 10.28);
    }

    //Преступление
    if (localStorage.getItem('Prestuplenie') > 0 ) {
    let PrestuplenieLoad = new InputTovara();
    PrestuplenieLoad.loadStorage('Prestuplenie', 'PrestuplenieInput', 'prestuplenieSummaLocal', 'summaPrestuplenie', 
    18.14);
    }

    //Пушкин
    if (localStorage.getItem('Pushkin') > 0 ) {
    let PushkinLoad = new InputTovara();
    PushkinLoad.loadStorage('Pushkin', 'PushkinInput', 'pushkinSummaLocal', 'summaPushkin', 18.71);
    }

    //Ремарк
    if (localStorage.getItem('Remark') > 0 ) {
    let RemarkLoad = new InputTovara();
    RemarkLoad.loadStorage('Remark', 'RemarkInput', 'remarkSummaLocal', 'summaRemark', 19.93);
    }

    //Булгаков
    if (localStorage.getItem('Bulgakov') > 0 ) {
    let BulgakovLoad = new InputTovara();
    BulgakovLoad.loadStorage('Bulgakov', 'BulgakovInput', 'bulgakovSummaLocal', 'summaBulgakov', 10.28);
    }

    //Игра престолов
    if (localStorage.getItem('GamesTrones') > 0 ) {
    let GamesTronesLoad = new InputTovara();
    GamesTronesLoad.loadStorage('GamesTrones', 'GamesTronesInput', 'gamesTronesSummaLocal', 'summaGamesTrones', 21.87);
    }

    //Зелёная миля
    if (localStorage.getItem('GreenMilia') > 0 ) {
    let GreenMiliaLoad = new InputTovara();
    GreenMiliaLoad.loadStorage('GreenMilia', 'GreenMiliaInput', 'greenMiliaSummaLocal', 'summaGreenMilia', 13.59);
    }

    //Метро2033
    if (localStorage.getItem('Metro') > 0 ) {
    let MetroLoad = new InputTovara();
    MetroLoad.loadStorage('Metro', 'MetroInput', 'metroSummaLocal', 'summaMetro', 32.63);
    }

    //Ведьмак
    if (localStorage.getItem('Vedmak') > 0 ) {
    let VedmakLoad = new InputTovara();
    VedmakLoad.loadStorage('Vedmak', 'VedmakInput', 'vedmakSummaLocal', 'summaVedmak', 16.49);
    }

    //Пикник
    if (localStorage.getItem('Piknik') > 0 ) {
    let PiknikLoad = new InputTovara();
    PiknikLoad.loadStorage('Piknik', 'PiknikInput', 'piknikSummaLocal', 'summaPiknik', 11.38);
    }
    
    let podschetTotal = new ulills;
    podschetTotal.oformZakaz();
}

//Удалить из корзины
//Хокинг
function deleteHoking() {
    window.open('additional_php/deleteHoking.php', '_blank');
    window.open('korzina.php');
    localStorage.removeItem('hoking');
    localStorage.removeItem('hokingSummaLocal');
    document.location.reload();
}

//Маленький принц
function deleteSmallPrints() {
    window.open('additional_php/deleteSmallPrints.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('SmallPrints');
    localStorage.removeItem('SmallPrintsSummaLocal');
}

//Капитал
function deleteKapital() {
    window.open('additional_php/deleteKapital.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Kapital');
    localStorage.removeItem('kapitalSummaLocal');
}

//Уайльд
function deleteUayld() {
    window.open('additional_php/deleteUayld.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Uayld');
    localStorage.removeItem('uayldSummaLocal');
}

//Быков
function deleteBykov() {
    window.open('additional_php/deleteBykov.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Bykov');
    localStorage.removeItem('bykovSummaLocal');
}

//Каласы
function deleteKalasy() {
    window.open('additional_php/deleteKalasy.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Kalasy');
    localStorage.removeItem('kalasySummaLocal');
}

//Людзи на болоте
function deleteLydzi() {
    window.open('additional_php/deleteLydzi.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Lydzi');
    localStorage.removeItem('lydziSummaLocal');
}

//Паляванне
function deletePaliavanne() {
    window.open('additional_php/deletePaliavanne.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Paliavanne');
    localStorage.removeItem('paliavanneSummaLocal');
}

//Гюго
function deleteGugo() {
    window.open('additional_php/deleteGugo.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Gugo');
    localStorage.removeItem('gugoSummaLocal');
}

//Преступление
function deletePrestuplenie() {
    window.open('additional_php/deletePrestuplenie.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Prestuplenie');
    localStorage.removeItem('prestuplenieSummaLocal');
}

//Пушкин
function deletePushkin() {
    window.open('additional_php/deletePushkin.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Pushkin');
    localStorage.removeItem('pushkinSummaLocal');
}

//Ремарк
function deleteRemark() {
    window.open('additional_php/deleteRemark.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Remark');
    localStorage.removeItem('remarkSummaLocal');
}

//Булгаков
function deleteBulgakov() {
    window.open('additional_php/deleteBulgakov.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Bulgakov');
    localStorage.removeItem('bulgakovSummaLocal');
}

//Игра престолов
function deleteGamesTrones() {
    window.open('additional_php/deleteGamesTrones.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('GamesTrones');
    localStorage.removeItem('gamesTronesSummaLocal');
}

//Зелёная миля
function deleteGreenMilia() {
    window.open('additional_php/deleteGreenMilia.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('GreenMilia');
    localStorage.removeItem('greenMiliaSummaLocal');
}

//Метро 2033
function deleteMetro() {
    window.open('additional_php/deleteMetro.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Metro');
    localStorage.removeItem('metroSummaLocal');
}

//Ведьмак
function deleteVedmak() {
    window.open('additional_php/deleteVedmak.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Vedmak');
    localStorage.removeItem('vedmakSummaLocal');
}

//Пикник
function deletePiknik() {
    window.open('additional_php/deletePiknik.php', '_blank');
    window.open('korzina.php');
    document.location.reload();
    localStorage.removeItem('Piknik');
    localStorage.removeItem('piknikSummaLocal');
}

function oformZakaz() {
    window.open('additional_php/truncatePrice.php', '_blank');
    location.href = 'http://localhost:8080/book_shope/additional_php/zakaz.php';
    localStorage.removeItem('hoking');
    localStorage.removeItem('hokingSummaLocal');
    localStorage.removeItem('SmallPrints');
    localStorage.removeItem('SmallPrintsSummaLocal');
    localStorage.removeItem('Kapital');
    localStorage.removeItem('kapitalSummaLocal');
    localStorage.removeItem('Uayld');
    localStorage.removeItem('uayldSummaLocal');
    localStorage.removeItem('Bykov');
    localStorage.removeItem('bykovSummaLocal');
    localStorage.removeItem('Kalasy');
    localStorage.removeItem('kalasySummaLocal');
    localStorage.removeItem('Lydzi');
    localStorage.removeItem('lydziSummaLocal');
    localStorage.removeItem('Paliavanne');
    localStorage.removeItem('paliavanneSummaLocal');
    localStorage.removeItem('Gugo');
    localStorage.removeItem('gugoSummaLocal');
    localStorage.removeItem('Prestuplenie');
    localStorage.removeItem('prestuplenieSummaLocal');
    localStorage.removeItem('Pushkin');
    localStorage.removeItem('pushkinSummaLocal');
    localStorage.removeItem('Remark');
    localStorage.removeItem('remarkSummaLocal');
    localStorage.removeItem('Bulgakov');
    localStorage.removeItem('bulgakovSummaLocal');
    localStorage.removeItem('GamesTrones');
    localStorage.removeItem('gamesTronesSummaLocal');
    localStorage.removeItem('GreenMilia');
    localStorage.removeItem('greenMiliaSummaLocal');
    localStorage.removeItem('Metro');
    localStorage.removeItem('metroSummaLocal');
    localStorage.removeItem('Vedmak');
    localStorage.removeItem('vedmakSummaLocal');
    localStorage.removeItem('Piknik');
    localStorage.removeItem('piknikSummaLocal');
}