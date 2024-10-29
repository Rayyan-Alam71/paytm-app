const express = require('express');
const zod = require('zod')
const jwt = require('jsonwebtoken')
const router = express.Router();
const {User, Account} = require('../db');
const authMiddleware = require('../middleware')
const {JWT_SECRET} = require('../config')


const signupBody = zod.object({
    username:zod.string(),
    firstname : zod.string(),
    lastname : zod.string(),
    password : zod.string()
})

const signinBody = zod.object({
    username : zod.string(),
    password : zod.string()
})

const updateBody = zod.object({
    firstname : zod.string().optional(),
    lastname : zod.string().optional(),
    password : zod.string().optional(),

})
router.post('/signup', async (req,res)=>{
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg: 'Email already taken / Incorrect inputs'
        })
    }

    const userFound = await User.findOne({
        username : req.body.username
    })
    console.log(userFound)
    if(userFound){
        return res.status(411).json({
            msg : 'user with this credentials already exists'
        })
    }

    // const existingUser = await User.findOne({
    //     username: req.body.username
    // })
    
    // if (existingUser) {
    //     return res.status(411).json({
    //         message: "Email already taken/Incorrect inputs"
    //     })
    // }

    const user = await User.create({
        username : req.body.username,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        password : req.body.password
    })
    const userId = user._id;
    await Account.create({
        userId : userId,
        balance : Math.random()*(1000) + 1
    })
    const token = jwt.sign("rayyan", JWT_SECRET);

    res.status(200).json({
        msg : 'user created successfully',
        token : token
    })

})

router.post('/signin',async (req, res)=>{
    const {success} = signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg : 'details doesn`t match the schema'
        })
    }
    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(!user){
        return res.status(411).json({
            msg : 'User with this credentials doesn`t exist'
        })
    }
    const userId = user._id;
    const token = jwt.sign({userId}, JWT_SECRET);

    res.status(200).json({
        token : token
    })
})

router.put('/', authMiddleware, async (req,res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            msg : 'an error occurred'
        })
    }
    const userId = req.userId;
    await User.updateOne({_id : userId}, req.body )
    res.status(200).send('updated successfully');
})

router.get('/bulk', async (req, res)=>{
    const filter = req.query.filter || "";
    const users = await User.find({
        $or:[{
            firstname :{
                $regex : filter
            },
            lastname : {
                $regex : filter
            }
        }]

    })
    res.json({
        user: users.map(user =>({
            username:  user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id : user._id
        }))
    })

})

module.exports = router;