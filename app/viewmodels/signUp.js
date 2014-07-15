define(['knockout','socketio'], function(ko,io){

    //var socket = io.coonect();
    //var $signUpErrors = $('#signUpErrors');

    var viewmodel = {
        username : ko.observable(''),
        password : ko.observable(''),
        email: ko.observable(''),
        activate: activate,
        signUp: signUp
    };

    function activate() {
        alert('Hello world!');
    }

    function signUp() {
//        socket.emit('new user', { username: viewmodel.username(), password: viewmodel.password(), email: viewmodel.email() },
//        function(data) {
//
//        });
    }

    return viewmodel;
});