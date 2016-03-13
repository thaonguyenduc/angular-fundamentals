/// <reference path="../_all.ts"/>
module ContactManagerApp{
 export class MainController{
   static $inject= [];
   //add constructor
   constructor(private $scope: any){
     // $scope.message = "Hello from our contrller";
   }
   //add property
   message: string ="Hello from our controller";
 }
}
