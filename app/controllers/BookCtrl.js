'use strict';

console.log('test');

app.controller('BookCtrl', function($scope, $http) {
    console.log('test');
    
    $scope.books = [];
      $http.get('./data/guides.json')
                .then((response) => {
                    console.log('data', response.data.guides);
                    
                    $scope.books = response.data.guides;
                    console.log('books', $scope.books);
                    

                    // let itemCollection = itemObj.data;
                    
                    
                    // resolve(itemCollection);
                    //    console.log('itemCollection', itemCollection);
                });
              
                        
});
       
    
    // return { getGuides };
     


//     getGuides()
   
    
//         .then(function(itemCollection) {
//              console.log('test', getGuides);
//             // push items to array for search funtionality
//             let BookArry = [];
//             let guides = Object.keys(itemCollection);
//             guides.forEach((item) => {
//                 BookArry.push(itemCollection[item]);
//             });
//             $scope.guides = BookArry;
//             console.log('book', BookArry);
            
//         });
// 