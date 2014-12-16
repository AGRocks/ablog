'use strict';

apostApp.controller("postsController",
    function ($scope) {
        $scope.posts = [
            { name: "first", text: "per aspera ad astra" },
            { name: "second", text: "per aspera ad astra" },
            { name: "third", text: "per aspera ad astra" }
        ];
    });