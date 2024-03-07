const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Rota Principal')
})
app.get('/hello', function (req, res) {
    res.send('Chegou a resposta')
})
app.get('/nome', function (req, res) {
    res.send('Pedro')
})

app.get('/lista1/ex1', function (req, res) {

    const n1 = 10
    const n2 = 5
    const n3 = 8
    const n4 = 7

    const media = (n1 + n2 + n3 + n4) / 4

    if (media > + 10) {
        console.log("Nenhuma nota pode passar de 10")
    }
    else if (media >= 7) {
        console.log("Aprovado")
    } else if (media >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
    res.send('Lista 1 --> Ex1')
})

app.get('/lista1/ex2', function (req, res) {

    const total = 400
    const brancos = 100
    const nulos = 100
    const validos = 200

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {
        let retorno = {
            codigo : 'SOMA_ELEITORES',
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

    res.json({resposta: 'Lista 2 --> Ex2'})
})

app.listen(3000, function () {
    console.log('Server Up port 3000')
})

