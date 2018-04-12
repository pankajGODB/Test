//console.log("PV :::", PV(8.75/100/12, 240, -31300, 0) );

_g.PV = function(rate, periods, payment, future, type) {
	// Initialize type
		//console.log("rate " +rate)
		//console.log("periods " +periods)
		//console.log("payment " +payment)
		
		//console.log("type " +type)
	 var type = (typeof type === 'undefined') ? 0 : type;
	 
	 if(future == undefined) future = 0;
	 if(periods == "Select Tenure") periods = 0;
	 //console.log("future " +future)
	  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
	  rate = eval(rate);
	  periods = eval(periods);

	  // Return present value
	  if (rate === 0) {
		return - payment * periods - future;
	  } else {
		return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
	  }
}
