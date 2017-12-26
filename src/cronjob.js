const CronJob = require('cron').CronJob;
const config = require('config');

const { remindSpentTimeAndReport } = require('./slackbot');

function createremindSpentTimeAndReportJob() {
  const job = new CronJob({
    cronTime: config.CronJob.cronTime,
    onTick: function(callback) {
      remindSpentTimeAndReport();
      console.log("CRON TAB RUN");
    },
    start: false,
    timeZone: config.CronJob.timeZone,
  });
  job.start();
}

module.exports.createremindSpentTimeAndReportJob = createremindSpentTimeAndReportJob;