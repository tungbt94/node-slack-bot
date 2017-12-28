const { createRemindSpentTimeAndReportJob, createRemindDailyMeetingJob } = require('./src/cronjob');

createRemindSpentTimeAndReportJob();
createRemindDailyMeetingJob();

