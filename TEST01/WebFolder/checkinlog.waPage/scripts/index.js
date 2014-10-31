
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		var myfield = $$('textField5').getValue();
		//alert (myfield);
		
		sources.checkInLog.addNewElement();
		
		sources.checkInLog.Action = myfield;
		sources.checkInLog.Date = new Date();
		sources.checkInLog.UserId = 4;
	
		//sources.checkInlog.Action.set(myfield);
		
		sources.checkInLog.save();
		
		//$$('textField5').setValue('WTF');
		
		//alert("poonta");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
