<?php
namespace App\Http\Middleware;
// app/Http/Middleware/LogPageVisits.php

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogPageVisits
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        
        // Only log GET requests for pages (not API, assets, etc.)
        if ($this->shouldLog($request)) {
            Log::info('Page visited', [
                'url' => $request->fullUrl(),
                'path' => $request->path(),
                'method' => $request->method(),
                'ip' => $request->ip(),
                'user_id' => auth()->id() ?? 'guest',
                'user_agent' => $request->userAgent(),
                'timestamp' => now()->toISOString(),
                'referrer' => $request->header('referer'),
                'locale' => app()->getLocale(), // Log current language
            ]);
        }
        
        return $response;
    }
    
    protected function shouldLog(Request $request): bool
    {
        return $request->isMethod('GET') &&
               !$request->isJson() &&
               !$request->expectsJson() &&
               !$this->isAsset($request) &&
               !$this->isHealthCheck($request);
    }
    
    protected function isAsset(Request $request): bool
    {
        $path = $request->path();
        return preg_match('/\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/', $path);
    }
    
    protected function isHealthCheck(Request $request): bool
    {
        return $request->is('up'); // Skip health checks
    }
}