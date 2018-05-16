var x=angular.module("formvalidate",[])
x.controller('formcontroller',function($scope,$location){

$scope.eventpattern=/^(Event )[1234]$/;
$scope.mobilenumber=/^[0-9]{10,12}$/;
$scope.fullname=/^[a-zA-Z ]{1,}$/;
$scope.dateofbirth=/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9][0-9]$/;
$scope.electronicmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/


$scope.submit=function(x){
$scope.buttonpressed=true;

if(x==true){
console.log('true')
$scope.finalerror=false;
$scope.correct=true;
$location.path("/formvalidation.html")
}else{
console.log('false')
$scope.finalerror=true;
$scope.correct=false;

}


}


})
