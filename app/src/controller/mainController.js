/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        //add constructor
        function MainController($scope) {
            this.$scope = $scope;
            //add property
            this.message = "Hello from our controller";
            // $scope.message = "Hello from our contrller";
        }
        MainController.$inject = [];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
