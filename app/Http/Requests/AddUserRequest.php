<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class AddUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'fullname' => 'required',
            'email' => 'required|unique:users,email',
            'phone' => 'required|min:10|max:11',
            'password' => 'required',
            're-password' => 'same:password',
            'address' => 'required',
            'picture' => 'required|image|mimes:jpeg,jpg,png|max:204833',
        ];
    }

    public function messages()
    {
        return [
            'email.required' =>  trans('message.request.please_enter_an_email'),
            'email.unique' =>  trans('message.request.account_already_exists'),
            'fullname.required' =>  trans('message.request.please_enter_first_last_name'),
            'name.required' => trans('message.request.please_enter_a_name'),
            'phone.required' => trans('message.request.please_enter_the_phone_number'),
            'phone.min' => trans('message.request.not_a_phone_number_format'),
            'password' => trans('message.request.please_enter_a_password'),
            're-password.same' => trans('message.request.password_incorrect'),
            'address.required' => trans('message.request.please_enter_your_address'),
            'picture.required' => trans('message.request.please_select_an_image'),
            'picture.image' => trans('message.request.this_file_is_not_an_image_file'),
            'picture.mimes' => trans('message.request.photo_is_not_correct_format'),
            'picture.max' => trans('message.request.picture_too_big'),
        ];
    }
}
