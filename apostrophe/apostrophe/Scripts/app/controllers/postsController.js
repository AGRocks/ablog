'use strict';

apostApp.controller("postsController",
    function ($scope, postsService) {
        $scope.posts = postsService.getAllPosts();
    });