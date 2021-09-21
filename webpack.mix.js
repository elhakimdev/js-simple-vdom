let mix = require('laravel-mix');
mix.js('src/js/app.js', 'dist/js/app.js')
       .postCss('src/css/app.css', 'dist/css/app.css', [
              require('tailwindcss'),
       ]);