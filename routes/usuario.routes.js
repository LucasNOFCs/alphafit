import express from "express";

const router = express.Router();

router.get("/usuarios", (req, res) => {
  res.json([
    {
      id: 1,
      name: "test",
    },
  ]);
});

//post methods

router.post("/usuarios", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "Usuário criado com sucesso",
    //usuario ou algo para retornar, exemplo: usuario: user (constante)
  });
});

//put methods

router.put("/usuario/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;

  res.json({
    message: "Usuário substituido com sucesso",
    id: id,
    usuario: user,
  });
});

// patch method

router.patch("/usuario/:id", (req, res) => {
  const id = req.params.id;
  const updateStatus = req.body;

  res.json({
    message: "Usuário atualizado com sucesso",
    id: id,
    alterations: updateStatus,
  });
});

// delete method

router.delete("/usuario/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: "Usuário deletado.",
    id: id,
  });
});

export default router;
