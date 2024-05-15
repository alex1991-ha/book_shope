
<?php 
include('../book/additional_php/connect_db.php');
	$q = $db->query('DELETE FROM price 
					 WHERE ID = 14');
	?> 
	
<script>
	window.close();
	setTimeout(reloadPage, 300);
	function reloadPage() {
		document.location.reload();
	}
</script>;