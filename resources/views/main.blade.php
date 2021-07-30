<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Superior Homes Kenya</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="preload" as="font" href="{{ asset('fonts/Nunito-sans.ttf') }}"
          crossorigin="anonymous">
</head>

<style>
    body {
        margin: 0 !important;
        background-color: transparent !important;
        overflow-x: hidden;
    }

    .initial-render {
        height: 100vh;
        background: #e3e6eb;
    }

    .content-wrap {
        width: 100%;
    }

    .initial-render .content-wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        font-size: 30px;
        font-weight: lighter;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .brand-name {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Nunito Sans', Arial, sans-serif
    }

    #spinner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 3px;
        background: radial-gradient(farthest-side, #F68D2E 95%, #0000) 50% 0/12px 12px no-repeat,
        radial-gradient(farthest-side, #0000 calc(100% - 5px), #F68D2E calc(100% - 4px)) content-box;
        animation: s6 2s infinite;
    }

    @keyframes s6 {
        to {
            transform: rotate(1turn)
        }
    }

    .loader-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        position: absolute;
        padding: 10px;
        font-weight: bold;
        font-family: nunito sans, Arial, sans-serif
    }
</style>

<body class="antialiased">

<div id="app">
    <div class="initial-render">
        <div class="content-wrap">
            <div>
                <div class="brand-name">Superior Homes Kenya</div>
                <div style="display: flex; align-items: center; justify-content: center">
                    <div>
                        <div id="spinner"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="loader-footer">
            Copyright &#169;
            <script type="text/javascript"> document.write(new Date().getFullYear())</script>
            Superior Homes Kenya Plc.
        </div>
    </div>

</div>
<script src="{{ mix('js/app.js') }}"></script>
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="3c4862df-7375-412b-a63d-c286529e5539";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2yy50Uw-pS7o17DrS7J3txklCtOiL9AI&amp;sensor=false"></script>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</body>

</html>
