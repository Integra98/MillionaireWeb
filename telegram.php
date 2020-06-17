<?php


$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "1284333709:AAHK1g4ebi71erPsypyXPT5iYpVYhzcauMc";
$chat_id = "-370030329";
$arr = array( 
 	'Имя: ' => $name,
  	'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 if (isset($name)) {
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 }
if ($sendToTelegram) {

} else {
 
}
?>