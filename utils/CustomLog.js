const betterLog = require('better-console');
const listeStatus = ['dev', 'info'];

class CustomLog {

	static log(DEBUG_STATUS, ...args) {

		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.log(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'log');
		}
		
		
	}

	static info(DEBUG_STATUS = 'dev', ...args) {
		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.info(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'info');
		}
		
	}

	static warn(DEBUG_STATUS = 'dev', ...args) {
		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.warn(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'warn');
		}
	}

	static table(DEBUG_STATUS = 'dev', ...args) {
		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.table(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'table');
		}
	}

	static time(DEBUG_STATUS = 'dev', ...args) {
		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.time(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'time');
		}
	}

	static timeEnd(DEBUG_STATUS = 'dev', ...args) {
		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.timeEnd(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'timeEnd');
		}
	}

	static dir(DEBUG_STATUS = 'dev', ...args) {
		if (!listeStatus.some(status => status == DEBUG_STATUS)) {
			if (process.env.DEBUG_LVL > 1)
				betterLog.dir(DEBUG_STATUS, ...args);

		} else {
			CustomLog.statusCondition(DEBUG_STATUS, 'dir');
		}
	}

	static statusCondition(debugStatus, method) {
		switch (debugStatus) {
			case 'dev':
				if (process.env.DEBUG_LVL > 1)	
					betterLog[method](...args);
			break;
			case 'info':
				if (process.env.DEBUG_LVL > 0)	
					betterLog[method](...args);
			break;
		}
	}

}

module.exports = CustomLog;