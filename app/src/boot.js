/// <reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var mainApp = angular.module('contactManagerApp', ['ngMaterial']);
    mainApp.controller('mainController', ContactManagerApp.MainController);
})(ContactManagerApp || (ContactManagerApp = {}));
