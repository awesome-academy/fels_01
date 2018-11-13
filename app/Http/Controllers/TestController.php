<?php

namespace App\Http\Controllers;
use App\Models\Lesson;
use App\Models\Test;
use App\Models\Question;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index($id)
    {
       $test = Test::with(['questions'])->find($id);
       if ($test) {
            return view('test.index', compact('test'));
       }
       abort('404');
    }

    public function checkAnswer(Request $request, $id)
    {
        $listCheck = $this->listCheck($id);
        $totalQuestion = count($listCheck);
        $array = $this->getArray($request->question);
        $clientAnswer = $this->checkEmptyAnswer($listCheck, $array);
        $point = $this->check($listCheck, $clientAnswer);
        echo ' Ban da tra loi dung'. $point . '/'.$totalQuestion;

    }

    private function listCheck($id)
    {
        return Question::where('test_id', $id)->pluck('answers','id');
    }

    private function getArray($array)
    {
        return $array ? $array : [];
    }
    private function checkEmptyAnswer($listCheck, $array)
    {
         foreach ($listCheck as $key => $check) {
            if(!array_key_exists($key, $array)) {
                $array[$key] = null;
            }

        }
        ksort($array);
        return $array;
    }
    private function check($listCheck, $clientAnswer)
    {
        $count = 0 ;
        foreach ($listCheck as $key => $check) {
           if ($clientAnswer[$key] == $check) {
                $count++;
           }
        }
        return $count;
    }
}
