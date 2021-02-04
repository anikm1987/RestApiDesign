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