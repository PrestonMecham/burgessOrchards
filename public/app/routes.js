// CONFIG
// ============================================================
angular.module("burgessOrchards").config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: 'public/app/components/home/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'public/app/components/about/about.html',
      controller: 'aboutCtrl'
    })
    .state('fruit', {
      url: '/fruit',
      templateUrl: 'public/app/components/fruit/fruit.html',
      controller: 'fruitCtrl'
    })
    //--Fruit Nested Views--//

        .state('fruit.peaches', {
          url: '/peaches',
          templateUrl: 'public/app/components/fruit/peaches/peaches.html',
          controller: 'peachesCtrl'
        })
        .state('fruit.apples', {
          url: '/apples',
          templateUrl: 'public/app/components/fruit/apples/apples.html',
          controller: 'applesCtrl'
        })
        .state('fruit.others', {
          url: '/others',
          templateUrl: 'public/app/components/fruit/others/others.html',
          controller: 'othersCtrl'
        })
//------End Nested Views ---//

    .state('recipies', {
      url: '/recipies',
      templateUrl: 'public/app/components/recipies/recipies.html',
      controller: 'recipiesCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'public/app/components/admin/admin.html',
      controller: 'adminCtrl'
    })

    //  STATE
    .state('admin.email', {
      url: '/email',
      templateUrl: 'public/app/components/admin/email/email.html',
      controller: 'emailCtrl'
    })
    .state('admin.products', {
      url: '/products',
      templateUrl: 'public/app/components/admin/products/products.html',
      controller: 'productsCtrl'
    });





    ;


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
