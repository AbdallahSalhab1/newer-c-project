<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

use App\Http\Middleware\LogPageVisits;

// Public routes with logging
Route::middleware(['log.visits'])->group(function () {
    Route::get('/', function (\Illuminate\Http\Request $request) {
        $x = 5;
        Log::info('the value of x =' . "$x", [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'timestamp' => now()->toISOString(),
        ]);
        return Inertia::render('welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('home');
});



// Protected routes that require completed extra info
Route::middleware(['auth', 'verified', 'log.visits'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Add other protected routes here that require extra info completion
});

// Language route (POST request - no logging needed)
Route::post('/language', function (Illuminate\Http\Request $request) {
    $locale = $request->input('locale');
    
    if (in_array($locale, config('app.available_locales'))) {
        session(['locale' => $locale]);
    }
    
    return redirect()->back();
})->name('language.switch');

// Test logs route (with logging)
Route::get('/test-logs', function () {
    Log::debug('This is a debug message');
    Log::info('This is an info message');
    Log::warning('This is a warning message');
    Log::error('This is an error message');
    Log::critical('This is a critical message');
    
    return 'Check your logs!';
})->middleware(['log.visits']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';