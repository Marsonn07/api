import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.get('/', (req, res) => {
    res.send('Servidor Express rodando com sucesso!');
});



console.log("Variáveis e App configurados.");

app.listen(3000, () => console.log("Servidor Rodando"));