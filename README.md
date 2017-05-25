# simple-graphql-starter

A graphql starter kit that is NOT over the top & allows you to easily jump in and start extending!

What can you do with this? Go add your own auth middleware, customise it as much as you want without breaking modules that have been setup by the starter kit, etc... 

Contains:

- knex (you can swap this out easily as it's not being used anywhere in the app) - Contains migrations & seeds folder
- graphql


# Setup

1. yarn (install dependencies)
2. yarn dev (run server with nodemon)


## Other commands

- yarn update-schema (update the graphql schema when you make a change)
- yarn build (build for production) && yarn start

# Structure

- src/graphql - Place your graphql queries, types, mutations, and subscriptions in here.
- src/services - Create folders related to your business logic in here. E.g you could create a folder in there called `users` which has `database.js` & `controller.js` files. It helps keep things clean! 


### Notes

I will be updating this shortly

### TODO

- Document
- Add more stuff to starter kit