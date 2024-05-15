
<?php  
	Class Korzina {
		function output_Korzina($Img, $Name, $Price, $onclickMinus, $kovloTovara, $onclickPlus, $summaPrice, $deleteButton) {
			print '<div class="sodergimoePokupki">
			<img class="KartinkaBook" src="'.$Img.'" alt="Images">
			<div class="TextTovaraKorzina"><p>'.$Name.'</p></div>
			<div class="СircleButtonMinus"><input type="button" class="СircleButton"  value="-" onclick='.$onclickMinus.'></div>
			<div class="KolvoBook"><input type="number" disabled id='.$kovloTovara.' class="InputNamber" step="1" min="1" max="27" value="1"></div>
			<div id="СircleButtonPlus"><input type="button" class="СircleButton"  value="+" onclick="'.$onclickPlus.'"></div>
			<div class="PriceZaTovar"><input type="number" disabled id='.$summaPrice.' class="InputPrice" step="1" min="1" max="27" value="'.$Price.'">руб.</div>
			<div class="divDelete"><input type="button" class="buttonDelete"  value="" onclick="'.$deleteButton.'"></div>
			</div>';
		}
	}
	?> 