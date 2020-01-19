const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all Items
//@ access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
});

//@route Post api/items
//@desc Create A Items
//@ access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name : req.body.name,
        price : req.body.price,
        screenSize : req.body.screenSize,
        rearCamera : req.body.rearCamera,
        frontCamera : req.body.frontCamera,
        imgUrl : req.body.imgUrl,
        fullName: req.body.fullName,
        ramSize:req.body.ramSize,
        battery:req.body.battery,
        descript:req.body.descript
    });

    newItem.save().then(item => res.json(item));
});

//@route Delete api/items/:id
//@desc Delate a Item
//@ access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(items => items.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});

module.exports = router;