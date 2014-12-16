'use strict';

apostApp.service('postsService', function () {
    this.getAllPosts = function () {
        return [
            { name: "first", text: "per aspera ad astra" },
            { name: "second", text: "per aspera ad astra" },
            { name: "third", text: "per aspera ad astra" }
        ];
    };
});