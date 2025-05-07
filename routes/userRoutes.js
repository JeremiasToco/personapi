const router = require('express').Router();
const User = require('../models/user')

router.post('/',async(req,res)=>{
    const {name, email, number} = req.body;

    try {
        await User.create({name, email ,number});
        res.status(201).json({msg:"Usuário criado com sucesso!"})
    } catch (error) {
        res.status(500).json({masg: error})
    }

});

router.get("/",async(req,res)=>{
    try {
        const users = await User.find();
        if(!users){
            res.status(404).json({msg: "Nenhum usuário encontrado!"})
            return
        }
        res.status(500).json(users);
    } catch (error) {
        res.status(500).json({msg: error});
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const findUser = await User.findOne({_id: id});
        if(!findUser){
            res.status(404).json({msg: "Usuário não encontrado!"})
            return
        }
        res.status(200).json({findUser})
    } catch (error) {
        res.status(500).json({msg: error});
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteUser = await User.findOneAndDelete({_id:id});
        if(!deleteUser){
            res.status(200).json({msg:"Não foi possível deletar este usuário!"})
            return
        }
        res.status(200).json({msg:"Usuário deletado com sucesso!"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const {name,email,number} = req.body;
        const userUpdate = await User.findByIdAndUpdate({_id:req.params.id},{name,email,number});
        
        if(!userUpdate){
            res.status(200).json({msg:"Não foi possível actualizar este usuário!"})
            return
        } 
        res.status(200).json({msg:"Usuário actualizado com sucesso!"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

module.exports = router;