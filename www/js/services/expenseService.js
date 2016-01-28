angular.module('homexpense.services').factory('Expense',function(){
    var items=[];
    var total=0;
    
    return {
    all: function() {
      return items;
    },
    add: function(item){
        var count=items.length;
        item.id=count+1;
        item.totalprice=item.price*item.quantity;
        items.push(item);
        
        total+=item.totalprice;
        console.log("Add "+total);
        return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    },
    getTotal: function(){
       console.log(total);
      return total;   
    }
  };
})