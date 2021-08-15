<?php


namespace App\Http\Controllers;


use App\Models\ShkArticles;
use App\Models\ShkBoard;
use App\Models\ShkDocs;
use App\Models\ShkFaqs;
use App\Models\ShkGallery;
use App\Models\ShkHProperty;
use App\Models\ShkJobs;
use App\Models\ShkPropertyTypes;
use App\Models\ShkReferral;
use App\Models\ShkReferralLeads;
use App\Models\ShkTeam;
use App\Models\ShkVideos;
use Carbon\Carbon;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function createBoard(Request $request)
    {
        $board = new ShkBoard();
        //Save images
        $board->title = $request->title;
        $board->abt = $request->abt;
        $board->name = $request->name;
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $board->img = $image_url;
        }
        $board->save();
        return response($board, 200);
    }

    public function getAllBoard()
    {
        $board = ShkBoard::get()->toJson(JSON_PRETTY_PRINT);
        return response($board, 200);
    }

    public function editBoard(Request $request)
    {
        $board = ShkBoard::find($request->id);
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $board->img = $image_url;
        }
        $board->title = $request->title;
        $board->abt = $request->abt;
        $board->name = $request->name;
        $board->save();
        return response($board, 200);
    }

    public function deleteBoard(Request $request)
    {
        $board = ShkBoard::find($request->id);
        $board->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function createTeam(Request $request)
    {
        $team = new ShkTeam();
        //Save images
        $team->title = $request->title;
        $team->abt = $request->abt;
        $team->name = $request->name;
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $team->img = $image_url;
        }
        $team->save();
        return response($team, 200);
    }

    public function getAllTeam()
    {
        $team = ShkTeam::get()->toJson(JSON_PRETTY_PRINT);
        return response($team, 200);
    }

    public function editTeam(Request $request)
    {
        $team = ShkTeam::find($request->id);
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $team->img = $image_url;
        }
        $team->title = $request->title;
        $team->abt = $request->abt;
        $team->name = $request->name;
        $team->save();
        return response($team, 200);
    }

    public function deleteTeam(Request $request)
    {
        $team = ShkTeam::find($request->id);
        $team->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function createProperty(Request $request)
    {
        $property = new ShkHProperty();
        //Save images
        $property->title = $request->title;
        $property->art = $request->art;
        $property->subt = $request->subt;
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $property->img = $image_url;
        }
        $property->save();
        return response($property, 200);
    }

    public function getAllProperty()
    {
        $property = ShkHProperty::with('gallery')->get()->toJson(JSON_PRETTY_PRINT);
        return response($property, 200);
    }

    public function editProperty(Request $request)
    {
        $property = ShkHProperty::find($request->id);
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $property->img = $image_url;
        }
        $property->title = $request->title;
        $property->subt = $request->subt;
        $property->art = $request->art;
        $property->save();
        return response($property, 200);
    }

    public function deleteProperty(Request $request)
    {
        $property = ShkHProperty::find($request->id);
        $property->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function getProperty(Request $request)
    {
        $property = ShkHProperty::where('title', $request->title)
            ->with(['propertyTypes', 'gallery'])
            ->get()->toJson(JSON_PRETTY_PRINT);
        return response($property, 200);
    }

    public function createPropertyType(Request $request)
    {
        $property = new ShkPropertyTypes();
        //Save images
        $property->name = $request->name;
        $property->shk_h_property_id = $request->id;
        $property->description = $request->description;
        $property->price = $request->price;
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $property->img = $image_url;
        }
        $property->save();
        return response($property, 200);
    }

    public function getAllPropertyType()
    {
        $property = ShkPropertyTypes::get()->toJson(JSON_PRETTY_PRINT);
        return response($property, 200);
    }

    public function editPropertyType(Request $request)
    {
        $property = ShkPropertyTypes::find($request->id);
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $property->img = $image_url;
        }
        $property->name = $request->name;
        $property->description = $request->description;
        $property->price = $request->price;
        $property->save();
        return response($property, 200);
    }

    public function deletePropertyType(Request $request)
    {
        $property = ShkPropertyTypes::find($request->id);
        $property->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function createFaq(Request $request)
    {
        $faq = new ShkFaqs();
        $faq->qtn = $request->qtn;
        $faq->ans = $request->ans;
        $faq->save();
        return response($faq, 200);
    }

    public function getAllFaq()
    {
        $faq = ShkFaqs::get()->toJson(JSON_PRETTY_PRINT);
        return response($faq, 200);
    }

    public function editFaq(Request $request)
    {
        $faq = ShkFaqs::find($request->id);
        $faq->qtn = $request->qtn;
        $faq->ans = $request->ans;
        $faq->save();
        return response($faq, 200);
    }

    public function deleteFaq(Request $request)
    {
        $faq = ShkFaqs::find($request->id);
        $faq->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function createVideo(Request $request)
    {
        $video = new ShkVideos();
        $video->link = $request->link;
        $video->title = $request->title;
        $video->abt = $request->abt;
        $video->save();
        return response($video, 200);
    }

    public function getAllVideo()
    {
        $video = ShkVideos::get()->toJson(JSON_PRETTY_PRINT);
        return response($video, 200);
    }

    public function editVideo(Request $request)
    {
        $video = ShkVideos::find($request->id);
        $video->link = $request->link;
        $video->title = $request->title;
        $video->abt = $request->abt;
        $video->save();
        return response($video, 200);
    }

    public function deleteVideo(Request $request)
    {
        $video = ShkVideos::find($request->id);
        $video->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function createImage(Request $request)
    {
        $image = new ShkGallery();
        $image->shk_h_property_id = $request->shk_h_property_id;
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $image->img = $image_url;
        }
        $image->save();
        return response($image, 200);
    }

    public function getAllImage(Request $request)
    {
        $image = ShkGallery::where('shk_h_property_id', $request->propertyId)->get()->toJson(JSON_PRETTY_PRINT);
        return response($image, 200);
    }

    public function deleteImage(Request $request)
    {
        $image = ShkGallery::find($request->id);
        $image->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function createJob(Request $request)
    {
        $job = new ShkJobs();
        //Save images
        $job->title = $request->title;
        $job->descr = $request->description;
        $job->loc = $request->loc;
        $job->dat = $request->dat;
        $uploadedFile = $request->file('jd');
        $filename = $uploadedFile->getClientOriginalName();
        $request->file('jd')->move(public_path('jd'), $filename);
        $job->app = $filename;

        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $job->img = $image_url;
        }


        $job->save();
        return response($job, 200);
    }

    public function getAllJob()
    {
        $job = ShkJobs::get()->toJson(JSON_PRETTY_PRINT);
        return response($job, 200);
    }

    public function editJob(Request $request)
    {
        $job = ShkJobs::find($request->id);
        $job->title = $request->title;
        $job->loc = $request->loc;
        $job->dat = $request->dat;
        $job->descr = $request->descr;
        $oldFile = $job->app;
        if ($request->file('jd')) {
            $uploadedFile = $request->file('jd');
            $filename = $uploadedFile->getClientOriginalName();
            $request->file('jd')->move(public_path('jd'), $filename);
            $job->app = $filename;

            if (file_exists(public_path('jd/' . $oldFile))) {
                unlink(public_path('jd/' . $oldFile));
            }
            if (!is_null($request->file('file'))) {
                $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
                $job->img = $image_url;
            }
            $job->save();
            return response($job, 200);
        }
    }

    public function deleteJob(Request $request)
    {
        $job = ShkJobs::find($request->id);
        $job->forceDelete();
        if (file_exists(public_path('jd/' . $job->app))) {
            unlink(public_path('jd/' . $job->app));
        }
        return response('Deleted successfully', 200);
    }

    public function editArticle(Request $request)
    {
        $article = ShkArticles::find($request->id);
        if (!is_null($request->file('file'))) {
            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $article->img = $image_url;
        }
        $article->title = $request->title;
        $article->abt = $request->abt;
        $article->save();
        return response($article, 200);
    }

    public function createDoc(Request $request)
    {
        $doc = new ShkDocs();
        $uploadedFile = $request->file('file');
        $filename = str_replace(' ', '-', $uploadedFile->getClientOriginalName());
        $request->file('file')->move(public_path('docs'), $filename);
        $doc->path = $filename;
        $doc->dat = Carbon::now()->toDateTimeString();
        $doc->name = $request->title;

        $doc->save();
        return response($doc, 200);
    }

    public function getAllDocs()
    {
        $doc = ShkDocs::get()->toJson(JSON_PRETTY_PRINT);
        return response($doc, 200);
    }

    public function deleteDoc(Request $request)
    {
        $image = ShkDocs::find($request->id);
        if (file_exists(public_path('docs/' . $image->path))) {
            unlink(public_path('docs/' . $image->path));
        }
        $image->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function deleteReferrals(Request $request)
    {
        $link = ShkReferral::find($request->id);
        $link->forceDelete();
        return response('Deleted successfully', 200);
    }

    public function fetchReferral(Request $request)
    {
        $link = ShkReferral::find($request->id);
        return response($link, 200);
    }

    public function getAllReferrals()
    {
        $links = ShkReferral::get()->toJson(JSON_PRETTY_PRINT);
        return response($links, 200);
    }

    public function createReferrals(Request $request)
    {
        $link = new ShkReferral();
        $link->name = $request->name;
        $link->redirect_link = $request->redirect_link;
        $link->save();
        $link->link = $request->link . '/' . $link->id;
        $link->save();
        return response($link, 200);
    }

    public function editReferrals(Request $request)
    {
        $link = ShkReferral::find($request->id);
        $link->link = $request->link . '/' . $link->id;
        $link->name = $request->name;
        $link->redirect_link = $request->redirect_link;
        $link->save();
        return response($link, 200);
    }

    public function createReferralLeads(Request $request)
    {
        $link = new ShkReferralLeads();
        $link->shk_referral_id = $request->id;
        $link->save();
        return response($link, 200);
    }

    public function fetchDashboardDetails()
    {
        $results = [];
        $today = Carbon::today()->toDateTimeString();
        $yesterday = Carbon::yesterday();
        $referrals = ShkReferral::with('leads')->get();

        foreach ($referrals as $referral) {
            $data = [
                'name' => $referral->name,
                'today' => ShkReferralLeads::where('shk_referral_id',$referral->id)->where('created_at', '>', $today)->count(),
                'yesterday' => ShkReferralLeads::where('shk_referral_id',$referral->id)
                    ->whereBetween('created_at',[$yesterday, $today])->count(),
                'lastMonth' => ShkReferralLeads::whereMonth(
                    'created_at', '=', Carbon::now()->subMonth()->month)->count(),
            ];
            array_push($results, $data);
        }
        return response($results, 200);
    }
}
