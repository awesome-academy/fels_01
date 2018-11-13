@extends('layout.frontend.master')
@section('content')
    <section id="categories-content" class="categories-content view-course-detail fade-1">
        <div class="container">
            <div class="col-md-12 col-md-push-4 p-l-30 p-r-0">
             <div class="out-line col-md-10 col-md-pull-4 p-lr-0">
                <div class="tab-content custom-tab-content">
                    <div class="tab-pane fade in active" id="mysubmissions">
                       <div class="table-wrap">
                            <div class="">
                               <h2>{{$lessons->content}}</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
@endsection
