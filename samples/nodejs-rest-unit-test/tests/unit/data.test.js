const blogs= require('../../src/models/data')

test('Test sample data array returned as blog array',()=>{
    expect(blogs.getBlogs()).toEqual([{"id":123,"title":"Sample Blog 1","author":"Aniket"},{"id":124,"title":"Sample Blog 2","author":"Jack"},{"id":125,"title":"Sample Blog 3","author":"John"},{"id":126,"title":"Sample Blog 4","author":"Aniket"},{"id":127,"title":"Sample Blog 5","author":"Aniket"},{"id":128,"title":"Sample Blog 6","author":"Aniket"}])
})

test('Test sample data array length',()=>{
    expect(blogs.getBlogs().length).toEqual(6)
})