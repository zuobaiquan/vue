module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                'iOS >= 8',
                'Android > 4',
                '> 1%',
                'last 2 versions',
                'not ie <= 8'
            ]
        })
    ]
}
