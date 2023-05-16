const express = require('express');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE CLIENTE(POST)*/
router.post('/cliente/inserir', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE CLIENTE(GET)*/
router.get('/cliente/selecionar', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE SELEÇÃO!');

})

/* ROTA DE ALTERAÇÃO DE CLIENTE(PUT)*/
router.put('/cliente/alterar', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE CLIENTE(DELETE)*/
router.delete('/cliente/excluir', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE DELETE!');

})

module.export = router;