// NOTE: This example uses the next generation Twilio helper library - for more
// information on how to download and install this version, visit
// https://www.twilio.com/docs/libraries/node

// Find your credentials at twilio.com/console
const API_KEY_SID = 'SKXXXX';
const API_KEY_SECRET = 'your_api_key_secret';
const ACCOUNT_SID = 'ACXXXX';

const Twilio = require('twilio');

const client = new Twilio(API_KEY_SID, API_KEY_SECRET, {accountSid: ACCOUNT_SID});

client.video.compositionHooks.
    create({
      friendlyName: 'MyHookWithComplexVideoLayout',
      audioSources: ['listener-audio', 'presenter-audio'],
      videoLayout: {
        main: {
          z_pos: 1,
          video_sources: ['screen']
        },
        pip: {
          z_pos: 2,
          x_pos: 1000,
          y_pos: 30,
          width: 240,
          height: 180,
          video_sources: ['presenter-cam']
        }
      },
      statusCallback: 'http://my.server.org/callbacks',
      resolution: '1280x720',
      format: 'mp4'
    })
  .then(compositionHook =>{
    console.log('Created Composition Hook with SID=' + compositionHook.sid);
  });
