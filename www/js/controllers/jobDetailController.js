angular.module('homexpense.controllers').controller('JobDetailCtrl', function($scope, $state, $ionicPopup) {
	$scope.accept = function() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Confirm',
			template: 'Are you sure you want to accept this job offer?'
		});
		confirmPopup.then(function(res) {
			if(res) {
			$state.go("menu.trainingdetail");
			} else {
			console.log('You are not sure');
			}
		});
	}
	$scope.viewmap = function() {
		if (ionic.Platform.isIOS())
			window.open('http://maps.apple.com/?q=Treasure&ll=1.318166,103.893002', '_system', 'location=yes')  
		else
			window.open('geo:1.318166,103.893002?q=1.319571,103.895346(Treasure)', '_system', 'location=yes')
	}
})
