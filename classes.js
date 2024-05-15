class ButtonKorzina {
    AddButtonKorzina(LoadScriptPHP, IdButton, ) {
        window.open(LoadScriptPHP, '_blank');
        document.getElementById(IdButton).remove();
        // window.open(LoadScriptPHP, '_blank');
        // let input = document.createElement('input');
        // input.type = 'button';
        // input.className = 'ButtonAddKorzinuHoking';
        // input.value = 'Перейти в корзину';
        // document.getElementById(IdElement).appendChild(input);

        // let ButtonAddKorzinu = document.getElementById("ButtonAddKorzinuHoking");
        // ButtonAddKorzinu.onclick = function () { 
        // // location.href = '../korzina.php';
        // location.href = '../book_shope/korzina.php';
        // let deleteTextKorzina = document.getElementById("newsOsnovnoe");
        // document.body.removeChild(deleteTextKorzina);
        // }
    } 
}

class InputTovara {
        VyvodTovaraPlus(Input, Summa, priceBook, keyLocalStorage, keySummaStorage) { 
                let buttonPlus = document.getElementById(Input).value;
                let buttonPlusOne = ++buttonPlus;
                localStorage.setItem(keyLocalStorage, buttonPlus);
                let InputStorage = localStorage.getItem(keyLocalStorage)
                if (buttonPlusOne < 51) {
                document.getElementById(Input).value = InputStorage; 
                } else {
                    alert("Нельзя купить более 50 книг");
                }
                let price = priceBook;
                let priceWhole = price * buttonPlusOne;
                localStorage.setItem(keySummaStorage, priceWhole);
                let priceWholeStorage = localStorage.getItem(keySummaStorage);
                document.getElementById(Summa).value = Number(priceWholeStorage).toFixed(2);
            }
            
        VyvodTovaraMinus(Input, Summa, priceBook, keyLocalStorage, keySummaStorage) {
            let buttonMinus = document.getElementById(Input).value;
            let buttonMinusOne = --buttonMinus;
            localStorage.setItem(keyLocalStorage, buttonMinus);
            let InputStorage = localStorage.getItem(keyLocalStorage);
            if (buttonMinusOne > 0) {
            document.getElementById(Input).value = InputStorage;
            }
            if (buttonMinusOne > 0) {
            let price = priceBook;
            let priceWhole = price * buttonMinusOne;
            localStorage.setItem(keySummaStorage, priceWhole);
            let priceWholeStorage = localStorage.getItem(keySummaStorage);
            document.getElementById(Summa).value = Number(priceWholeStorage).toFixed(2);
            }
        }

        loadStorage(keyLocalStorage, Input, keySummaStorage, Summa, priceZaOne) {
            let loadStorage = localStorage.getItem(keyLocalStorage);
            if (loadStorage > 1) {
                document.getElementById(Input).value = localStorage.getItem(keyLocalStorage); 
            }
                let loadStorageSumma = localStorage.getItem(keySummaStorage);
                if (loadStorageSumma === null) {
                    let price = priceZaOne.toFixed(2);
                    document.getElementById(Summa).value = price;
                } else
            document.getElementById(Summa).value = Number(loadStorageSumma).toFixed(2);
        }
    }

class ulills {
        oformZakaz() {
            let wholeElement = document.querySelectorAll(".sodergimoePokupki > .PriceZaTovar > .InputPrice");
            let total = 0;
            wholeElement.forEach(function (item) {
                let priceTovara = parseFloat(item.value);
                total += priceTovara;
            })
            localStorage.setItem('Itogo', total);
            let itogoStorage = localStorage.getItem('Itogo');
            document.getElementById('ItogoInput').value = Number(itogoStorage).toFixed(2);
        }
}