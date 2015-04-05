var UtilityController = function($scope){
	$scope.getDateAndTime = function(dateObj){
		dateObj = new Date(dateObj);
		return dateObj.getDate() + "/" + (dateObj.getMonth()+1) + "/" + dateObj.getFullYear();
	},
	$scope.getColorCodedOrderNumber = function(orderNumber){
		var typeOfOrder = orderNumber.substr(6,2);
		switch (typeOfOrder){
			case "PR":
				return 'navy';
			case "PE":
				return 'crimson';
		}
	}
}