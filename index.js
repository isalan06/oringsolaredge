const cron = require('node-cron');
const dowork = require('./controllers/schedule-capture');
const solardataop = require('./models/SolarDataInfo');

console.log('[Info] Start to capture solar data.')

solardataop.Initialize_Customer1();
dowork.CaptureDataByAPI();
cron.schedule('*/5 * * * *', dowork.CaptureDataByAPI);
cron.schedule('*/2 * * * *', dowork.CheckDataForUpdate);