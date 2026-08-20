import express from "express";

import usuarioRoutes from "./routes/usuario.routes.js";
//import planosRoutes from "./routes/planos.routes.js";

const app = express();

app.use(express.json());

app.use("/", usuarioRoutes);
//app.use("/planos", planosRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("http://localhost:3000");
});
