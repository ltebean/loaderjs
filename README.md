loaderjs is a simplefied javascript loader for learning purpose.

##Usage

you define a module by:
	
	N.define('a1',['b1'],function(require,exports){
		exports.say=function(){
			require('b1').say();
		}
	});
	
the module's name is 'a1', it needs a dependency called b1.

the relationship between the module name and script path is specified as follows:

	modulename -> /modulename.js