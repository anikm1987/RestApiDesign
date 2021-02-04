const express=require('express');
const bodyParser=require('body-parser');
const httpStatusCode=require('http-status-codes')
const apiCache=require('apicache')

const app=express();
app.use(bodyParser.json());
// let cache=apiCache.options({
//     headers: {
//       'cache-control': 'no-cache',
//     },
//   }).middleware;
let cache=apiCache.middleware;
// cache all routes - https://www.npmjs.com/package/apicache
// higher-order function returns false for responses of other status codes (e.g. 403, 404, 500, etc)
const onlyStatus200 = (req, res) => res.statusCode === 200
app.use(cache('5 minutes',onlyStatus200));

// existing users
const blogs = [
    { id: 123, title:"Sample Blog 1", author:"Aniket" },
    { id: 124, title:"Sample Blog 2", author:"Jack" },
    { id: 125, title:"Sample Blog 3", author:"John" },
    { id: 126, title:"Sample Blog 4", author:"Aniket" },
    { id: 127, title:"Sample Blog 5", author:"Aniket" },
    { id: 128, title:"Sample Blog 6", author:"Aniket" },
  ];


app.get("/",(req,res)=>{
    res.status(httpStatusCode.OK).json(req.body.message);
});

app.post("/",(req,res)=>{
    res.json(req.body.message);
});

  
// Blog example with filters based on query string
// pagination enabled

app.get("/blogs",(req,res)=>{
    const { title, author , limit=20, page=1, sortBy="id", orderBy="asc" }=req.query;
    let results=[...blogs];
    if (title){
        results=results.filter(b=>b.title === title);
    }
    if (author){
        results=results.filter(b=>b.author === author);
    }
    if (page){
        const skip=(page -1) * limit
        results=results.slice(skip,(page*limit))
    }
    if (sortBy){
        if (orderBy === 'desc'){
            results=results.sort(getSortedValue(sortBy)).reverse()
        }
        else{
            results=results.sort(getSortedValue(sortBy))
        }
    }
    // Retrieve blogs from database
    res.json(results);
});

app.post("/blogs",(req,res)=>{
    // Add new blog
    
    res.json(req.body);
});

app.put("/blogs/:id",(req,res)=>{
    const {id}=req.params
    console.log(id)
    const blogIdExist=blogs.find(b=>b.id === parseInt(id))
    if (! blogIdExist){
        res.status(httpStatusCode.BAD_REQUEST).send({error: httpStatusCode.getReasonPhrase(httpStatusCode.BAD_REQUEST)
    });
    }
    // update blog based on id
    res.json(req.body)
});

app.delete("/blogs/:id",(req,res)=>{
    const {id}=req.params
    console.log(id)
    // delete blog based on id
    res.json(req.body)
});

app.get("/blogs/:id/comments",(req,res)=>{
    const {id}=req.params
    const comments=[{user:"user1",comment:"User comment 1"},{user:"user2",comment:"User comment 2"}];
    res.json(comments)
});


// Custom fumnctions

//Comparer Function    
function getSortedValue(attribute) {    
    return function(a, b) {    
        if (a[attribute] > b[attribute]) {    
            return 1;    
        } else if (a[attribute] < b[attribute]) {    
            return -1;    
        }    
        return 0;    
    }    
} 



app.listen(3000,()=>console.log("App started"));



