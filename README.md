In this test task, we want to check the basic frontend skills of our candidates. You must create an app allowing users to make their grocery lists. 

Here are user stories that should be covered:

As a user, I can view my grocery list
As a user, I can add, edit, and delete items to my grocery list
As a user, I can add an amount to each item in the list
As a user, I can mark an item as bought. This will cross out the title and mark the checkbox as checked.

Technical requirements:

For this task, we want you to use React Native
Layouts are not strict, but the app should look good. Use Gluestack (https://v1.gluestack.io/ui/docs/home/overview/introduction) for it.
Pay attention how to work with styles in Gluestack.
Please use JSON-server (https://www.npmjs.com/package/json-server) and React query (https://tanstack.com/query/latest/docs/react/quick-start) to mock an API integration
Push your code to the git repo and share a link with the finished project

Not required, but it will be a benefit

Multiple build variants for Staging and Production
Any additional functionality

What we can do:
- remove json-server libs and remove db.json from mobile app
- add light and dark theme support
- update all text to use translations
- add splash screen during inital open to make requests and cache results
- add response type for all requests in react-query
- migrate eslint to v9


How to run and app?
```
yarn install
npx json-server db.json
npx react-native run-andoid
npx react-native start
```
