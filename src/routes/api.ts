import { Router } from 'express'

//Importar o apiController

import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/ping',apiController.ping)

/* Nossa api vai esperar uma requisição GET para /ping e quando eu executar /ping ele
vai retornar um objeto pong como true */

//Gerando um número aleatório
router.get('/random',apiController.random)

router.get('/nome/:nome',apiController.nome)

//Criando endpoint frases
router.post('/frases',apiController.createPhrase)

//Essa rota será apenas para ler a frase (ela é semelhante ao POST)
router.get('/frases',apiController.listPhrase)

//Pegando uma frase específica
router.get('/frases/:id',apiController.getPhrase)

//Criar a rota para atualizar a frase
router.put('/frases/:id',apiController.updatePhrase)

//Criando a rota para deletar uma frase
router.delete('/frases/:id',apiController.deletePhrase)

export default router