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