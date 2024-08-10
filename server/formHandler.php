<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['name']) && isset($input['email']) && isset($input['message'])) {
    $response = [
        'status' => 'success',
        'message' => 'Form data received successfully!',
        'data' => $input
    ];
    echo json_encode($response);
} else {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid form data'
    ]);
}
?>
