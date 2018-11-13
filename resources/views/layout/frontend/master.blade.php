<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>@lang('message.your_courses')</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Refresh" content="3600">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="keywords" content="Zend, Framework, training, course">
    <meta name="description" content="Zend Framework training course">
    <link href="/public/public/templates/default/student_v2018/favicon.png" rel="icon" type="image/x-icon">

    {{ Html::style(asset('resources/views/assets/css/style.css')) }}
    {{ Html::style(asset('resources/views/assets/css/library/bootstrap.min.css')) }}
    {{ Html::style(asset('resources/views/assets/css/library/font-awesome.min.css')) }}
    {{ Html::style(asset('resources/views/assets/css/library/owl.carousel.css')) }}
    {{ Html::style(asset('resources/views/assets/css/style-v3.css')) }}
    {{ Html::style(asset('resources/views/assets/css/md-font.css')) }}
    {{ Html::style(asset('resources/views/assets/css/custom.css')) }}
    {{ Html::style(asset('resources/views/assets/css/main.css')) }}

    {{ Html::script(asset('resources/views/assets/js/library/jquery-1.11.0.min.js')) }}
    {{ Html::script(asset('resources/views/assets/js/jquery.datepick.js')) }}
    {{ Html::script(asset('resources/views/assets/js/jquery.form.js')) }}
    {{ Html::script(asset('resources/views/assets/js/library/jquery.owl.carousel.js')) }}
    {{ Html::script(asset('resources/views/assets/js/library/jquery.appear.min.js')) }}
    {{ Html::script(asset('resources/views/assets/js/library/perfect-scrollbar.min.js')) }}
    {{ Html::script(asset('resources/views/assets/js/scripts.js')) }}
    {{ Html::script(asset('resources/views/assets/js/main.js')) }}

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body class="home" id="page-top" class="home">
<div id="page-wrap">
    <div id="preloader">
        <div class="pre-icon">
            <div class="pre-item pre-item-1"></div>
            <div class="pre-item pre-item-2"></div>
            <div class="pre-item pre-item-3"></div>
            <div class="pre-item pre-item-4"></div>
        </div>
    </div>
    @include('layout.frontend.header')
    @yield('course')
    @yield('content')
</div>
@include('layout.frontend.footer')
</body>
</html>
