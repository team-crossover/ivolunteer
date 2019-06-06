const proxy = [
    {
        context: '/api',
        target: 'https://ivolunteer-api.herokuapp.com/api/v1',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
    }
];
module.exports = proxy;