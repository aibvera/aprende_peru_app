import connectMongoDB from "../config/mongoose.js";
import bcrypt from "bcrypt";
import { Usuario } from "../models/usuarios.model.js"; // tu modelo Mongoose
import * as sSeguridad from "../services/seguridad.service.js";
import { generateRefreshToken } from "../config/jwt.js"

const crearUsuario = async () => {
    await connectMongoDB();

    const passwordPlano = "admin";
    const hash = await bcrypt.hash(passwordPlano, 10);

    const nuevoUsuario = new Usuario({
        username: "admin",
        password: hash,
        first_name: "El",
        last_name: "Admin",
        email: "admin@admin.com",
        role: "admin"
    });

    await nuevoUsuario.save();

    const user = await sSeguridad.serv_login("admin", "admin");
    const tokenPayload = {
        username: user.username,
        role: user.role
    };
    const userIdString = user._id.toString();
    const refreshToken = generateRefreshToken(tokenPayload);
    await sSeguridad.serv_updateRefreshTokenById(userIdString, refreshToken)

    const newUser = await Usuario.findOne({ username: "admin" }, { password: 0 }).lean();
    console.log("Usuario creado:", newUser);
    process.exit();
};

crearUsuario();
