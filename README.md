# DispatchPulse

A project to facilitate the business of sending merchants to the consumers. Shops can use it to ship merchants to customer. They can track the parcel or the vehicle that is carrying it. Also, customers can check the status of their goods. 

## Instructions

### running the project

```bash
# install the dependencies
yarn install

# run the tests
yarn test

# start the project
yarn start

# start the project in the test mode
yarn dev
```

### create the database

To create the database, uncomment these lines in the `app.js`. It is a simple solution instead of `sequelize migration`
```js
    // sequelize.sync({ force: true });
    // console.log("All models were synchronized successfully.");
```

### To test the routes with `CURL`

```bash
# Use curl with bash script on Windows

# Making a GET request:
curl http://localhost:3000/parcel

# Making a POST request with JSON data
curl -X POST -H "Content-Type: application/json" -d '{"name":"Item1"}' http://localhost:3000/parcel
```

## Development

This project uses EditorConfig to standardize text editor configuration. Visit https://editorconfig.org/ for more details.

This project uses ESLint.
