/**
 * Created by ahussain1 on 1/25/2015.
 */

angular.module('app').controller('PostsCtrl', function ($scope,PostsSvc) {

    PostsSvc.fetch().success(function(posts){
        $scope.posts=posts
    })

    //$http.get ('http://localhost:3000/api/posts')
    //    .success(function(posts){
    //        $scope.posts = posts
    //    })

    $scope.addPost = function(){
        if($scope.postBody)
        {
            PostsSvc.create({
                username:'dickeyxxx',
                body:$scope.postBody
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.postBody= null
            })
        }
    }
})