'use strict';

// Declare app level module which depends on views, and components
var myApp  =  angular.module('myApp', []);

myApp.controller('SearchController', function($scope, $http){

    // Fetch JSON data
    $http.get('data.json').then(function(response) {
        $scope.sites = response.data.Sites;
        $scope.categories = response.data.Categories;
    });

    $scope.search = function (row) {
        // if no entry exists
        if ($scope.query == '') {
            return false;
        }
        // return entries for names or category inputs
        else {
            return !!((row.siteName.toLowerCase().indexOf($scope.query.toLowerCase() || '') !== -1 || row.category.toLowerCase().indexOf($scope.query.toLowerCase() || '') !== -1));
        }
    }

});
