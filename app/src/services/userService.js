"use strict";
/// <reference path="../_all.ts" />
var UserService = (function () {
    function UserService($q) {
        this.$q = $q;
        this.selectedUser = null;
        this.users = [{
                name: 'Erick Riley',
                avatar: 'svg-1',
                bio: 'I have, have together',
                note: [{ title: 'Pay back dinner',
                        date: new Date('2016-01-12') }]
            }];
        // code...
    }
    UserService.prototype.loadAllUser = function () {
        return this.$q.when(this.users);
    };
    UserService.$inject = ['$q'];
    return UserService;
}());
exports.UserService = UserService;
