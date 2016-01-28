angular.module('homexpense.controllers').controller('LogInCtrl', function($scope, $state) {
	$scope.login = function() {
		$state.go("menu.tab.home");
	}
})