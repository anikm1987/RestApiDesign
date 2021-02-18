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

test('/blogs get - return 2nd page 3 records',async done=>{
    const { body } = await request.get("/blogs?limit=3&page=2");
    expect(body.length).toBeLessThanOrEqual(5)
    done()
})


test('/blogs post - create new record',async done=>{
    const blog={ id: 129, title:"Sample Blog 7", author:"Aniket" }
    const { body } = await request.post("/blogs").send(blog);
    expect(body).toEqual({ id: 129, title:"Sample Blog 7", author:"Aniket" })
    done()
})


test('/blogs put - put new record',async done=>{
    const blog={ id: 129, title:"Sample Blog 8", author:"Aniket" }
    const { body } = await request.put("/blogs/129").send(blog);
    expect(body).toEqual({ id: 129, title:"Sample Blog 8", author:"Aniket" })
    done()
})


test('/blogs delete - data based on record id',async done=>{
    const { body } = await request.delete("/blogs/123");
    expect(body).toEqual([{ id: 123, title:"Sample Blog 1", author:"Aniket" }])
    done()
})