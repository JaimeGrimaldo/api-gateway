/* const path = require('path');
const gateway = require('express-gateway'); */
import path from "path";
import gateway from "express-gateway";
import { fileURLToPath } from "url";
import "./alumnos.js";
import "./materias.js";

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const union = path.join(CURRENT_DIR, "/config");
console.log(CURRENT_DIR, " dirname", union);

gateway().load(union).run();
