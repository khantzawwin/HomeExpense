angular.module('homexpense.controllers').controller('TrainingDetailCtrl', function($scope, $state, $cordovaToast) {
	$scope.classroom = function() {
		$state.go("menu.classroomschedule");
	}
	$scope.onlinetraining = function() {
		//only enable for device testing
		$cordovaToast
		.show('Training is added to the Training List', 'short', 'bottom')
		.then(function(success) {
		// success
		}, function (error) {
		// error
		});
		$state.go("menu.tab.training");
	}
})
