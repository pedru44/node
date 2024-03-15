const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) { 

    res.json(req.body)
    

    const numeros = req.body.notas

    /* for (i=0; i<numeros.length; i++){
        console.log(numeros[i]);
    } */

    /* for(let n in numeros){
        console.log('Valor de n é: ->' + n );
    }
 */
    let soma = 0
    for(let n of numeros){
         soma += n  

    }

    const media = soma / numeros.length

    res.json({media})
})

/* router.post('/ex8', function (req, res) { 

    let soma = 0
    for(let n of numeros){
        if(n<0){
            soma++
        }

    res.json({soma})
}) */

module.exports = router

