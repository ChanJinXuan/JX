var fs = require('fs');
var path = require('path');

var jsonFile = "/Users/wanaccess/eclipse-workspace/node_examples/sample.json";
var directory = "/Users/wanaccess/someDir";

var content = "";
fs.readFile(jsonFile,function(err,data){
	if (err){
		throw err;
	}
	
	content += data;
	
	var contentObj = JSON.parse(content);
	console.log(contentObj);
	
	resolveDir(contentObj,directory);
});

function resolveDir(jsonDir,dirInput){
	fs.readdir(dirInput,function(err,list){
		for (var oneFile in jsonDir){
			if (!list.includes(oneFile)){
				console.log(path.resolve(dirInput,oneFile));
			}
			if ((typeof jsonDir[oneFile])=="object"){
				console.log(oneFile);
				resolveDir(jsonDir[oneFile],path.resolve(dirInput,oneFile));
			}
		}
	});
	
}