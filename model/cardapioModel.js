/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CARDAPIOS
PARAMETROS:
*/
const cardapio = connection.define(
    'tbl_cardapio',
    {
        nome_cardapio:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//cardapio.sync({force:true});

module.exports = cardapio;

