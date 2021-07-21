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
<div class="upper-bar">
    <img src="{{ asset('images/logos/logo.png') }}" height="40px" class="logo" alt="My logo">
</div>
<div class="container">
    <p>Greetings,</p>
   <p>{{ $details['msg'] }}</p>
    <p>Thank you</p>
</div>
<div class="footer">
    Copyright &#169;
    <script type="text/javascript"> document.write(new Date().getFullYear())</script>
    Superior Homes Kenya Plc.
</div>

</body>
</html>
