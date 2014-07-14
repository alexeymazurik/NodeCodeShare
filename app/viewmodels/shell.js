define(['plugins/router'], function(router){
    return {
        router: router,
        activate: function() {
            router.map([
                { route: '', title: 'Landing page', moduleId: 'viewmodels/landing'},
                { route: 'login', title: 'Sign in', moduleId: 'viewmodels/login'},
                { route: 'signUp', title: 'Sign up', moduleId: 'viewmodels/signUp' },
                { route: 'success', title: 'Success', moduleId: 'viewmodesl/success' }
            ]);

            return router.activate();
        }
    };
});