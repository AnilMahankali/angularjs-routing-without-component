angular.module('helloworld',['ui.router'])
       .config(function($stateProvider) {
              $stateProvider
                  .state('home',{
                     url: '/home',
                      templateUrl: 'template/home.html'
                  })
                
                  .state('about', {
                     url: '/about',
                      templateUrl: 'template/about.html'
                      
                  });
                  
        });