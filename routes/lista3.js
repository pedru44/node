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

router.post('/ex5', function (req, res) {

    const { idAluno, n1, n2, n3, mediaDosExercicios } = req.body;

    const mediaDeAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaDosExercicios) / 7;

    let conceito;
    if (mediaDeAproveitamento >= 9.0) {
        conceito = 'A';
    } else if (mediaDeAproveitamento >= 7.5) {
        conceito = 'B';
    } else if (mediaDeAproveitamento >= 6.0) {
        conceito = 'C';
    } else if (mediaDeAproveitamento >= 4.0) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    let mensagem;
    if (conceito === 'A' || conceito === 'B' || conceito === 'C') {
        mensagem = 'Aprovado!';
    } else {
        mensagem = 'Reprovado!';
    }

    res.json({ idAluno, n1, n2, n3, mediaDosExercicios, mediaDeAproveitamento, conceito, mensagem })
})

router.post('/ex6', function (req, res) {

    const { altura, sexo } = req.body;

    let pesoIdeal;

    if (sexo.toLowerCase() === "masculino") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toLowerCase() === "feminino") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return res.status(400).json({ error: 'Sexo inválido. Por favor, insira "masculino" ou "feminino". ' });
    }
    res.json({ pesoIdeal })
})

router.post('/ex7', function (req, res) {

    const { v1, v2, v3 } = req.body;

    const n1 = Number(v1);
    const n2 = Number(v2);
    const n3 = Number(v3);

    let somaDosMaiores;

    if (n1 > n2 && n1 > n3) {
        somaDosMaiores = n1 + Math.max(n2, n3);
    } else if (n2 > n1 && n2 > n3) {
        somaDosMaiores = n2 + Math.max(n1, n3);
    } else {
        somaDosMaiores = n3 + Math.max(n1, n2);
    }

    res.json({ somaDosMaiores })
})



module.exports = router
