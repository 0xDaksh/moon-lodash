'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
	/**
 	* Install plugin
 	* @param Moon
 	* @param lodash
 **/

	var plugin = {
		init: function init(Moon, lodash) {
			if (!lodash) {
				console.error('Install Lodash first!');
			}

			Moon._ = lodash;
			Object.defineProperties(Moon.prototype, {
				_: {
					get: function get() {
						return lodash;
					}
				},
				$lodash: {
					get: function get() {
						return lodash;
					}
				}
			});
		}
	};

	// export it.
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object') {
		module.exports = plugin;
	} else if (typeof define == "function" && define.amd) {
		define([], function () {
			return plugin;
		});
	} else if (window.Moon && window._) {
		Moon.use(plugin, window._);
	}
})();