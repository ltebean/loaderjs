N.define('a1',['b1'],function(require,exports){
	exports.say=function(){
		require('b1').say();
	}
});