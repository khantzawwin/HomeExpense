angular.module('homexpense.controllers').controller('ItemDetailCtrl', function($scope, $state,Expense) {
	
    $scope.itemDetails={};
    $scope.addItem=function(){
        
        
        
        // var item={};
        
        // item.itemName=$scope.itemName;
        // item.category=$scope.category;
        // item.price=$scope.price;
        // item.quantity=$scope.quantity;
        
        Expense.add($scope.itemDetails);
        // console.log("All Items");
        // var items=Expense.all();
    //     for (var i = 0; i < items.length; i++) {
    //         console.log(items[i].id);
    //   }
        
        console.log("ItemDetail");
        $state.go("menu.tab.expense");
    }
})