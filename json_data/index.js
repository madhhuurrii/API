const request = require('request');

// const appId = APP_ID;
// const appSecret = APP_SECRET;

const authOptions = {
  method: 'post',
  url: "https://api.symbl.ai/oauth2/token:generate",
  body: {
    type: "application",
    appId: "636373366c315865427663314c3953516171484d52324b68753745554d52416f",
    appSecret: "375f715a6c4d464c6e656859346856314d495368334b615f6a6c775069454d58452d7362774767397343555a484f4d56504d4a587552713474697a5756753448"
  },
  json: true
};

request(authOptions, (err, res, body) => {
  if (err) {
    console.error('error posting json: ', err);
    throw err
  }

  console.log(JSON.stringify(body, null, 2));
});