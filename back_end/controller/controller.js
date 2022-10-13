const Userdb = require('../model/model')

exports.create = (req,res)=>{
    if (Object.keys(req.body).length === 0) {
        res.status(204).send({message:"Content cannot be empty"})
        return
      }
    const user= new Userdb({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    })
    user.save(user)
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
        res.status(400).send({message:err})
    })
}

exports.findall = (req,res)=>{
    Userdb.find()
    .then(data=>{
        res.send(data)
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
        res.send("error while fetch")
    })
}

exports.update = async (req,res)=>{
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ message: "data to update empty" })
        return;
    }
    try{
        const id = req.params.id
        var data = await Userdb.findByIdAndUpdate(id,req.body,{ new: true})
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).send({ message: "error while update" })
    }
}

exports.delete =async (req,res)=>{
    try{
        const id = req.params.id
        var data = await Userdb.findByIdAndDelete(id)
        if(data==null) res.send("User doesn't exist")
        else res.json(data)
    }catch(err){
        console.log(err)
        res.status(400).send({ message: "error while update" })
    }
}

exports.find = async (req,res)=>{
    try{
        key=req.params.fname
        console.log(key)
        var data = await Userdb.find({fname : {'$regex': key, $options:'i'} } )
        if(data==null) res.send("User doesn't exist")
        else res.json(data)
    }catch(err){
        console.log(err)
        res.status(400).send({ message: "error while fetching" })
    }  
}

exports.login = (req,res)=>{
    console.log(req.body)
   console.log("hi")
}

exports.register = (req,res)=>{
    if (Object.keys(req.body).length === 0) {
        res.status(204).send({message:"Content cannot be empty"})
        return
      }
    const user= new Userdb({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    })
    user.save(user)
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
        res.status(400).send({message:err})
    })
}