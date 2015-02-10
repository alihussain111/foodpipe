/**
 * Created by ahussain1 on 1/31/2015.
 */
angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{controller:'PostsCtrl',templateUrl:'posts.html'})
       /* .when('/register',{controller:'RegisterCtrl',templateUrl:'register.html'})
        .when('/login',{controller:'LoginCtrl',templateUrl:'login.html'})*/
}])
