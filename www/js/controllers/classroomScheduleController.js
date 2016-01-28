angular.module('homexpense.controllers').controller('ScheduleCtrl', function($scope, $state, $cordovaToast) {
	$scope.timeslot = function() {
		//only enable for device testing
		// $cordovaToast
		// .show('Training is added to the Training List', 'short', 'bottom')
		// .then(function(success) {
		// // success
		// }, function (error) {
		// // error
		// });
		$state.go("menu.tab.jobs");
	}
})