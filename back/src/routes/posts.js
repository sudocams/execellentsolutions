const express = require('express')
const Posts = require('../model/posts')
const router = new express.Router()
const auth = require('../middlewares/check-auth')

router.post('/post', auth, async(req, res)=>{
    const post = new Posts({
        ...req.body,
        owner: req.user._id
    })
    try {
        await post.save()
        res.status(201).send(post)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/post', auth, async(req, res)=>{
    const pageSize = +req.query.pagesize;
    const currPage = +req.query.page;
    const postQuery = Posts.find();
    let fetchedPosts;
    
    if(pageSize && currPage){
        postQuery.skip(pageSize *(currPage -1)).limit(pageSize);
    }

    postQuery.find()
    .then((documents)=>{
        fetchedPosts = documents;
        return Posts.estimatedDocumentCount();
    })
    .then((count)=>{
        res.status(200).json({
            message: "posts fetched successfully",
            post:fetchedPosts,
            maxPosts:count,
        });
    })
    .catch((error)=>{
        res.status(500).json({message: "fetching failed"})
    })
})

router.get('/post/:id', auth, async (req, res)=>{
    const _id = req.params.id

    try {
        const post = await Posts.findOne({_id, owner: req.user._id})
        if(!post){
            return res.status(404).send()
        }
        res.send(post)
    } catch (error) {
        res.send(500).json({message: "post not found"})
    }
})

router.patch('/post/:id', auth, async(req, res)=>{
    const update = Object.keys(req.body)
    const allowedupdate = ['title','subject','instructions','file','cost','tutor']
    const isTaskOp = update.every((update)=> allowedupdate.includes(update))

    if(!isTaskOp){
        return res.status(400).json({message:'invalid operation'})
    }

    try {
        const post = await Posts.findOne({_id: req.params.id, owner: req.user._id})
        if(!post){
            return res.status(404).send()
        }
        update.forEach((update)=> post[update]=req.body[update]);
        await post.save()
        res.send(post);
    } catch (error) {
        res.status(400).json({message:"failed"})
    }
})

router.delete('/post/:id', auth, async (req, res)=>{
    try {
        const post = await Posts.findOneAndDelete({_id:req.params.id, owner: req.user._id})
        if(!post){
            res.status(404).send()
        }
        res.send(post)
    } catch (error) {
        res.status(500).json({message: "failed"})
    }
})

module.exports = router