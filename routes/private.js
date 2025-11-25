import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;


const router = express.Router();
const prisma = new PrismaClient();

router.get('/listar-usuarios', async (req, res)=> {
    try {

        const user = await prisma.user.findMany()
        res.status(200).json ({ message: 'Usuários listados com sucesso', users })

    }
    catch(err){
        console.log (err)
        res.status(500).json({ message: 'Falha no servidor'})
    }
})

export default router;
