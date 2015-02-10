/**
 * Created by ahussain1 on 1/25/2015.
 */

angular.module('app', [
    'ng-route'
])


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
/**
 * Created by ahussain1 on 1/25/2015.
 */
angular.module('app').service('PostsSvc',function($http){
    this.fetch = function(){
        return $http.get('/api/posts')
    }
    this.create = function (post) {
        return $http.post('/api/posts',post)
    }
})
/**
 * Created by ahussain1 on 1/31/2015.
 */
angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/',{controller:'PostsCtrl',templateUrl:'posts.html'})
        .when('/register',{controller:'RegisterCtrl',templateUrl:'register.html'})
        .when('/login',{controller:'LoginCtrl',templateUrl:'login.html'})
})
