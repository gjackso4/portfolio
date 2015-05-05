<?php 
    $page_name = "home";
    include("_header.php"); 
?>

    <div class="wrapper <?php echo $page_name; ?>">
    		<form action="create_account.php" method="POST">
    			<input type="text" name="Fname" placeholder="First Name">
    			<input type="text" name="Lname" placeholder="Last Name">
    			<input type="email" name="email" placeholder="email">
    			<input type="password" name="password" placeholder="Password">
    			<input type="submit" value="Submit">
    		</form>
    </div>

<?php include("_footer.php"); ?>