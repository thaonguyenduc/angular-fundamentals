///<reference path="../_all.ts"/>
module ContactManagerApp{
  export class User{
    constructor(public name: string, public avatar: string,bio: string, notes: Note[]){}
  }
export class Note{
    constructor(public title:String,public date: Date){}
  }
}


