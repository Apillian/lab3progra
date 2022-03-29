import express from "express";
import bodyParser from "body-parser";
import placesRoutes from './routes/places-routes.js';

const port = 5001;
const app = express();
app.use(bodyParser.json());
app.use('/api/usuarios', placesRoutes )
app.use('/api/compras', placesRoutes )

app.listen(port);
