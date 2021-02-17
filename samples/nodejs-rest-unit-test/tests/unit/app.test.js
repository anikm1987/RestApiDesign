const app=require('../../index')
const supertest = require("supertest"); // supertest is a framework that allows to easily test web apis
const request = supertest(app)

// to make it fail change pass to alive
it('/ping - gets the ping endpoint', async done => {
    const response = await request.get('/ping')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
})


test('/blogs get - returns all array values',async done=>{
    const { body } = await request.get("/blogs");
    expect(body).toEqual([{"id":123,"title":"Sample Blog 1","author":"Aniket"},{"id":124,"title":"Sample Blog 2","author":"Jack"},{"id":125,"title":"Sample Blog 3","author":"John"},{"id":126,"title":"Sample Blog 4","author":"Aniket"},{"id":127,"title":"Sample Blog 5","author":"Aniket"},{"id":128,"title":"Sample Blog 6","author":"Aniket"}])
    done() 
})

test('/blogs get - return first 5 records',async done=>{
    const { body } = await request.get("/blogs?limit=5&page=1");
    expect(body.length).toBeLessThanOrEqual(5)
    done()
})

test('/blogs get - return first 5 records',async done=>{
    const { body } = await request.get("/blogs?limit=3&page=2");
    expect(body.length).toBeLessThanOrEqual(5)
    done()
})