    <div class="form-group">
      <label for="exampleInputUserName">@lang('message.lte.name')</label>

      {!!Form::text('name',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'Tên của bạn']) !!}
    </div>

    <div class="form-group">
      <label for="exampleInputUserName">@lang('message.lte.fullname')</label>

      {!!Form::text('fullname',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'Tên đầy đủ']) !!}
    </div>

    <div class="form-group">
      <label for="exampleInputUserName">@lang('message.lte.email')</label>

      {!!Form::email('email',null,['class'=>'form-control','id'=>'exampleInputEmail','placeholder'=>'Nhập Email']) !!}
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">@lang('message.lte.password')</label>

      <input name="password" type="password" class="form-control" id="" placeholder="Re-Password">
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">@lang('message.lte.re-password')</label>
      <input name="re-password" type="password" class="form-control" id="" placeholder="Re-Password">
    </div>

    <div class="form-group">
      <label for="exampleInputPhone">@lang('message.lte.phone')</label>
      {!!Form::text('phone',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'phone']) !!}
    </div>

    <div class="form-group">
      <label for="exampleInputAddress">@lang('message.lte.address')</label>
      {!!Form::text('address',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'adress']) !!}
    </div>

    <div class="form-group">
      <label for="exampleInputFile">@lang('message.lte.picture')</label>
      {!!Form::file('avata',null,['class'=>'form-control','id'=>'exampleInputFullName','placeholder'=>'adress']) !!}
    <div style="margin-top:10px">
    </div>

