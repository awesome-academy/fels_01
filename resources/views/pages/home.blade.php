@extends('layout.frontend.master')
@section('content')
<section class="profile-feature">
   <div class="awe-parallax bg-profile-feature"></div>
   <div class="awe-overlay overlay-color-3"></div>
   <div class="container">
      <div class="info-author">
         <div class="image"> <img src="https://zendvn.com/public/public/files/users/noavatar.jpg" alt=""> </div>
         <div class="name-author">
            <h2 class="big dis-inblock m-r-0">Dũng Trần</h2>
         </div>
         <div class="address-author">
            <h3 class="email">tmndung@gmail.com</h3>
         </div>
      </div>
      <div class="info-follow">
         <div class="trophies">
            <span>2</span>
            <p>@lang('message.have_registered')</p>
         </div>
         <div class="trophies">
            <span>13</span>
            <p>@lang('message.unregistered')</p>
         </div>
         <div class="trophies">
            <span>23%</span>
            <p>@lang('message.finished_school')</p>
         </div>
      </div>
   </div>
</section>
<section class="menu">
   <div class="container">
      <div class="content-bar dis-inblock">
         <ul>
            <li class="current"> <a href="/public/thanh-vien/khoa-hoc-cua-ban"> <i class="icon md-book-1"></i>@lang('message.your_course')</a> </li>
            <li class=""> <a href="/public/thanh-vien/nhung-khoa-hoc-khac"> <i class="icon fa fa-trophy"></i>@lang('message.test')</a> </li>
            <li class=""> <a class="m-r-0" href="/public/thanh-vien/doi-mat-khau"> <i class="icon md-user-minus"></i>@lang('message.personal_information')</a> </li>
         </ul>
      </div>
   </div>
</section>
<section id="categories-content" class="categories-content">
   <div class="container">
      <div class="course-list p-r-0">
         <div class="content grid">
            <div class="row">
               @foreach($courses as $course)
               <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="mc-learning-item mc-item mc-item-2">
                     <div class="image-heading">
                        <a href="{{route('course', ['id' => $course->id])}}">
                           <img src="{{$course->picture}}">
                           <div class="play-btn"> </div>
                        </a>
                     </div>
                     <div class="content-item">
                     </div>
                  </div>
               </div>
               @endforeach

            </div>
         </div>
         <div class="add_course"><a href="http://zend.vn/dang-ky-khoa-hoc/"></a></div>
      </div>
   </div>
</section>
@endsection

