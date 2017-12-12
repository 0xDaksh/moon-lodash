(function () {
	/**
 	* Install plugin
 	* @param Moon
 	* @param lodash
	**/
	 
	var plugin = {
		init(Moon, lodash) {
			if(!lodash) {
				console.error('Install Lodash first!')
			}

			Moon._ = lodash
			Object.defineProperties(Moon.prototype, {
				_: {
					get() {
						return lodash
					}
				},
				$lodash: {
					get() {
						return lodash
					}
				}
			})
		}
	}
	
	// export it.
	if(typeof exports == 'object') {
		module.exports = plugin
	} else if(typeof define == "function" && define.amd) {
		define([], function(){
			return plugin
		})
	} else if(window.Moon && window._) {
		Moon.use(plugin, window._)
	}
})()