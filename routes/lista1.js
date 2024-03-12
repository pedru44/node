const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)

    const media = n1 + n2 + n3 + n4 / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({ media, mensagem })

})

router.post('/ex2', function (req, res) {

    res.json(req.body)

    const { total, brancos, nulos, validos } = req.body

    const soma = Number(brancos) + Number(nulos) + Number(validos)

    let retorno = {}
    if (soma > total) {
        let retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = {
            percBranco: percBranco,
            percNulos: percNulos,
            percValidos: percValidos,
        }

        res.status(200).json(retorno)

    }

})

router.post('/ex3', function (req, res) {


    const { salario, percentual } = req.body
    const aumento = (percentual / 100) * 100
    const novoSalario = Number(salario) + Number(aumento)

    res.json({ novoSalario })

})

router.post('/ex4', function (req, res) {

    const carro = Number(req.body.carro)
    const percentualDistribuidor = (28 / 100) * carro;
    const percentualImpostos = (45 / 100) * carro;
    const valorFinal = carro + percentualDistribuidor + percentualImpostos;

    res.json({ valorFinal })

})

router.post('/ex5', function (req, res) {

    const { carro, distribuidor, imposto } = req.body

    const valorDistribuidor = (distribuidor / 100) * carro;
    const valorImposto = (imposto / 100) * carro;
    const valorFinal = Number(carro) + Number(valorDistribuidor) + Number(valorImposto);

    res.json({ valorFinal })

})

router.post('/ex6', function (req, res) {

    const { salarioFixo, carros, comissao, vendas } = req.body

    const comissaoCarros = carros * comissao
    const comissaoVendas = (5 / 100) * vendas

    const total = Number(salarioFixo) + Number(comissaoCarros) + Number(comissaoVendas)

    res.json({ total })
})

router.post('/ex7', function (req, res) {

    const { n1, n2 } = req.body

    const mediaFinal = (n1 * 4 + n2 * 6) / 10

    res.json({ mediaFinal })
})

router.post('/ex8', function (req, res) {

    const { raio, altura } = req.body

    const raioQuadrado = raio * raio;
    const pi = 3.14;
    const volume = pi * raioQuadrado * altura;

    res.json({ volume })
})

router.post('/ex9', function (req, res) {

    const { n1, n2 } = req.body

    const soma = Number(n1) + Number(n2);

    const final = soma * n1;


    res.json({ final })
})

module.exports = router

