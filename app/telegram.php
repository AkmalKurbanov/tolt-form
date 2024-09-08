<?php

/* https://api.telegram.org/bot6383754423:AAEde7PkoP5GFu0aChnKd0hX1pZpMx_Uzsk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$companyForm = $_POST['question1'];
$come = $_POST['question2'];
$helpNeeded = $_POST['question3'];
// $additionalServices = $_POST['question4'];
$whatsapp = $_POST['whatsapp'];
$telegram = $_POST['telegram'];
$viber = $_POST['viber'];
$phone = $_POST['phone'];
$service1 = $_POST['service1'];
$service2 = $_POST['service2'];
$service3 = $_POST['service3'];
$service4 = $_POST['service4'];
$service5 = $_POST['service5'];
$service6 = $_POST['service6'];

$token = "6383754423:AAEde7PkoP5GFu0aChnKd0hX1pZpMx_Uzsk";
$chat_id = "-1002136983765";

// Создаем массив с данными только если значения не пусты
$arr = array();

if (!empty($companyForm)) {
    $arr['Форма компании:'] = $companyForm;
}
if (!empty($come)) {
    $arr['Может приехать:'] = $come;
}
if (!empty($helpNeeded)) {
    $arr['Необходимо содействие:'] = $helpNeeded;
}
// if (!empty($additionalServices)) {
//     $arr['Доп. услуги'] = $additionalServices;
// }
if (!empty($whatsapp)) {
    $arr['WhatsApp:'] = $whatsapp;
}
if (!empty($telegram)) {
    $arr['Telegram:'] = $telegram;
}
if (!empty($viber)) {
    $arr['Viber:'] = $viber;
}
if (!empty($phone)) {
    $arr['Телефон:'] = $phone;
}
if (!empty($service1)) {
    $arr['1: Доп. услуги:'] = $service1;
}
if (!empty($service2)) {
    $arr['2: Доп. услуги:'] = $service2;
}
if (!empty($service3)) {
    $arr['3: Доп. услуги:'] = $service3;
}
if (!empty($service4)) {
    $arr['4: Доп. услуги:'] = $service4;
}
if (!empty($service5)) {
    $arr['5: Доп. услуги:'] = $service5;
}
if (!empty($service6)) {
    $arr['6: Доп. услуги:'] = $service6;
}

// Формируем текст сообщения только из непустых значений
$txt = "";
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
}

// Отправляем сообщение, только если есть данные для отправки
if (!empty($txt)) {
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    if ($sendToTelegram) {
        header('Location: thank-you.html');
    } else {
        echo "Error";
    }
} else {
    echo "No data to send";
}
?>









