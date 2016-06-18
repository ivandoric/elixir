var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');


elixir.config.assetsPath = 'wp-content/themes/elixir/assets/';
elixir.config.publicPath = 'wp-content/themes/elixir/';
elixir.config.css.outputFolder = './';

elixir(function(mix){

    mix.sass('style.scss');

    mix.scripts([
        'hello.js',
        'main.js'
    ]);

    mix.livereload([
        'wp-content/themes/elixir/style.css',
        'wp-content/themes/elixir/**/*.php',
        'wp-content/themes/elixir/js/*.js'
    ])
})
