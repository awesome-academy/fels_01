@extends('layout.admin.master')

@section('css')
    {{ Html::style(asset('css/toastr.min.css')) }}
@endsection
@section('content')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>
                @lang('message.lte.user')
                <small>@lang('message.lte.add')</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i>@lang('message.lte.home_page')</a></li>
                <li class="active"><a href="">@lang('message.lte.user')</a></li>
            </ol>
        </section>
        <section class="content">
            <div class="container">
                <div class="row">
                    @if($errors->any())
                        <div class="col-md-12">
                            <div class="alert alert-danger">
                                <ul style="list-style-type: none">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">@lang('message.lte.quick_ex')</h3>
                        </div>
                        {!! Form::open(['url' => route('user.store'),'method' => 'post','files'=>true]) !!}
                        <div class="box-body">
                            @include('form.user.user')
                        </div>
                        <div class="box-footer">
                            {!! Form::submit(trans('message.lte.add'), ['class' => 'btn btn-primary'] ) !!}
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
@section('script')
    {{ Html::style(asset('css/lte/bootstrap.min.css')) }}
    {{ Html::script(asset('js/lte/adminlte.min.js')) }}
    {{ Html::script(asset('js/lte/demo.js')) }}
    {{ Html::script(asset('js/toastr.min.js')) }}
    {!! Toastr::message() !!}
@endsection
