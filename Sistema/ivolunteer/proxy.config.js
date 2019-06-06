const proxy = [
    {
        context: 'http://localhost:4200/api',
        target: 'https://ivolunteer-api.herokuapp.com/',
        pathRewrite: { '^api': '' },
        changeOrigin: true,
    }
];
module.exports = proxy;