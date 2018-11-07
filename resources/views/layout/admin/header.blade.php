    <header class="main-header">
      <a href="" class="logo">
        <span class="logo-mini"><b>E</b>LEARNING</span>
        <span class="logo-lg"><b>@lang('message.lte.admin_elearing')</b></span>
      </a>
      <nav class="navbar navbar-static-top">
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">@lang('message.lte.tog_nav')</span>
        </a>
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="" class="user-image" alt="User Image">
                <span class="hidden-xs">@lang('message.lte.hello')</span>
              </a>
              <ul class="dropdown-menu">
                <li class="user-header">
                  <img src="" class="img-circle" alt="User Image">
                </li>
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">@lang('message.lte.account_information')</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">@lang('message.lte.chang_password')</a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown tasks-menu">
              <a href="{{route('logout')}}" class="">
                @lang('message.lte.logout')
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
