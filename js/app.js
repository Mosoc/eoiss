angular.module("modalApp", ["ui.router"]).config(function($stateProvider) {
  $stateProvider.state("Modal", {
    views:{
      "modal": {
        templateUrl: "modal.html"
      }
    },
    abstract: true
  });

  $stateProvider.state("Modal.confirmAddToCart", {
    views:{
      "modal": {
        templateUrl: "modals/confirm.html"
      }
    }
  });
});