﻿var session = require('waf-sql');var param = {    dbType: "mssql",    hostname: "192.168.100.7",    user: "sa",    password: "tr9ernv!",    port: 1433};var dbconn = session.connect(param);var sqlquery = "SELECT * FROM [GESA].[dbo].[Asset]";var sqlresult = dbconn.execute(sqlquery);if (sqlresult.isError() === false) {	var result = sqlresult.getAllRows();	var x = result[0].AssetCode;		}result[1].AssetCodedbconn.close();