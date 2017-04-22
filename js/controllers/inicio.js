angular.module('starter')
.controller('InCtrl', function() {
    var vm = this;
  vm.title = "Top Mejores Asesores";
  //PRIMER LUGAR
  vm.NombrePrimerLugar = "Eduardo";
  vm.ApellidoPrimerLugar = "Mondragon";
  vm.puntosPrimerLugar = 123;
  //SEGUNDO LUGAR
  vm.NombreSegundoLugar = "Ruben";
  vm.ApellidoSegundoLugar = "Valenzuela";
  vm.puntosSegundoLugar = 110;
  //SEGUNDO LUGAR
  vm.NombreTercerLugar = "Julian";
  vm.ApellidoTercerLugar = "Ortega";
  vm.puntosTercerLugar = 110;
});