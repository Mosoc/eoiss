angular.module("modalApp", ["ui.router"]).config(function($stateProvider) {
  $stateProvider.state("Default", {});

  $stateProvider.state("Modal", {
    views:{
      "modal": {
        templateUrl: "modal.html"
      }
    },
    onEnter: ["$state", function($state) {
      $(document).on("keyup", function(e) {
        if(e.keyCode == 27) {
          $(document).off("keyup");
          $state.go("Default");
        }
      });

      $(document).on("click", ".Modal-backdrop, .Modal-holder", function() {
        $state.go("Default");
      });

      $(document).on("click", ".Modal-box, .Modal-box *", function(e) {
        e.stopPropagation();
      });
    }],
    abstract: true
  });

  $stateProvider.state("Modal.confirmAddToCart", {
    views: {
      "modal": {
        templateUrl: "modals/confirm.html"
      }
    }
  });
  
  $stateProvider.state("Modal.successfullyAdded", {
    views:{
      "modal": {
        templateUrl: "modals/success.html"
      }
    }
  });
  
    $stateProvider.state("Modal.finalStrike", {
    views:{
      "modal": {
        templateUrl: "modals/final.html"
      }
    }
  });
  
  $stateProvider.state('Panel', {
    views:{
      "panel": {
        templateUrl: "panel.html"
      }
    }
  });
  
  
  $stateProvider.state('Panel.regular', {
    views:{
      "content": {
        templateUrl: "panels/regular.html"
      }
    }
  });
  
  $stateProvider.state('Panel.progress', {
    views:{
      "content": {
        templateUrl: "panels/progress.html"
      }
    }
  });
  
  $stateProvider.state('Panel.todolist', {
    views:{
      "content": {
        templateUrl: "panels/todolist.html"
      }
    }
  });
  
  
  
});