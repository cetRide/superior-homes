<!DOCTYPE html>
<html>
<head>
    <title>Superior Homes Kenya</title>
</head>
<style>
    .upper-bar {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F68D2E;
        font-size: 14px;
    }
</style>
<body>
<div class="container">
    <p>Greetings,</p>
    <p>This is an inquiry message from a site visitor on {{ $details['page'] }} page.</p><br>
    <h4>{{ $details['name'] }}</h4>
    <p><strong>Email:</strong> {{ $details['email'] }}</p>
    <p><strong>Phone Number:</strong> {{ $details['phone'] }}</p>
    <p>{{ $details['message'] }}</p><br>
    <p>Thank you</p>
</div>
<div class="footer">
    Copyright &#169;
    <script type="text/javascript"> document.write(new Date().getFullYear())</script>
    Superior Homes Kenya Plc.
</div>

</body>
</html>
