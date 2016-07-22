function(activate, options) {
	var intervalID = setInterval(function(){
		if (window.stateUpdates && window.stateUpdates.subscribe) {
			clearInterval(intervalID);
			window.stateUpdates.subscribe(function(state) {
				if (state.isAuthenticated) {
					activate();
				}
			});
		}
	}, 50);
}
