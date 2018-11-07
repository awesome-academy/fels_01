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
                        <div class="thead">
                           <div class="total-subm">1</div>
                           <div class="submissions"><a href="#">PHP căn bản</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item now tag" class="child">
                              <div class="total-subm">1.1</div>
                              <div class="submissions" title="Tổng quan về PHP">- Tổng quan về PHP</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="319" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-319" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-319"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">1.2</div>
                              <div class="submissions" title="Biến, hằng và kiểu dữ liệu">- Biến, hằng và kiểu dữ liệu</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="320" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-320" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-320"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">1.3</div>
                              <div class="submissions" title="Toán tử trong PHP">- Toán tử trong PHP</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="321" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-321" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-321"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">1.4</div>
                              <div class="submissions" title="Làm việc với Form">- Làm việc với Form</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="322" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-322" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-322"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">1.5</div>
                              <div class="submissions" title="Câu điều kiện">- Câu điều kiện</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="323" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-323" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-323"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">1.6</div>
                              <div class="submissions" title="Vòng lặp">- Vòng lặp</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="324" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-324" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-324"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">1.7</div>
                              <div class="submissions" title="Xây dựng hàm">- Xây dựng hàm</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="325" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-325" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-325"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">2</div>
                           <div class="submissions"><a href="#">Thao tác với Array - String - Number - Time</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">2.1</div>
                              <div class="submissions" title="PHP Array">- PHP Array</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="327" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-327" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-327"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">2.2</div>
                              <div class="submissions" title="PHP String">- PHP String</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="328" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-328" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-328"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">2.3</div>
                              <div class="submissions" title="PHP Number">- PHP Number</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="329" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-329" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-329"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">2.4</div>
                              <div class="submissions" title="PHP Time">- PHP Time</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="330" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-330" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-330"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">3</div>
                           <div class="submissions"><a href="#">Các đối tượng khác trong PHP</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">3.1</div>
                              <div class="submissions" title="PHP Regex">- PHP Regex</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="332" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-332" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-332"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.2</div>
                              <div class="submissions" title="PHP File">- PHP File</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="333" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-333" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-333"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.3</div>
                              <div class="submissions" title="PHP Recursive">- PHP Recursive</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="334" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-334" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-334"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.4</div>
                              <div class="submissions" title="PHP File Upload">- PHP File Upload</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="335" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-335" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-335"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.5</div>
                              <div class="submissions" title="PHP Filter">- PHP Filter</div>
                              <div class="replied custom-font">01-01-2017</div>
                              <div class="latest-reply"><a id="1636" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1636" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1636"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.6</div>
                              <div class="submissions" title="Error & Exception">- Error & Exception</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="337" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-337" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-337"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.7</div>
                              <div class="submissions" title="Session & Cookie">- Session & Cookie</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="338" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-338" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-338"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">3.8</div>
                              <div class="submissions" title="PHP Mail">- PHP Mail</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="339" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-339" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-339"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">4</div>
                           <div class="submissions"><a href="#">Làm việc với XML</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">4.1</div>
                              <div class="submissions" title="Tìm hiểu cơ bản về XML">- Tìm hiểu cơ bản về XML</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="341" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-341" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-341"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">4.2</div>
                              <div class="submissions" title="SimpleXML">- SimpleXML</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="342" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-342" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-342"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">4.3</div>
                              <div class="submissions" title="DOMDocument">- DOMDocument</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="343" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-343" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-343"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">5</div>
                           <div class="submissions"><a href="#">Lập trình hướng đối tượng</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">5.1</div>
                              <div class="submissions" title="Class & Object">- Class & Object</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="345" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-345" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-345"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.2</div>
                              <div class="submissions" title="Thuộc tính và phương thức">- Thuộc tính và phương thức</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="346" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-346" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-346"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.3</div>
                              <div class="submissions" title="Hàm xây dựng & hàm hủy">- Hàm xây dựng & hàm hủy</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="347" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-347" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-347"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.4</div>
                              <div class="submissions" title="Kế thừa và kỹ thuật nạp chồng">- Kế thừa và kỹ thuật nạp chồng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="348" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-348" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-348"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.5</div>
                              <div class="submissions" title="Phạm vi và sự ảnh hưởng">- Phạm vi và sự ảnh hưởng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="349" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-349" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-349"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.6</div>
                              <div class="submissions" title="Một số phương thức khác ">- Một số phương thức khác </div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="350" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-350" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-350"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.7</div>
                              <div class="submissions" title="Ứng dụng OOP với bài tập upload tập tin">- Ứng dụng OOP với bài tập upload tập tin</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="351" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-351" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-351"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.8</div>
                              <div class="submissions" title="Abstract class">- Abstract class</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="352" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-352" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-352"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">5.9</div>
                              <div class="submissions" title="Interface">- Interface</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="353" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-353" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-353"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">6</div>
                           <div class="submissions"><a href="#">PHP Extensions</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">6.1</div>
                              <div class="submissions" title="Xử lý hình ảnh với PHP Thumb">- Xử lý hình ảnh với PHP Thumb</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="355" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-355" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-355"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">6.2</div>
                              <div class="submissions" title="PHP Mailer">- PHP Mailer</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="356" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-356" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-356"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">6.3</div>
                              <div class="submissions" title="Captcha">- Captcha</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="358" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-358" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-358"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">6.4</div>
                              <div class="submissions" title="RSS">- RSS</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="359" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-359" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-359"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">6.5</div>
                              <div class="submissions" title="Detector">- Detector</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="361" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-361" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-361"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">6.6</div>
                              <div class="submissions" title="Cache">- Cache</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="362" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-362" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-362"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">6.7</div>
                              <div class="submissions" title="Validate">- Validate</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="392" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-392" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-392"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">7</div>
                           <div class="submissions"><a href="#">Ngôn ngữ SQL</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">7.1</div>
                              <div class="submissions" title="Hệ quản trị CSDL MySQL">- Hệ quản trị CSDL MySQL</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="364" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-364" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-364"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">7.2</div>
                              <div class="submissions" title="Truy vấn dữ liệu trên một bảng">- Truy vấn dữ liệu trên một bảng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="365" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-365" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-365"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">7.3</div>
                              <div class="submissions" title="Truy vấn dữ liệu trên nhiều bảng ">- Truy vấn dữ liệu trên nhiều bảng </div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="366" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-366" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-366"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">7.4</div>
                              <div class="submissions" title="Kỹ thuật xử lý dữ liệu">- Kỹ thuật xử lý dữ liệu</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="367" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-367" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-367"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">7.5</div>
                              <div class="submissions" title="Insert - Update - Delete">- Insert - Update - Delete</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="368" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-368" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-368"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">8</div>
                           <div class="submissions"><a href="#">PHP & MySQL</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">8.1</div>
                              <div class="submissions" title="Connnect & Disconnect">- Connnect & Disconnect</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="372" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-372" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-372"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.2</div>
                              <div class="submissions" title="Insert - Update - Delete">- Insert - Update - Delete</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="373" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-373" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-373"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.3</div>
                              <div class="submissions" title="Select">- Select</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="374" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-374" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-374"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.4</div>
                              <div class="submissions" title="SQL Injection">- SQL Injection</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="375" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-375" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-375"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.5</div>
                              <div class="submissions" title="Class Database">- Class Database</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="379" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-379" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-379"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.6</div>
                              <div class="submissions" title="Xây dựng ứng dụng Login">- Xây dựng ứng dụng Login</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="376" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-376" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-376"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.7</div>
                              <div class="submissions" title="Xây dựng ứng dụng User online">- Xây dựng ứng dụng User online</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="377" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-377" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-377"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.8</div>
                              <div class="submissions" title="Xây dựng ứng dụng quản lý group">- Xây dựng ứng dụng quản lý group</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="378" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-378" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-378"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.9</div>
                              <div class="submissions" title="Xây dựng ứng dụng quản lý user">- Xây dựng ứng dụng quản lý user</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="393" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-393" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-393"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">8.10</div>
                              <div class="submissions" title="Pagination & Class Pagination">- Pagination & Class Pagination</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="394" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-394" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-394"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">9</div>
                           <div class="submissions"><a href="#">Ajax</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">9.1</div>
                              <div class="submissions" title="Json">- Json</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="380" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-380" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-380"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">9.2</div>
                              <div class="submissions" title="JQuery - Ajax">- JQuery - Ajax</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="381" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-381" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-381"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">9.3</div>
                              <div class="submissions" title="Sử dụng ajax trong ứng dụng web">- Sử dụng ajax trong ứng dụng web</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="383" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-383" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-383"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">9.4</div>
                              <div class="submissions" title="Ajax & Check Form">- Ajax & Check Form</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="382" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-382" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-382"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">10</div>
                           <div class="submissions"><a href="#">Tự xây dựng PHP Framework (OOP - MVC)</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">10.1</div>
                              <div class="submissions" title="PHP Framework một module, một template">- PHP Framework một module, một template</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="384" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-384" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-384"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">10.2</div>
                              <div class="submissions" title="PHP Framework multi module, multi template">- PHP Framework multi module, multi template</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="396" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-396" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-396"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">11</div>
                           <div class="submissions"><a href="#">Xây dựng ứng dụng (Backend - Frontend)</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">11.1</div>
                              <div class="submissions" title="Quản lý nhóm người dùng">- Quản lý nhóm người dùng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="397" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-397" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-397"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">11.2</div>
                              <div class="submissions" title="Quản lý người dùng">- Quản lý người dùng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="386" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-386" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-386"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">11.3</div>
                              <div class="submissions" title="Đăng nhập - Đăng ký - Phân quyền">- Đăng nhập - Đăng ký - Phân quyền</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="387" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-387" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-387"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">11.4</div>
                              <div class="submissions" title="Quản lý chuyên mục sách">- Quản lý chuyên mục sách</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="388" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-388" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-388"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">11.5</div>
                              <div class="submissions" title="Quản lý sách">- Quản lý sách</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="389" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-389" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-389"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">11.6</div>
                              <div class="submissions" title="Xây dựng chức năng mua hàng">- Xây dựng chức năng mua hàng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="390" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-390" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-390"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">11.7</div>
                              <div class="submissions" title="Tối ưu ứng dụng">- Tối ưu ứng dụng</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="391" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-391" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-391"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">12</div>
                           <div class="submissions"><a href="#">Tình huống PHP</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">12.1</div>
                              <div class="submissions" title="Xây dựng chương trình trắc nghiệm tin học">- Xây dựng chương trình trắc nghiệm tin học</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="725" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-725" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-725"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">12.2</div>
                              <div class="submissions" title="Kỹ thuật trình bày dữ liệu với Ajax">- Kỹ thuật trình bày dữ liệu với Ajax</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="486" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-486" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-486"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">12.3</div>
                              <div class="submissions" title="Kỹ thuật phân trang bằng Ajax">- Kỹ thuật phân trang bằng Ajax</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="487" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-487" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-487"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">12.4</div>
                              <div class="submissions" title="Lấy tin tự động bằng cách khai thác RSS">- Lấy tin tự động bằng cách khai thác RSS</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="726" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-726" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-726"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">12.5</div>
                              <div class="submissions" title="Lấy tin tự động bằng Regurlar Expression">- Lấy tin tự động bằng Regurlar Expression</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="727" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-727" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-727"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">12.6</div>
                              <div class="submissions" title="Lấy tin tự động bằng DOM">- Lấy tin tự động bằng DOM</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="488" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-488" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-488"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">12.7</div>
                              <div class="submissions" title="Sử dụng .htaccess trong ứng dụng web">- Sử dụng .htaccess trong ứng dụng web</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="489" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-489" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-489"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">13</div>
                           <div class="submissions"><a href="#">Lập trình hướng đối tượng chuyên sâu</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">13.1</div>
                              <div class="submissions" title="Lập trình hướng đối tượng căn bản">- Lập trình hướng đối tượng căn bản</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="728" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-728" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-728"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.2</div>
                              <div class="submissions" title="Xây dựng ứng dụng quản lý và upload hình ảnh">- Xây dựng ứng dụng quản lý và upload hình ảnh</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="729" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-729" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-729"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.3</div>
                              <div class="submissions" title="Abstract class và Interface">- Abstract class và Interface</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="730" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-730" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-730"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.4</div>
                              <div class="submissions" title="__call() &__callstatic()">- __call() &__callstatic()</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="731" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-731" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-731"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.5</div>
                              <div class="submissions" title="Lambda functions & Closure">- Lambda functions & Closure</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="732" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-732" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-732"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.6</div>
                              <div class="submissions" title="Design Pattern">- Design Pattern</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="733" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-733" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-733"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.7</div>
                              <div class="submissions" title="Dependency Injection">- Dependency Injection</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="734" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-734" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-734"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">13.8</div>
                              <div class="submissions" title="Namespace">- Namespace</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="735" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-735" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-735"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">14</div>
                           <div class="submissions"><a href="#">Giải thuật menu đa cấp với cấu trúc cây</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">14.1</div>
                              <div class="submissions" title="Giới thiệu mô hình và phân tích database">- Giới thiệu mô hình và phân tích database</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="737" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-737" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-737"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">14.2</div>
                              <div class="submissions" title="Giải thuật và viết mã 4 trường hợp thêm node vào cây">- Giải thuật và viết mã 4 trường hợp thêm node vào cây</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="738" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-738" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-738"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">14.3</div>
                              <div class="submissions" title="Giải thuật và viết mã 6 trường hợp di chuyển node trên cây">- Giải thuật và viết mã 6 trường hợp di chuyển node trên cây</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="739" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-739" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-739"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">14.4</div>
                              <div class="submissions" title="Giải thuật và viết mã 2 trường hợp chỉnh sửa node trên cây">- Giải thuật và viết mã 2 trường hợp chỉnh sửa node trên cây</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="740" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-740" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-740"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">14.5</div>
                              <div class="submissions" title="Giải thuật và viết mã 2 trường hợp xóa node trên cây">- Giải thuật và viết mã 2 trường hợp xóa node trên cây</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="741" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-741" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-741"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">14.6</div>
                              <div class="submissions" title="Giải thuật và các phương pháp duyệt cây">- Giải thuật và các phương pháp duyệt cây</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="742" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-742" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-742"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">14.7</div>
                              <div class="submissions" title="Giải thuật và viết mã sắp xếp thứ tự các node trên cây">- Giải thuật và viết mã sắp xếp thứ tự các node trên cây</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="743" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-743" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-743"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">15</div>
                           <div class="submissions"><a href="#">Class và thư viện mở rộng</a></div>
                           <div class="replied custom-font">01-01-2016</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">15.1</div>
                              <div class="submissions" title="Tạo file PDF với mPDF">- Tạo file PDF với mPDF</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="485" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-485" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-485"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">15.2</div>
                              <div class="submissions" title="Kỹ thuật xây dựng giao diện với template Bootstrap 3">- Kỹ thuật xây dựng giao diện với template Bootstrap 3</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="746" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-746" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-746"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">15.3</div>
                              <div class="submissions" title="Xử lý hình ảnh với ImageWorkshop">- Xử lý hình ảnh với ImageWorkshop</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="747" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-747" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-747"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">15.4</div>
                              <div class="submissions" title="Sử dụng CKEditor, cấu hình &cài đặt plugin">- Sử dụng CKEditor, cấu hình &cài đặt plugin</div>
                              <div class="replied custom-font">01-01-2016</div>
                              <div class="latest-reply"><a id="748" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-748" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-748"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-body">
                     <div class="table-item new">
                        <div class="thead">
                           <div class="total-subm">16</div>
                           <div class="submissions"><a href="#">Nâng cấp ứng dụng BookStore</a></div>
                           <div class="replied custom-font">28-09-2017</div>
                           <div class="latest-reply text-center"> Chi tiết </div>
                           <div class="toggle tb-icon"> <a href="#"><i class="fa fa-angle-down"></i></a> </div>
                        </div>
                        <div class="tbody" >
                           <div class="item " class="child">
                              <div class="total-subm">16.1</div>
                              <div class="submissions" title="Introduce">- Introduce</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1707" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1707" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1707"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.2</div>
                              <div class="submissions" title="Chuyển đổi mysql_X sang mysqli_X">- Chuyển đổi mysql_X sang mysqli_X</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1708" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1708" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1708"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.3</div>
                              <div class="submissions" title="Các cách khắc phục Notice Undefined">- Các cách khắc phục Notice Undefined</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1709" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1709" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1709"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.4</div>
                              <div class="submissions" title="Vấn đề Autoload">- Vấn đề Autoload</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1710" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1710" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1710"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.5</div>
                              <div class="submissions" title="Thay đổi cách định nghĩa hằng số">- Thay đổi cách định nghĩa hằng số</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1711" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1711" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1711"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.6</div>
                              <div class="submissions" title="Xây dựng hàm load Controller">- Xây dựng hàm load Controller</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1712" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1712" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1712"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.7</div>
                              <div class="submissions" title="Xây dựng hàm load Model">- Xây dựng hàm load Model</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1713" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1713" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1713"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.8</div>
                              <div class="submissions" title="Hoàn chỉnh các chức năng">- Hoàn chỉnh các chức năng</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1714" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1714" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1714"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.9</div>
                              <div class="submissions" title="Xây dựng Class Validate">- Xây dựng Class Validate</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1715" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1715" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1715"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                           <div class="item " class="child">
                              <div class="total-subm">16.10</div>
                              <div class="submissions" title="Hệ thống kiến thức">- Hệ thống kiến thức</div>
                              <div class="replied custom-font">28-09-2017</div>
                              <div class="latest-reply"><a id="1716" href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1716" class="text-14">Xem chi tiết</a></div>
                              <div class="link tb-icon"> <a href="/public/thanh-vien/xem-chi-tiet/20130918TVMbo3gKQKU-20160126O8sG0XxcNAa-1716"><i class="fa fa-play-circle-o"></i></a> </div>
                           </div>
                        </div>
                     </div>
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

