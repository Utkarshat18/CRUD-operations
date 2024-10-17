const express=require ("express");
const router=express.Router();

router.route('/').get((req,res)=>{
    res.send("Hello from server");
});

router.route('/').post((req,res)=>{
    res.send("Created contact");
});

router.route('/:id').get((res,req)=>{
    res.json({message : `get the contact with id ${req.params.id}`});
});

router.route('/:id').put((res,req)=>{
    res.send(`Update the contact with id ${req.params.id}`);
})
router.route('/:id').delete((res,req)=>{
    res.send(`delete the contact with id ${req.params.id}`);
})

module.exports= router;
