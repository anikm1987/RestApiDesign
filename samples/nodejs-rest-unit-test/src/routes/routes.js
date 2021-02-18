const express = require('express')
const router = express.Router()
const httpStatusCode=require('http-status-codes')
const data=require('../models/data')


const blogs=data.getBlogs();

router.get("/ping",(req,res)=>{
    res.json({message: 'pass!'});
});
// Blog example with filters based on query string
// pagination enabled

router.get("/blogs",(req,res)=>{
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

router.post("/blogs",(req,res)=>{
    // Add new blog
    
    res.json(req.body);
});

router.put("/blogs/:id",(req,res)=>{
    const {id}=req.params
    console.log(id)
    const blogIdExist=blogs.find(b=>b.id === parseInt(id))
    if (! blogIdExist){
        res.json(req.body);
    }
    // update blog based on id
    res.json(req.body)
});

router.delete("/blogs/:id",(req,res)=>{
    const {id}=req.params
    console.log(id)
    const blogIdExist=blogs.find(b=>b.id === parseInt(id))
    // delete blog based on id
    if (! blogIdExist){
        res.status(httpStatusCode.BAD_REQUEST).send({error: httpStatusCode.getReasonPhrase(httpStatusCode.BAD_REQUEST)});
    }
    res.json(blogs.filter(b=>b.id === parseInt(id)));
});

router.get("/blogs/:id/comments",(req,res)=>{
    const {id}=req.params
    const comments=[{user:"user1",comment:"User comment 1"},{user:"user2",comment:"User comment 2"}];
    res.json(comments)
});


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

module.exports=router;
