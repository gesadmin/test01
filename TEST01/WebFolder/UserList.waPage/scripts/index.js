
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
			debugger;
		alert('help' + "me");
		//sources.user.save();
		//var x = ds.Company.all().orderBy("ID");
		
		sources.checkinlog.addNewElement();
		sources.checkinlog.Action="First Test";
		sources.checkinlog.save();
		alert("poonta");
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert('start');
		sources.user.Company.set(sources.company);
		sources.user.save();
		//alert('end');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock

