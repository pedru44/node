const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { peca, quantidadeMinima, quantidadeMaxima } = req.body

    const estoqueMedio = (Number(quantidadeMinima)) + (Number(quantidadeMaxima)) / 2

    res.json({ peca, estoqueMedio })

})

router.post('/ex2', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body
    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos

    res.json({ nome, salarioBruto, bonificacaoFilhos })
})

router.post('/ex3', function (req, res) {

    const { idadeAnos, idadeMeses, idadeDias } = req.body
    const anosConvertido = idadeAnos * 365
    const mesesConvertido = idadeMeses * 30

    const total = (Number(anosConvertido)) + (Number(mesesConvertido)) + (Number(idadeDias))

    res.json({ total })
})

router.post('/ex4', function (req, res) {


    let idade = req.body.idade

    let idadeAnos = idade / 365 | 0;
    idade -= idadeAnos * 365;
    let idadeMeses = idade / 30 | 0;
    idade -= idadeMeses * 30;

    const idadeDias = idade

    res.json({ idadeAnos, idadeMeses, idadeDias })
})

router.post('/ex5', function (req, res) {

    const { nota1, nota2, nota3 } = req.body

    mediaPonderada = (Number(nota1 * 2) + Number(nota2 * 3) + Number(nota3 * 5)) / 10

    res.json({ mediaPonderada })
})

router.post('/ex6', function (req, res) {

    let evento = req.body.evento

    let horas = evento / 3600 | 0
    evento %= 3600;
    let minutos = evento / 60 | 0

    const segundos = evento % 60

    res.json({ horas, minutos, segundos })
})

router.post('/ex7', function (req, res) {

    const { nome, salario, vendasTotal, percentual } = req.body

    const salarioTotal = (vendasTotal * percentual / 100) + Number(salario)

    res.json({ nome, salarioTotal })
})

router.post('/ex8', function (req, res) {

    const { nome, distanciaPercorrida, tempoHoras } = req.body

    const velocidadeMedia = distanciaPercorrida / tempoHoras

    const mensagem =
        `A velocidade média de ${nome} 
    foi ${velocidadeMedia} km/h.`

    res.json({ mensagem })
})

router.post('/ex9', function (req, res) {

    const { salario, nome } = req.body

    let mensagem = {}

    if (salario > 1000) {
        mensagem = `O ${nome} não tem direito ao aumento`
    } else {
        const salarioFinal = Number(salario) + (Number(salario) * 30 / 100)
        mensagem = `O novo salário de ${nome} é ${salarioFinal}.`;
    }

    res.json({ mensagem })
})


module.exports = router

