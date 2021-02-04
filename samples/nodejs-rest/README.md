Nodejs REST sample using Express framework
----------------

Sample repository to demonstrate basic functionalities. All functionalities are not implemented.

Features
---------
1. Pattern of rest endpoints
2. Filtering, ordering and pagination for response data
3. Use of caching using apicache

Getting Started
--------------

### Pre-requisites
1. Node is installed

### Steps
```
npm init
npm run dev
```

### Test your apis

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
