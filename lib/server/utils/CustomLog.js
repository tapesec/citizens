'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var betterLog = require('better-console');
var listeStatus = ['dev', 'info'];

var CustomLog = function () {
	function CustomLog() {
		_classCallCheck(this, CustomLog);
	}

	_createClass(CustomLog, null, [{
		key: 'log',
		value: function log(DEBUG_STATUS) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.log.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'log'].concat(args));
			}
		}
	}, {
		key: 'info',
		value: function info() {
			var DEBUG_STATUS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

			for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				args[_key2 - 1] = arguments[_key2];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.info.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'info'].concat(args));
			}
		}
	}, {
		key: 'warn',
		value: function warn() {
			var DEBUG_STATUS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

			for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
				args[_key3 - 1] = arguments[_key3];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.warn.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'warn'].concat(args));
			}
		}
	}, {
		key: 'table',
		value: function table() {
			var DEBUG_STATUS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

			for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
				args[_key4 - 1] = arguments[_key4];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.table.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'table'].concat(args));
			}
		}
	}, {
		key: 'time',
		value: function time() {
			var DEBUG_STATUS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

			for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
				args[_key5 - 1] = arguments[_key5];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.time.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'time'].concat(args));
			}
		}
	}, {
		key: 'timeEnd',
		value: function timeEnd() {
			var DEBUG_STATUS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

			for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
				args[_key6 - 1] = arguments[_key6];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.timeEnd.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'timeEnd'].concat(args));
			}
		}
	}, {
		key: 'dir',
		value: function dir() {
			var DEBUG_STATUS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

			for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
				args[_key7 - 1] = arguments[_key7];
			}

			if (!listeStatus.some(function (status) {
				return status == DEBUG_STATUS;
			})) {
				if (process.env.DEBUG_LVL > 1) betterLog.dir.apply(betterLog, [DEBUG_STATUS].concat(args));
			} else {
				CustomLog.statusCondition.apply(CustomLog, [DEBUG_STATUS, 'dir'].concat(args));
			}
		}
	}, {
		key: 'statusCondition',
		value: function statusCondition(debugStatus, method) {
			for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
				args[_key8 - 2] = arguments[_key8];
			}

			switch (debugStatus) {
				case 'dev':
					if (process.env.DEBUG_LVL > 1) betterLog[method].apply(betterLog, args);
					break;
				case 'info':
					if (process.env.DEBUG_LVL > 0) betterLog[method].apply(betterLog, args);
					break;
			}
		}
	}]);

	return CustomLog;
}();

module.exports = CustomLog;