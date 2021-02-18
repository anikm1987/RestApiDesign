Nodejs REST sample using Express framework
----------------

Sample repository to demonstrate basic functionalities. All functionalities are not implemented.

Features
---------
1. Pattern of rest endpoints
2. Filtering, ordering and pagination for response data
3. Use of caching using apicache


Pre-requisites
--------------
1. Node is installed

Getting Started
--------------
You can create your own repository by forking this repository. Made neccessary changes according to your project name for below comand

1. Clone the repo
  ```
  $ git clone https://github.com/anikm1987/RestApiDesign.git
  $ cd RestApiDesign/samples/nodejs-rest
  ```
2. Steps
```
npm install
npm run dev
```

3. Test your apis
```
curl --header "Content-Type: application/json" \
  --request GET \
  --data '{"message":"Hello Aniket"}' \
  http://localhost:3000/

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"message":"Hello Aniket"}' \
  http://localhost:3000/

curl "http://localhost:3000/blogs?sortBy=author&orderBy=desc"

curl "http://localhost:3000/blogs?author=Aniket&limit=1&page=4"
```

Unit Test
--------
Unit testing is the implementation of TDD to individual function or unit of an application. Jest is used in the examples. 

#### Why Jest?
1. It is easy to setup (npm install --save-dev jest)
2. The watch-mode is amazing
3. add tests scripts to your package.json file
  ```
  "scripts": {
      "test": "jest --coverage",
      "test:watch": "jest --watch",
      "dev": "nodemon index.js"
    },
  ```

4. Write your test files in one of the following formats. Jest picks them up automatically.
  - js files in the __tests__ folder
  - files named with test.js (like app.test.js)
  - files named with spec.js (like app.spec.js)

5. npm run test


Linting and commitzen
----------------------
npm install husky --save-dev
npm i -D husky pretty-quick
npm install --save-dev @commitlint/config-conventional @commitlint/cli
npm install lint-staged --save-dev
npm install prettier --save-dev 
