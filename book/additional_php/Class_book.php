
<?php      
	 Class book 
		{
		function text($name, $description, $price, $ImgURL, $IDDiv, $IdButton, $ButtonBook) 
		{
			print '<img class="KartinkaBook" src="'.$ImgURL.'" alt="Хокинг">
			<p class="textzagolovokBooks">'.$name.'</p>
			<p class="textzagolovokBooksOpisanie">Описание:</p>
			<div id='.$IDDiv.' class="testBooks">'
			.$description.
			'<p class="price">Цена: ' .$price.' руб.</p>
			<input type="button" class="ButtonAddKorzinuHoking"  value="Перейти в корзину" onclick="KorzinaButton()">
			<input type="button" class="ButtonVKorzinu" id='.$IdButton.' value="Добавить в корзину" onclick="'.$ButtonBook.'">
			
			</div>
			</div>';
				}
		}

		Class loadInput {
			function vKorzinu($IDdb, $IDelement) {
				if (isset($IDdb)) {
					print '<script>
						let input = document.createElement("input");
						input.type = "button";
						input.className = "ButtonAddKorzinuHoking";
						input.value = "Перейти в корзину";
						document.getElementById("'.$IDelement.'").appendChild(input);
			
						
					</script>';	
				}
		}
		}
	
	?>