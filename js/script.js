var customerApp = angular.module("customerApp",[]);
customerApp.controller("CustomerAddition",function($scope){
	$scope.customers    = [
		{_id : "1" ,FirstName :"Wajiha",LastName : "Kanwal",City : "Karachi"},
		{_id : "2" ,FirstName :"Tahira",LastName : "Shamim",City : "Islamabad"},
		{_id : "3" ,FirstName :"Gulshan",LastName : "Ara",City : "Karachi"},
		{_id : "4" ,FirstName :"Sami",LastName : "Zubair",City : "Faisalabad"},
		{_id : "5" ,FirstName :"Umair",LastName : "Saleem",City : "Lahore"},
		{_id : "6" ,FirstName :"Tania",LastName : "Kanwal",City : "Islamabad"},
		{_id : "7" ,FirstName :"Mohd",LastName : "Daniyaal",City : "Lahore"},
		{_id : "8" ,FirstName :"Kaneez",LastName : "Batool",City : "Faisalabad"},
		{_id : "9" ,FirstName :"Dilawar",LastName : "Khan",City : "Lahore"}];
	$scope.addCustomer  = function(){
		var newCustomer = {FirstName : $scope.newFName,LastName : $scope.newLName,City : $scope.newCity};
		$scope.customers.push(newCustomer);
		$scope.newFName = ""; $scope.newLName = ""; $scope.newCity = "";
	};
	$scope.deleteCustomer  = function(index){
		console.log("index is : " + index);
		$scope.customers.splice(index,1);
	};
});