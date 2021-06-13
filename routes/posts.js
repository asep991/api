const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// get All Data
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
         res.json(posts);
    } catch (err) {
         res.json({message: err});
    }
});

//  Create Data
router.post('/', async (req, res) => {
    const post = new Post({
        profile : {
            username: req.body.profile.username,
            firstName: req.body.profile.firstName,
            lastName: req.body.profile.lastName
        },
        contact:{
            noTlp:req.body.contact.noTlp,
            email: req.body.contact.email,
            alamat: req.body.contact.alamat
        },
        jasa :req.body.jasa,
        keuangan : {
            pendapatan : req.body.keuangan.pendapatan,
            pengeluaran : req.body.keuangan.pengeluaran,
            saldo : req.body.keuangan.saldo
        }
        
    })
    // console.log(req.body)
    try {
        const savePost = await post.save();
        res.json(
            {
            message : "Data Berhasil Di Submit",
            savePost
            }
        )
    } catch (err) {
         res.json({messaage: err});
    }
});

// Spesific Find ById

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
         res.json(post);
    } catch (err) {
         res.json({
             message : err
         });
    }
});


// Delete Post
router.delete('/:postId', async (req, res) => {
try {
    const removedPost = await Post.remove({_id : req.params.postId});
     res.json({
         messaage : "data Berhasil Di Hapus",
         value : removedPost
     });
} catch (err) {
     res.json({
         message :  "Data Yang Akan Di Hapus Tidak Valid",
         value : err
     });
}    
});

// Update Post profile

router.patch('/profile/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set : {
                profile : {
                    username: req.body.profile.username,
                    firstName: req.body.profile.firstName,
                    lastName: req.body.profile.lastName
                }
            }}
        );
         res.json({
             message : "Data Berhasil Di Update",
             value : updatedPost

         });
    } catch (err) {
        res.json({
            message :  "Data Yang Akan Di Update Tidak Valid",
            value : err
        });
    }
})



module.exports = router;