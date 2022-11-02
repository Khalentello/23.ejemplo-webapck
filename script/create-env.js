const fs = require("fs"); //file system, modulo de node que permite trabajar con el sistema operativo para guardar o enviar datos

fs.writeFileSync("./.env", "API= ${process.env.api}\n");
