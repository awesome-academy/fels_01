@extends('layout.frontend.master')
@section('content')
@section('course')
@include('layout.frontend.block.course')
@stop
   <div class="page-control width-1200 p-lr-15 bb-0">
   <div class="page-info"> <a href="/public/thanh-vien/khoa-hoc-cua-ban"><i class="icon md-arrow-left"></i>Khóa Học Của Bạn</a> </div>
   </div>
   <section id="categories-content" class="categories-content view-course-detail fade-1">
   <div class="container">
      <div class="col-md-4 col-md-push-8 p-l-30 p-r-0">

         <aside class="sidebar-categories tab-content">
            <div class="inner custom-inner p-t-0 out-line">
               <div class="tabs-page m-btm-20">
                  <div class="table-wrap left-sidebar">
                     <div class="table-body">
                        <div class="table-item">

                           <div class="tbody">
                              <div class="section-outline">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      </div>

      <div class="out-line col-md-8 col-md-pull-4 p-lr-0">
         <div class="tab-content custom-tab-content">
            <div class="tab-pane fade in active" id="mysubmissions">
               <div class="table-wrap">
                  <div class="table-head">
                     <div class="total-subm text-center text-upper">Chương</div>
                     <div class="submissions text-left p-l-40 text-upper">Dàn bài</div>
                     <div class="replied text-center text-upper">Kích hoạt</div>
                     <div class="latest-reply text-center text-upper">Link xem chi tiết</div>
                     <div class="tb-icon"></div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        @foreach($course->lessons as $lesson)
                        <div class="tbody" >
                           <div class="item now " class="child">
                              <div class="total-subm">1.1</div>
                              <div class="submissions" title="Tổng quan về PHP">{{$lesson->name}}</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="319" href="{{url('lesson_detail/' .$lesson->id)}}" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="{{url('lesson_detail/' .$lesson->id)}}"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        @endforeach
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="lession-learned hidden">76</div>
   </section>
</section>
@endsection

