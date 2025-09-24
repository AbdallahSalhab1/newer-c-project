<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\SetLocale; // Add this import
use App\Http\Middleware\LogPageVisits; // Add this import
use App\Http\Middleware\CheckExtraInfoCompleted; // Add this import
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->alias([
            'log.visits' => LogPageVisits::class, // Use the class directly
        ]);

        $middleware->web(append: [
            HandleAppearance::class,
            SetLocale::class, // Add this line - it should run before HandleInertiaRequests
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        

        
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();