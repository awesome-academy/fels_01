<?php

namespace App\Http\Controllers;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function getIndex()
    {
        $courses = Course::all();
        return view('pages.home', compact('courses'));
    }
}
