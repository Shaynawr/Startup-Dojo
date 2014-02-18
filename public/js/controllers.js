'use strict';

/* Controllers */

angular.module('portfolioApp.controllers', [])
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.image1 = true;

        $scope.toggle = function () {
            $scope.image1 = !$scope.image1;
        };
    }])
    .controller('AboutController', ['$scope', function ($scope) {

    }])
    .controller('ContactController', ['$scope','$resource', function ($scope,$resource) {

        var Mail = $resource('http://api.postmarkapp.com/email',
            {
                charge: {method: 'POST', params: {}, headers: {'Access-Control-Allow-Origin': '*'}}
            });

        var testmail = {
            "From": "sender@example.com",
            "To": "receiver@example.com",
            "Cc": "copied@example.com",
            "Bcc": "blank-copied@example.com",
            "Subject": "Test",
            "Tag": "Invitation",
            "HtmlBody": "<b>Hello</b>",
            "TextBody": "Hello",
            "ReplyTo": "reply@example.com",
            "Headers": [
                { "Name": "CUSTOM-HEADER", "Value": "value" }
            ]
        }

        var newMail = new Mail({
            "From": "sender@example.com",
            "To": "receiver@example.com",
            "Cc": "copied@example.com",
            "Bcc": "blank-copied@example.com",
            "Subject": "Test",
            "Tag": "Invitation",
            "HtmlBody": "<b>Hello</b>",
            "TextBody": "Hello",
            "ReplyTo": "reply@example.com",
            "Headers": [
                { "Name": "CUSTOM-HEADER", "Value": "value" }
            ]
        });

//        newMail.name = "Mike Smith";
        newMail.$save();

    }])

.
controller('BlogController', ['$scope', function ($scope) {

}])
    .controller('PropertyInformationController', ['$scope', function ($scope) {

    }])


