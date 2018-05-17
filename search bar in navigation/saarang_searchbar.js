var x= angular.module("example",["ui.bootstrap","ngAnimate","ngTouch"]);
var names=new Array()
var details=new Array()
var pics=new Array()
var animalno
x.controller("control",function($scope,$http,$uibModal){

  $scope.animalnames=new Array()

  $scope.animalpics=new Array()

  $scope.animaldata=new Array()

$http({

method:'get',

url:'animals.json'

}).then(function(response){

  $scope.animals=response.data;

  angular.forEach($scope.animals,function(an){

  $scope.animalnames.push(an.name)

  $scope.animalpics.push(an.picture)

  $scope.animaldata.push(an.about)

  })

},function(error){

console.log(error)

});

$scope.suggest=function(event,word){

        if(event.keyCode==8 && word.length==0){

              $scope.showornot=true;

              }

        else{

          if(word!=null){

                $scope.showornot=false

                var out=[]

                angular.forEach($scope.animals,function(animal) {

                                    if(animal.name.toLowerCase().indexOf(word.toLowerCase())>=0){

                                                  out.push(animal.name)

                                                                        }

                                                                            })

                $scope.suggestions=out;

                                }

                                            }

                                                              }

$scope.autocomplete=function(val){

  names=$scope.animalnames //stored in another variable to use in other controller

  pics=$scope.animalpics

  details=$scope.animaldata

  $scope.animal=val

  $scope.ind=$scope.animalnames.indexOf($scope.animal)

  animalno=$scope.ind

  $scope.showornot=true

  }

$scope.showdetails=function(){

    $scope.modal=$uibModal.open({

      ariaLabelledBy: 'modal-title',

      ariaDescribedBy: 'modal-body',

      templateUrl:'animal_data.html',

      controller:'datacontroller',

      controllerAs: '$ctrl',

      size: 'lg'

          })

}

});
//Second Controller For Pop-Up Window
x.controller("datacontroller",function($scope,$uibModalInstance){

$scope.animalnamereq=names[animalno] //required animal name
$scope.animaldatareq=details[animalno] //required animal data
$scope.animalpicsreq=pics[animalno] //required animal pic

 $scope.ok = function(){
   $uibModalInstance.close('save');

    }

});
