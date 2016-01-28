// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('homexpense', ['ionic','homexpense.controllers','homexpense.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
   $ionicConfigProvider.tabs.position('bottom'); // other values: top

  $urlRouterProvider.otherwise('/')

  $stateProvider
  
  .state('login', {
    url: '/',
    templateUrl:'views/login.html',
    controller:'LogInCtrl'
  })
  
  .state('menu.test', {
    url: '/test',
    views: {
      'menuContent': {
        templateUrl: 'views/test.html'
      }
    }
  })
  
  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'views/menu.html'
  })
  
  .state('menu.leaveapp', {
    url: '/leaveapp',
    views: {
      'menuContent': {
        templateUrl: 'views/leaveapp.html',
        controller: 'LeaveappCtrl'
      }
    }
  })
  
  .state('menu.rewards', {
    url: '/rewards',
    views: {
      'menuContent': {
        templateUrl: 'views/rewards.html'
      }
    }
  })
  
  .state('menu.trainingdetail', {
    url: '/trainingdetail',
    views: {
      'menuContent': {
        templateUrl: 'views/training-detail.html',
        controller: 'TrainingDetailCtrl'
      }
    }
  })
  
  .state('menu.classroomschedule', {
    url: '/classroomschedule',
    views: {
      'menuContent': {
        templateUrl: 'views/classroomschedule.html',
        controller: 'ScheduleCtrl'
      }
    }
  })
  
  .state('menu.tab.onlinetraining', {
    url: '/training/:id',
    views: {
      'tab-training': {
        templateUrl: 'views/onlinetraining.html'
      }
    }
  })
  
  .state('menu.quiz', {
    url: '/quiz',
    views: {
      'menuContent': {
        templateUrl: 'views/quiz.html'
      }
    }
  })
  
  // setup an abstract state for the tabs directive
    .state('menu.tab', {
    url: '/tab',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'views/tabs.html'
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('menu.tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'views/tab-home.html'
      }
    }
  })

  .state('menu.tab.expense', {
      url: '/expense',
      views: {
        'tab-expense': {
          templateUrl: 'views/tab-expense.html',
          controller : 'ExpenseCtrl'
        }
      }
    })

  .state('menu.tab.itemDetail', {
      url: '/itemDetail',
      views: {
        'tab-expense': {
          templateUrl: 'views/itemDetail.html',
          controller:'ItemDetailCtrl'
        }
      }
    })
        
  .state('menu.tab.attendance', {
    url: '/attendance',
    views: {
      'tab-attendance': {
        templateUrl: 'views/tab-attendance.html'
      }
    }
  })
  
  .state('menu.tab.attendancedetail', {
      url: '/attendance/:jobid',
      views: {
        'tab-attendance': {
          templateUrl: 'views/attendance.html'
        }
      }
    })
    
  .state('menu.tab.jobdetail', {
      url: '/jobs/:jobid',
      views: {
        'tab-jobs': {
          templateUrl: 'views/job-detail.html',
          controller:'JobDetailCtrl'
        }
      }
    });
})
