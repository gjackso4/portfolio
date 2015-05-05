<?php



if($_SERVER["REQUEST_METHOD"] == "POST") {



	$name = "Name: " . $_POST["name"] . "\n";

	$email = "Email Address: " . $_POST["email"] . "\n";

	$phone = "Phone Number: " . $_POST["phone"] . "\n";

	$message = "Message: " . $_POST["message"] . "\n";



	$email_body = "";

	$email_body = $email_body . $name;

	$email_body = $email_body . $email;

	$email_body = $email_body . $phone;

	$email_body = $email_body . $message;

	//TODO SEND EMAIL

	mail("gregoryljackson@gmail.com","New Contact Form Submit",$email_body);



	header("Location: ?status=thanks"); 

	exit;

}



?>



			<?php 

				if($_GET[status] == "thanks") {

			?>



			<p>Thank You, We have recived your email</p>



			<?php } else { ?>



				<form method="post" action="contact.php">



					<table>

						<tr>

							<th>

								<label for="name">Name</label>

							</th>

							<td>

								<input type="text" name="name" id="name">

							</td>

						</tr>

						<tr>

							<th>

								<label for="email">Email</label>

							</th>

							<td>

								<input type="text" name="email" id="email">

							</td>

						</tr>

						<tr>

							<th>

								<label for="name">Phone Number</label>

							</th>

							<td>

								<input type="text" name="phone" id="phone">

							</td>

						</tr>

						<tr>

							<th>

								<label for="message">Message</label>

							</th>

							<td>

								<textarea name="message" id="message"></textarea>

							</td>

						</tr>

					</table>

				<input type="submit" value="send">

				</form>

			<?php } ?>

			

		</div>

	</div>
