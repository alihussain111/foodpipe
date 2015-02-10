/**
 * Created by ahussain1 on 2/1/2015.
 */
angular.module('app')
.controller('LoginCtrl',function($scope,UserSvc){
        $scope.login = function(username,password){
            UserSvc.login(username,password)
                .then(function(user){
                    console.log(user)
                })
        }
    })