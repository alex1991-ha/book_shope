
<?php 
include('../book/additional_php/connect_db.php');
	//$q = $db->query('DELETE FROM price WHERE ID = 1');
	// $q = $db->query('TRUNCATE TABLE price');
	$q = $db->query('DELETE FROM price');
	?> 
	
<script>
	window.close();
	setTimeout(reloadPage, 300);
	function reloadPage() {
		document.location.reload();
	}
</script>;