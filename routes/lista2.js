const express = require('express')
const router = express.Router()

router.post('/ex2', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body
    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos

    res.json({ salarioBruto, bonificacaoFilhos })
})

module.exports = router

