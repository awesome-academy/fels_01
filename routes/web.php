<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.home');
});
Route::get('login', function () {
    return view('pages.login');
});
Route::get('register', function () {
    return view('pages.register');
});

Route::get('couser', function () {
    return view('pages.course');
});

Route::get('lesson_detail', function () {
    return view('pages.lesson_detail');
});

// Route::get('admin', function () {
//     return view('admin.user.list');
// });
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('user', 'UserController');
