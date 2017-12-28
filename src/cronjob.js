const CronJob = require('cron').CronJob;
const config = require('config');

const { remindSpentTimeAndReport, remindDailyMeeting } = require('./slackbot');

function createRemindSpentTimeAndReportJob() {
  const job = new CronJob({
    cronTime: config.CronJob.cronTime.testTime,
    onTick: function(callback) {
      remindSpentTimeAndReport();
      console.log("createRemindSpentTimeAndReportJob");
    },
    start: false,
    timeZone: config.CronJob.timeZone,
  });
  job.start();
}

function createRemindDailyMeetingJob() {
  const job = new CronJob({
    cronTime: config.CronJob.cronTime.testTime,
    onTick: function(callback) {
      remindDailyMeeting();
      console.log("createRemindDailyMeetingJob");
    },
    start: false,
    timeZone: config.CronJob.timeZone,
  });
  job.start();
}

module.exports.createRemindSpentTimeAndReportJob = createRemindSpentTimeAndReportJob;
module.exports.createRemindDailyMeetingJob = createRemindDailyMeetingJob;