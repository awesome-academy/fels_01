<div class="form-group">
    <label for="exampleInputUserName">@lang('message.name')</label>

    {!!Form::text('name',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'Tên của bạn']) !!}
</div>

<div class="form-group">
    <label for="exampleInputUserName">@lang('message.fullname')</label>

    {!!Form::text('fullname',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'Tên đầy đủ']) !!}
</div>

<div class="form-group">
    <label for="exampleInputUserName">@lang('message.email')</label>

    {!!Form::email('email',null,['class'=>'form-control','id'=>'exampleInputEmail','placeholder'=>'Nhập Email']) !!}
</div>

<div class="form-group">
    <label for="exampleInputPassword1">@lang('message.password')</label>
    {!!Form::password('password',null,['class'=>'form-control','id'=>'exampleInputEmail']) !!}
</div>

<div class="form-group">
    <label for="exampleInputPassword1">@lang('message.re-password')</label>
    {!!Form::password('re-password',null,['class'=>'form-control','id'=>'exampleInputEmail']) !!}
</div>

<div class="form-group">
    <label for="exampleInputPhone">@lang('message.phone')</label>
    {!!Form::text('phone',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'phone']) !!}
</div>

<div class="form-group">
    <label for="exampleInputAddress">@lang('message.address')</label>
    {!!Form::text('address',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'adress']) !!}
</div>

<div class="form-group">
    <label for="exampleInputFile">@lang('message.picture')</label>
    {!!Form::file('avata',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'adress']) !!}
    <div style="margin-top:10px">
    </div>
</div>
