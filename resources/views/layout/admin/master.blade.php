<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8" name="csrf-token" content="{{csrf_token()}}">
  <title>E-LEARNING </title>
  <base href="{{asset('')}}">
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
   {{ Html::style(asset('css/lte/bootstrap.min.css')) }}
   {{ Html::style(asset('css/lte/font-awesome.min.css')) }}
   {{ Html::style(asset('css/lte/AdminLTE.min.css')) }}
   {{ Html::style(asset('css/lte/_all-skins.min.css')) }}
   {{ Html::style(asset('css/fix.css')) }}

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

  @yield('css')
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

  @include('layout.admin.header')
  @include('layout.admin.sidebar')

  @yield('content')

  <div class="control-sidebar-bg"></div>
     @include('layout.admin.footer')
</div>

<!-- ./wrapper -->

<!-- jQuery 3 -->
<script src="js/jquery2.2.4.min.js"></script>
{{ Html::script(asset('js/lte/adminlte.min.js')) }}
@yield('script')
</body>
</html>
