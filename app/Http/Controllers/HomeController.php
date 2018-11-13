<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Lesson;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::all();
        return view('pages.home', compact('courses'));

    }

    public function getLessions($id)
    {
        $course = Course::find($id);
        if ($course) {
            return view('pages.course', compact('course'));
        }
        abort('404');
    }

    public function lesstionDetail($id)
    {
        $lessons = Lesson::findOrFail($id);
        if ($lessons) {
            return view('pages.lesson_detail', compact('lessons'));
        }
        abort('404');
    }

    public function errorPage()
    {
        return view('error.404');
    }
}
