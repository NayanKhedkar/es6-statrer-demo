module.exports = {
    paths: {
        project: './',
        sass: {
            //entry: './sass/app.scss',
            all: './sass/*.scss',
            dest: './build'
        },
        js: {
            //entry: './src/js/app.js',
            all: './src/js/**/*.js',
            dest: './build'
        },
        assets: {
            entry: './assets/',
            all: './assets/*.',
            dest: './build/assets'
        }
    },
    names: {
        css: 'style.min.css',
        js: {
            script: 'script.min.js'
        }
    }
};
