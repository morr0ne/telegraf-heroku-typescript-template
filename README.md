# telegraf-heroku-typescript-template
### Telgram bot ready to be deployed as an heroku app

Make sure you have [nodejs](https://nodejs.org/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed first 

Copy the template then just replace `'http:/your-app-name.herokuapp.com/'` with your actual app url and set TOKEN enviroment variable (You can configure that on heroku as show [here](https://devcenter.heroku.com/articles/config-vars))

To run localy cd into the folder and run
```bash
TOKEN=<your-bot-token> yarn dev
```
The bot should update automatically on each change