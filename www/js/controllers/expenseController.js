angular.module('homexpense.controllers').controller('ExpenseCtrl', function($scope, $state,$cordovaDatePicker,Expense) {
	$scope.startDate="Choose Date";
	
	var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000,
    allowOldDates: true,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000'
	};
	
	$scope.datepick=function(type){
	console.log("Clicked");
	$cordovaDatePicker.show(options).then(function(date){
		
		var dateString=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		
		if(type=='start')
		{
			$scope.startDate=dateString;
		}
			// alert(date);
		});
	}
    
    $scope.addItem=function(){
        console.log("Add Button Clicked");
        $state.go("menu.tab.itemDetail");
    }
    
    $scope.items = Expense.all();
     
    console.log(Expense.getTotal());
    $scope.grandTotal=Expense.getTotal();
})