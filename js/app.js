'use strict';

// Declare app level module which depends on views, and components
var myApp  =  angular.module('myApp', []);

myApp.controller('SearchController', function($scope, $http){

    $http.get('data.json').then(function(response) {
        $scope.sites = response.data.Sites;
        $scope.categories = response.data.Categories;
    });

});
