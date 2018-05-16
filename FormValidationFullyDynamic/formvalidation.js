var x=angular.module("formvalidate",["ngRoute"])


x.config(function($routeProvider){


$routeProvider
.when('/CSE',{

	templateUrl : 'cse.html',
	controller : 'csecontroller'	

})
.when('/CE',{

	templateUrl : 'ce.html',
	controller : 'cecontroller'	

})
.when('/ED',{

	templateUrl : 'ed.html',
	controller : 'edcontroller'	

})
.when('/EE',{

	templateUrl : 'ee.html',
	controller : 'eecontroller'	

})
.when('/success',{

	templateUrl : 'successmsg.html',
	controller : 'success'

})
.when('/',{

	templateUrl:'eventselection.html',
	controller : 'eventselection'

})



})

x.controller('csecontroller',function($scope,$location,$window){

//$scope.eventpattern=/^(Event )[1234]$/;
$scope.mobilenumber=/^[0-9]{10,12}$/;
$scope.fullname=/^[a-zA-Z ]{1,}$/;
$scope.dateofbirth=/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9][0-9]$/;
$scope.electronicmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
$scope.csepattern=/^[a-zA-Z]{1,}$/

$scope.submit=function(x){
$scope.buttonpressed=true;

if(x){

$scope.finalerror=false;

$scope.correct=true;

$window.location.href='#!success'
}
else{


$scope.finalerror=true;

$scope.correct=false;

}


}

})
x.controller('cecontroller',function($scope,$location,$window){

//$scope.eventpattern=/^(Event )[1234]$/;
$scope.mobilenumber=/^[0-9]{10,12}$/;
$scope.fullname=/^[a-zA-Z ]{1,}$/;
$scope.dateofbirth=/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9][0-9]$/;
$scope.electronicmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
$scope.cepattern=/^[a-zA-Z]{1,}$/


$scope.submit=function(x){
$scope.buttonpressed=true;

if(x){

$scope.finalerror=false;

$scope.correct=true;

$window.location.href='#!success'
}
else{


$scope.finalerror=true;

$scope.correct=false;

}


}

})
x.controller('edcontroller',function($scope,$location,$window){

//$scope.eventpattern=/^(Event )[1234]$/;
$scope.mobilenumber=/^[0-9]{10,12}$/;
$scope.fullname=/^[a-zA-Z ]{1,}$/;
$scope.dateofbirth=/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9][0-9]$/;
$scope.electronicmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
$scope.edpattern=/^[a-zA-Z]{1,}$/


$scope.submit=function(x){
$scope.buttonpressed=true;

if(x){

$scope.finalerror=false;

$scope.correct=true;

$window.location.href='#!success'
}
else{


$scope.finalerror=true;

$scope.correct=false;

}


}

})
x.controller('eecontroller',function($scope,$location,$window){

//$scope.eventpattern=/^(Event )[1234]$/;
$scope.mobilenumber=/^[0-9]{10,12}$/;
$scope.fullname=/^[a-zA-Z ]{1,}$/;
$scope.dateofbirth=/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9][0-9]$/;
$scope.electronicmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
$scope.eepattern=/^[a-zA-Z]{1,}$/


$scope.submit=function(x){
$scope.buttonpressed=true;

if(x){

$scope.finalerror=false;

$scope.correct=true;

$window.location.href='#!success'
}
else{


$scope.finalerror=true;

$scope.correct=false;

}


}

})

x.controller('eventselection',function($scope,$window,$location) {
	
$scope.eventpattern=/^(CSE)|(ED)|(EE)|(CE)$/;

$scope.submitevent=function(x,y){
$scope.buttonpressed=true;

if(x){



$scope.finalerror=false;

$scope.correct=true;

$window.location.href='#!'+y.toString();

}

else{


$scope.finalerror=true;

$scope.correct=false;

}

}

})


x.controller('success',function($scope){


 $scope.msg="Form Submitted Successfully"


 })

