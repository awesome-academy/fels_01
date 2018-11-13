@extends('layout.admin.master')
@section('css')
    <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <script src="http://cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script>
@endsection
@section('content')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>
                @lang('message.lte.list_user')
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i>@lang('message.lte.home_page')</a></li>
                <li><a href="">@lang('message.lte.user')</a></li>
            </ol>
        </section>
        <section class="content">
            <div id="dialog-confirm" title="@lang('message.lte.message')" class="dialog_st">
                <p>@lang('message.lte.delete_element')</p>
            </div>
            <div class="row">
                {!! Toastr::message() !!}
                <div class="col-xs-12">
                    {!! Form::open(['method' => 'get', 'id' => 'form-search']) !!}
                        <div class="form-group">
                             {!! Form::text('keyword', null, ['class' => 'input_padding', 'id' => 'search', 'placeholder' => trans('message.lte.search_name')]) !!}
                        </div>
                    {!! Form::close() !!}
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title"><a class="btn btnsty" href="{{route('user.create')}}"
                                ">@lang('message.lte.add_user')</a></h3>
                        </div>
                        <div class="box-body">
                            <div id="result">
                                <table id="example2" class="table table-bordered table-striped animated fadeIn">
                                    <thead style="">
                                    <tr>
                                        <th class="width_th">@lang('message.lte.stt')</th>
                                        <th class="width_th">@lang('message.lte.name')</th>
                                        <th class="width_th">@lang('message.lte.avata')</th>
                                        <th class="width_th">@lang('message.lte.email')</th>
                                        <th class="width_th">@lang('message.lte.address')</th>
                                        <th class="width_th">@lang('message.lte.phone')</th>
                                        <th class="width_th">@lang('message.lte.action')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($users as $user)
                                        <tr id="user_list">
                                            <td>{{$user->id}}</td>
                                            <td>{{$user->name}}</td>
                                            <td>{{$user->avata}}</td>
                                            <td>{{$user->email}}</td>
                                            <td>{{$user->address}}</td>
                                            <td>{{$user->phone}}</td>
                                            <td class="tdlist">
                                                <a class="colorres" href=""><i class="fa fa-trash "></i></a>
                                                <a class="colorgreen" href=""><i class="fa fa-edit"></i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <div class="pagination">
                                    {{ $users->links() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
