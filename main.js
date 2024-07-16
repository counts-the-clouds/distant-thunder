
global.Electron = require('electron');
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");
global.DATA = Electron.app.getPath("userData")
global.ENVIRONMENT = process.argv.includes('--development') ? 'development' : 'production';

require(`${ROOT}/configuration.js`);
require(`${ROOT}/engine/environment.js`);
require(`${ROOT}/engine/server.js`);
require(`${ROOT}/engine/browser.js`);

Server.init();
Browser.init();
