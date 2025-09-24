<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */

     public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            // Multi-language support - ADD THESE LINES
            'locale' => app()->getLocale(),
            'available_locales' => config('app.available_locales', ['en', 'ar']),
            'translations' => $this->getTranslations(),
        ];
    }

     


    private function getTranslations(): array
    {
        $translations = [];
        $locale = app()->getLocale();
        $path = resource_path("lang/{$locale}");
        
        if (is_dir($path)) {
            $files = glob($path . '/*.php');
            foreach ($files as $file) {
                $key = basename($file, '.php');
                $translations[$key] = include $file;
            }
        }
        
        return $translations;
    }
}
