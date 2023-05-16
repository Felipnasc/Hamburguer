const express = require('express');
const cardapioModel = require('../model/cardapioModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE CARDAPIO(POST)*/
router.post('/cardapio/inserir', (req,res)=>{

    let nome_cardapio = req.body.nome_cardapio;
    
    cardapioModel.create(
        {nome_cardapio}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'CARDAPIO INSERIDA COM SUCESSO'
           });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});



/* ROTA DE SELEÇÃO DE CLIENTE(GET)*/
router.get('/cardapio/selecionar', (req,res)=>{
    
    cardapioModel.findAll()
    .then(
        (cardapios)=>{
            res.json(cardapios);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus:error
            });
        }
    );

});



/* ROTA DE ALTERAÇÃO DE CLIENTE(PUT)*/
router.put('/cardapio/alterar', (req,res)=>{

    let id = req.body.id;
    let nome_cardapio = req.body.nome_cardapio;

    cardapioModel.update(
        {nome_cardapio},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                mensageStatus:'CARDAPIO ALTERADO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});



/* ROTA DE EXCLUSÃO DE CLIENTE(DELETE)*/
router.delete('/cardapio/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    cardapioModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CARDAPIO EXCLUIDA COM SUCESSO'
               });
        })
   
});

module.exports = router;






