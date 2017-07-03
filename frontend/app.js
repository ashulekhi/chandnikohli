

var app = angular.module('chandniapp' ,[])


app.controller('controller1' ,function($scope){
	
    $scope.lastname = 'xyz'
    $scope.name = 'ashu'
	$scope.work = function(){
		console.log(">>>>>>> name" ,  $scope.name);
	}
})

app.controller('controller2' ,function($scope){
	


	$scope.work2 = function(){
		console.log(">>>>>>> name" ,  $scope.name);
	}
})

