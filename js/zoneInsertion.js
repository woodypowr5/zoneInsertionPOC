
var zoneInsertion = (function(){
	var _eventHandler = {};
	var EventHandler = function(){

		function hoverIn(e){
			console.log("hello")
		}
		function hoverOut(e){

		}
		this.initBindings = function(){
			$( ".child-element" ).hover(
			    function() {
			        hoverIn(this);
			    }, function() {
			        hoverOut(this);
			    }
			);
		};
	}

	var init = function(){
		_eventHandler = new EventHandler();
		_eventHandler.initBindings();
	}

	return {
		init: init
	}

})();