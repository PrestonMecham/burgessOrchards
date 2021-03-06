// INITILIZE SERVICE
// ============================================================
angular.module("burgessOrchards").service("fruitService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================

this.addFruit = function(fruit){
  return $http({
    method: 'POST',
    url: '/fruit',
    data: fruit
  }).then(function(response){
    return response;
  });
};
this.getAllFruit = function(fruit){
  return $http({
      method: 'GET',
      url: '/fruit',
      data: fruit
    }).then(function(response){
      return response;
    });
  };
  this.getAllPeaches = function(fruit){
    return $http({
        method: 'GET',
        url: '/fruit/peach',
        data: fruit
      }).then(function(response){
        return response;
      });
    };
    this.getAllApples = function(fruit){
      return $http({
          method: 'GET',
          url: '/fruit/apple',
          data: fruit
        }).then(function(response){
          return response;
        });
      };


  this.updateFruit = function(id, fruit) {
    return $http({
      method: 'PUT',
      url: "/fruit/" + id,
      data: fruit
    }).then(function(response) {
      return response;
    });
  };

  this.deleteFruit = function(id) {
    return $http({
      method: 'DELETE',
      url: '/fruit/' + id
    }).then(function(response) {
      return response;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================



});
