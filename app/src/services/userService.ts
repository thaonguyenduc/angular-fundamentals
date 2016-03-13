/// <reference path="../_all.ts" />
export interface IUserService{
  loadAllUser: ng.IPromise<User[]>;
  selectedUser: User;
}
export class UserService implements IUserService {

  static $inject =  ['$q'];
  constructor(private $q: ng.IQService) {
    // code...
  }
  selectedUser: User = null;
  loadAllUser(): ng.IPromise<User[]>{
    return this.$q.when(this.users);
  }
  private users:User[]= [{
     name: 'Erick Riley',
     avatar: 'svg-1',
     bio: 'I have, have together',
     note:
     [{title: 'Pay back dinner'
     ,date: new Date('2016-01-12')}]
  }];
}
