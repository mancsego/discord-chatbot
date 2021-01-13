# Discord CI/CD chatbot

## Project setup
```
npm install
```
Copy *example.env* to *.env* and setup the required variables 
```
TOKEN=YOUR_TOKEN
CHANNEL_ID=YOUR_CHANNEL_ID
```
**In case you are deploying the app, setup environment variables on your webserver**
### Compiles and hot-reloads for development
```
npm run start-dev
```

## How to use it

To post messages to your discord channel you simply have to call two different endpoint:

- [ GET ] - {host}/deployment-status
- [ GET ] - {host}/post-special

###1. [ GET ] Deployment status
This endpoint is intended to provide informal messages about the status of a particular deployment.

Expects 3 parameters:
- project: Identifies the project which you are deploying [OPTIONAL] 
- hash: Identifies the commit hash of your deployment (or anything what you want) [OPTIONAL]
- event: Can hold 2 different values: start || done [MANDATORY]

In case you don't pass the event parameter you will still receive an informal message with some information:

-- Unknown deployment event. [project: %s][hash: %s] -- 

eg:
- /deployment-status?event=start&project=hello-world&hash=commit-hash
- /deployment-status?event=done&project=hello-world&hash=commit-hash

###2. [ GET ] Post special
Forwards a message to your discord channel

Expects 1 parameter:
- msg: Can be anything what you want [MANDATORY]


## Discords application setup
- Go to https://discord.com/developers/applications
- Create a new application
- Add a bot (under Bot menu)
- Set the bot to be private [OPTIONAL]
- Go to OAuth2 tab and check the scope "bot" and the permission "Send Messages"
- Open the generated URL in a browser and add the bot to your server

## Getting channel id
- Open your discord preferences
- Go to Appearance and enable Developer Mode
- Exit the preferences and right click on a text channel
- Copy ID

## Make the bot work
- Go to Roles tab in your specific text-channel settings
- Add your discord app and allow it to send messages


