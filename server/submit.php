<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$comment = mb_substr(strip_tags(trim($data['comment'] ?? '')), 0, 2000);

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email']);
    exit;
}

$dir = __DIR__ . '/../data';
if (!is_dir($dir)) {
    mkdir($dir, 0750, true);
}

$file = $dir . '/submissions.csv';
$isNew = !file_exists($file);

$fp = fopen($file, 'a');
if (!$fp) {
    http_response_code(500);
    echo json_encode(['error' => 'Storage error']);
    exit;
}

if ($isNew) {
    fputcsv($fp, ['timestamp', 'email', 'comment']);
}

fputcsv($fp, [date('Y-m-d H:i:s'), $email, $comment]);
fclose($fp);

echo json_encode(['ok' => true]);
