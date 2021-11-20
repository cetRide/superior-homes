<?php


namespace App\Http\Controllers;

use App\Mail\BookTour;
use App\Mail\InquiryNotification;
use App\Models\ShkSubs;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class SendEmailsController extends Controller
{
    /**
     * Send an e-mail reminder to the user.
     *
     * @param Request $request
     */
    public function sendEmail(Request $request)
    {
        $input = $request->all();
        $details = [
            'message' => $input['message'],
            'phone' => $input['phone'],
            'name' => $input['name'],
            'email' => $input['email'],
            'page' => $input['page']
        ];

        Mail::to('sales@superiorhomes.co.ke')->send(new InquiryNotification($details));

    }

    public function subScribeToMailingList(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $input = $request->all();
            $subs = new ShkSubs();
            $subs->addr = $input['email'];
            $subs->save();
            return response()->json(['success' => true]);
        } catch (\Exception $e){
            return response()->json(['success' => false]);
        }
    }
    public function bookTour(Request $request)
    {
        $input = $request->all();
        $details = [
            'msg' => "Greetings, I would like a site visit tour at " . $input['property'] . "
            . For further arrangements please contact me via email " . $input['email'] . ".
             Thank you in advance!"
        ];
        try {
            Mail::to('sales@superiorhomes.co.ke')->send(new BookTour($details));
            return response()->json(['success' => true]);
        } catch (\Exception $e){
            return response()->json(['success' => false, 'error' => $e]);
        }

    }
}
