const express = require('express');
const router = express.Router();
const Profile = require('../models/Customer')

//  Create Data
router.post('/', async (req, res) => {
    const profile = new Profile({
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
        
    })
    // console.log(req.body)
    try {
        const saveprofile = await profile.save();
        res.json(
            {
            message : "Data Berhasil Di Submit",
            saveprofile
            }
        )
    } catch (err) {
         res.json({messaage: err});
    }
});

// Spesific Find ById

router.get('/:profileId', async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.profileId);
         res.json(profile);
    } catch (err) {
         res.json({
             message : err
         });
    }
});


// Delete Post
router.delete('/:profileId', async (req, res) => {
try {
    const removedProfile = await Profile.remove({_id : req.params.profileId});
     res.json({
         messaage : "data Berhasil Di Hapus",
         value : removedProfile
     });
} catch (err) {
     res.json({
         message :  "Data Yang Akan Di Hapus Tidak Valid",
         value : err
     });
}    
});

// Update Post profile

router.patch('/:profileId', async (req, res) => {
    try {
        const updatedProfile = await Profile.updateOne(
            {_id: req.params.profileId},
            { $set : {
                profile : {
                    username: req.body.profile.username,
                    firstName: req.body.profile.firstName,
                    lastName: req.body.profile.lastName,
                    imgName : req.body.profile.imgName,
                    status : req.body.profile.status
                },
                contact : {
                    noTlp : req.body.contact.noTlp,
                    email : req.body.contact.email,
                    alamat : req.body.contact.alamat
                },
                cart : req.body.cart
            }}
        );
         res.json({
             message : "Data Berhasil Di Update",
             value : updatedProfile

         });
    } catch (err) {
        res.json({
            message :  "Data Yang Akan Di Update Tidak Valid",
            value : err
        });
    }
})



module.exports = router;