angular.module('myapp', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/home");

      $stateProvider
          .state('root', {
              abstract: true,
              url:''
          })
          .state('root.home', {
              url: '/home',
              templateUrl: 'views/home.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          }).state('root.home.company', {
              url: '/company',
              templateUrl: 'views/company/companypanel.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          }).state('root.home.employee',{
              url: '/employee',
              controller:'employeeCtrl',
              templateUrl: 'views/employee/employeePanel.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          }).state('root.home.employee.lists',{
              url: '/lists',
              templateUrl: 'views/employee/employeeList1.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          }).state('root.home.employee.lists.edit',{
              url: '/edit',
              templateUrl: 'views/employee/employeeform.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
        });
  });
