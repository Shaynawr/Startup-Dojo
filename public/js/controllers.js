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
         var CreditCard = $resource('http://api.postmarkapp.com/email',
            {userId: 123, cardId: '@id'}, {
                charge: {method: 'POST', params: {charge: true}}
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


        var newCard = new CreditCard({number: '0123'});
        newCard.name = "Mike Smith";
        newCard.$save();

    }])

.
controller('BlogController', ['$scope', function ($scope) {

}])
    .controller('PropertyInformationController', ['$scope', function ($scope) {

    }])


