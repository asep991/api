const express = require('express');
const router = express.Router();
const ProfileBusines = require('../models/Customer')



// Spesific Find ById

router.get('/:profileId', async (req, res) => {
    try {
        const profileBusines = await ProfileBusines.findById(req.params.profileId);
         res.json(profileBusines);
    } catch (err) {
         res.json({
             message : err
         });
    }
});


// Delete Post
router.delete('/:profileId', async (req, res) => {
try {
    const removedProfileBusines = await ProfileBusines.remove({_id : req.params.profileId});
     res.json({
         messaage : "data Berhasil Di Hapus",
         value : removedProfileBusines
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
        const updatedProfileBusines = await ProfileBusines.updateOne(
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
                cart : req.body.cart,
                profileBusines :req.body.profileBusines
            }}
            
        ); console.log(req.body)
         res.json({
             message : "Data Berhasil Di Update",
             value : updatedProfileBusines

         });
    } catch (err) {
        res.json({
            message :  "Data Yang Akan Di Update Tidak Valid",
            value : err
        });
    }
})



module.exports = router;