///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var User = (function () {
        function User(name, avatar, bio, notes) {
        }
        return User;
    }());
    ContactManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    ContactManagerApp.Note = Note;
})(ContactManagerApp || (ContactManagerApp = {}));
