const express = require('express');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE CLIENTE(POST)*/
router.post('/pedido/inserir', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE CLIENTE(GET)*/
router.get('/pedido/selecionar', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE SELEÇÃO!');

})

/* ROTA DE ALTERAÇÃO DE CLIENTE(PUT)*/
router.put('/pedido/alterar', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE CLIENTE(DELETE)*/
router.delete('/pedido/excluir', (req,res)=>{
    res.send('ROTA DE CARDAPIO DE DELETE!');

})
