Rest API design principle
---------------------

Below are the list of design principles to follow while designing REST apis

1. Accept and respond with JSON
    - set Content-Type in the response header to application/json
    - The only exception is if we’re trying to send and receive files between client and server.

2. Use nouns instead of verbs in endpoint paths
    - we should create routes like 
        ```
        GET /blogs/ for getting news blogs. 
        POST /blogs/ is for adding a new blog 
        PUT /blogs/:id is for updating the blog with the given id. 
        DELETE /blogs/:id is for deleting an existing blog with the given ID.
        ```
3. Name collections with plural nouns
    - With the /blogs endpoint, we have the plural form for all endpoints

4. Nesting resources for hierarchical objects
    - if we want an endpoint to get the comments for a news blog, we should append the /comments path to the end of the /blogs path. This is assuming that we have comments as a child of an blog in our database

5. Handle errors gracefully and return standard error codes
    - You can use error code libraries e.g. https://www.npmjs.com/package/http-status-codes for nodejs

6. Allow filtering, sorting, and pagination

7. Maintain Good Security Practices - SSL/TLS for security

8. Cache data to improve performance
    - There are many kinds of caching solutions like Redis, in-memory caching ( apicache ), and more
 
9. Versioning our APIs















References
--------

1. https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
