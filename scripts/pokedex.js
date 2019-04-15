//==========[Define Globals]==========//
var pokeApp = angular.module("pokeApp", ["ngRoute"]);


//==========[Define App Routes]==========//
pokeApp.config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "pages/pokedex.html",
		controller: "pokeController"
	})
	.when("/pokedex/:pokemon", {
		templateUrl: "pages/pokemon.html",
		controller: "pokeInfoController"
	})
}]);

//==========[Define pokeInfoController]==========//

pokeApp.controller("pokeInfoController", ["$scope", "$log", "$http", "$routeParams", function($scope, $log, $http, $routeParams){

	//==========[Define Scope Variables]==========//
	$scope.sourceData = jsonPokemonData;
	$scope.pName = $routeParams.pokemon;
	$scope.pokedata;

	//==========[Request API information on designated pokemon according to url supplied]==========//
	$http.get("https://pokeapi.co/api/v2/pokemon/" + $routeParams.pokemon).then(function(response){
		$scope.pokedata = response.data;
	});

	//======================//
		/*
			function $scope.round
			-Rounds the arguments supplied to  a floating point number with 2 decimals
			-Returns: A rounded number from the arguments supplied
		*/
	//======================//
	$scope.round = function(number, decimals){
		var edit = Math.pow(10, decimals);
		return (Math.round(number * edit) / edit).toFixed(decimals);
	}

	//======================//
		/*
			function $scope.kilogramsToPounds
			-Converts the given kg into pounds
			-Returns: Converted value
		*/
	//======================//
	$scope.kilogramsToPounds = function(kg){
		return ($scope.round((kg * 2.20462 / 10), 2));
	}
	
}]);

//==========[Define pokeController]==========//
pokeApp.controller("pokeController", ["$scope", "$log", "$http", "$routeParams",  function($scope, $log, $http, $routeParams){
	//==========[Define Method of Searching]==========//
	$scope.method = "matchByName";

	//==========[Define Input that changes as user types into textbox]==========//
	$scope.input = "";

	//==========[Define Pokemon Data ]==========//
	$scope.srcData = jsonPokemonData;

	//==========[Define Type List]==========//
	$scope.pokemonTypes = {
		"bug": bugPokemon,
		"dark": darkPokemon,
		"dragon": dragonPokemon,
		"electric": electricPokemon,
		"fairy": fairyPokemon,
		"fighting": fightingPokemon,
		"fire": firePokemon,
		"flying": flyingPokemon,
		"ghost": ghostPokemon,
		"grass": grassPokemon,
		"ground": groundPokemon,
		"ice": icePokemon,
		"normal": normalPokemon,
		"poison": poisonPokemon,
		"psychic": psychicPokemon,
		"rock": rockPokemon,
		"steel": steelPokemon,
		"water": waterPokemon
	}
	//==========[Define List of Pokemon Stages]==========//
	$scope.pokemonStages = {
		"baby": babyPokemon,
		"basic": basicPokemon,
		"stage one": stageOnePokemon,
		"stage two": stageTwoPokemon,
		"mega": megaPokemon
	}

	//==========[Define Type Array]==========//
	$scope.typeList = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

	//==========[Define Stages Array]==========//
	$scope.stageList = ["baby", "basic", "stage one", "stage two", "mega"];
		
	//====================//
		/*
			function clickPokemon
			-manually relocates the windows the dynamically selected pokemon
			-Returns: nothing
		*/
	//====================//
	$scope.clickPokemon = function(pName){
		window.location.hash = "#!/pokedex/" + pName;
	}

}]);


	//======================//
			/*

			*/
	//======================//
