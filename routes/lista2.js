const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) { 

    const {peca,quantidadeMinima,quantidadeMaxima} = req.body

    const estoqueMedio = (Number(quantidadeMinima)) + (Number(quantidadeMaxima)) / 2

    res.json({peca,estoqueMedio})

})

router.post('/ex2', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body
    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos

    res.json({ nome, salarioBruto, bonificacaoFilhos })
})

/* Faça um script que leia a idade de uma pessoa expressa em anos, meses e dias e
mostre-a expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. */

router.post('/ex3', function (req, res) { 

    const { idadeAnos, idadeMeses, idadeDias } = req.body
    const anosConvertido = idadeAnos * 365
    const mesesConvertido = idadeMeses * 30

    const total = (Number(anosConvertido)) + (Number(mesesConvertido)) + (Number(idadeDias))
    
    res.json({total})
})

module.exports = router

