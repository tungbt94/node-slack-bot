const config = require('config');
const { WebClient } = require('@slack/client');

const token = config.Slack.token;
const channelId = config.Slack.channelId;

const web = new WebClient(token);

function remindSpentTimeAndReport() {
  web.chat.postMessage(channelId, config.Messages.remindSpentTimeAndReport.join("\n"))
  .then((res) => {
    console.log('Full response: ', res);
  })
  .catch(console.error);
}

function sendFullMessage() {
  web.chat.postMessage(channelId, 'Hello there', {
    attachments: [
      {
        "fallback": "Required plain-text summary of the attachment.",
        "color": "#36a64f",
        "author_name": "Tung Bui Thanh",
        "author_link": "https://www.facebook.com/Tung211294",
        "author_icon": "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/10440776_834224263262836_194260787635493203_n.jpg?oh=046bd67589c8dbb8384619d130e0d584&oe=5AC038E2",
        "title": "Slack API Documentation",
        "title_link": "https://api.slack.com/",
        "text": "Optional text that appears within the attachment",
        "fields": [
          {
            "title": "Priority",
            "value": "High",
            "short": false
          }
        ],
        "image_url": "http://my-website.com/path/to/image.jpg",
        "thumb_url": "http://example.com/path/to/thumb.png",
        "footer": "Slack API",
        "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
        "ts": 123456789
      }
    ]
  })
    .then((res) => {
      console.log('Message send: ', res.ts);
      console.log('Full response: ', res);
    })
    .catch(console.error);
}

module.exports.remindSpentTimeAndReport = remindSpentTimeAndReport;