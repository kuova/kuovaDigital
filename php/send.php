<?php
/*
	Creado por DaríoBF - www.dariobf.com
	Script que gestiona el envío de un formulario por correo electrónico a la cuenta indicada.
*/

//Correo de destino; donde se enviará el correo.
$correoDestino = "hola@kuova.com.mx";

//Texto emisor; sólo lo leerá quien reciba el contenido.
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF-8\r\n"; 
$headers .= "From: Kuova Digital\r\n";
// $headers .="Bcc:carlosedmundo@kuova.com.mx\r\n";

/*
	Recopilo los datos vía POST
	Con strip_tags suprimo etiquetas HTML y php para evitar una posible inyección.
	Como no gestiona base de datos no es necesario limpiar de inyección SQL.
*/
	
$nombre = strip_tags($_POST['nombre']);
$correo = strip_tags($_POST['correo']);
$telefono = strip_tags($_POST['telefono']);
$mensaje = strip_tags($_POST['mensaje']);
$fecha = time();
$fechaFormateada = date("j/n/Y", $fecha);

//Formateo el asunto del correo
$asunto = "FORMULARIO KUOVA DIGITAL";

//Formateo el cuerpo del correo
$cuerpo = "<h2>Contacto de Kuova Digital</h2>".
"<b>Correo enviado el día<b/> ". $fechaFormateada . "<br>".
"<b>Enviado por: </b>" . $nombre ."<br>".
"<b>Teléfono de contacto: </b>" . $telefono . "<br>".
"<b>E-mail:</b> " . $correo."<br>"."<br>".
$mensaje;

// Envío el mensaje


mail($correoDestino, $asunto, $cuerpo, $headers);
?>