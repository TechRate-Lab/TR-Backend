import { app } from "./app";
import { port } from "./config/vars";


app.listen(3000, () => {
  console.log(`\u{1F680} Servidor rodando na porta ${port}`);
});
