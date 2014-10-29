
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem8 = {};	// @menuItem
	var menuItem10 = {};	// @menuItem
	var menuItem7 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem5 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem8.click = function menuItem8_click (event)// @startlock
	{// @endlock
		// Add your code here
		alert("help me");
		$$('UserForm.dialog1').displayDialog();
	};// @lock

	menuItem10.click = function menuItem10_click (event)// @startlock
	{// @endlock
					$$('frame1').setValue("/UserForm.waPage/");
	};// @lock

	menuItem7.click = function menuItem7_click (event)// @startlock
	{// @endlock
		// Add your code here
					$$('frame1').setValue("/CompanyForm.waPage/");
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
			$$('frame1').setValue("/CompanyList.waPage/");

	};// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
			// Add your code here
			$$('frame1').setValue("/UserList.waPage/");
			$$('frame1').refresh();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem8", "click", menuItem8.click, "WAF");
	WAF.addListener("menuItem10", "click", menuItem10.click, "WAF");
	WAF.addListener("menuItem7", "click", menuItem7.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
// @endregion
};// @endlock
