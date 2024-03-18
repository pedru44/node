const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const salario = req.body.salario
    let salarioFinal = {}

    if (salario > 2000) {
        salarioFinal = Number(salario) + (Number(salario) * 50 / 100)
    } else {
        salarioFinal = Number(salario) + (Number(salario) * 30 / 100)
    }

    res.json({ salarioFinal })

})

router.post('/ex2', function (req, res) {

    const { numero1, numero2, numero3 } = req.body

    let maior = numero1

    if (numero2 > maior) {
        maior = numero2
    }

    if (numero3 > maior) {
        maior = numero3
    }

    const mensagem = `O maior número é ${maior}`

    res.json({ mensagem })
})

router.post('/ex3', function (req, res) {

    const { pessoas, chopp, pizza, cobertura } = req.body

    const valorChopp = chopp * 4.80;
    const valorPizza = pizza * 17.00;
    const valorCobertura = cobertura * 1.50;

    const total = (Number(valorChopp) + Number(valorPizza) + Number(valorCobertura));
    const final = Number(total) + (Number(total) * 10 / 100)

    const totalPorPessoa = final / pessoas

    res.json({ totalPorPessoa })
})

router.post('/ex4', function (req, res) {

    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body

    const valorHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valorHoraTrabalhada * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente

    let imposto = 0

    if (salarioBruto > 2000) {
        imposto = salarioBruto >= 5000 ?
            salarioBruto * 0.2 :
            salarioBruto * 0.1
    }

    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioLiquido < 3500 ? 1000 : 50
    const salarioReceber = salarioLiquido + gratificacao

    res.json({ salarioBruto, imposto, gratificacao, salarioReceber })

})

module.exports = router
