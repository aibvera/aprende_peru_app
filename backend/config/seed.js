import { Categoria } from "../models/categorias.model.js";
import { Nivel } from "../models/niveles.model.js";
import { Descuento } from "../models/descuentos.model.js";
import { Usuario } from "../models/usuarios.model.js";
import bcrypt from "bcrypt";
import { BCRYPT_ROUNDS } from "./env.js";

export async function runSeeds() {
    try {
        // Datos iniciales
        const categories = [
            { category: "Programación" },
            { category: "Diseño" },
            { category: "Marketing" }
        ];

        const levels = [
            { level: "Básico" },
            { level: "Intermedio" },
            { level: "Avanzado" }
        ];

        const discounts = [
            { name: "Sin descuento", discount_pct: 0 },
            { name: "10% OFF", discount_pct: 0.1 },
            { name: "20% OFF", discount_pct: 0.2 }
        ];

        const hashedPassword = await bcrypt.hash("123456", BCRYPT_ROUNDS);
        const users = [
            { username: "abueno", password: hashedPassword, first_name: "Alejandro", last_name: "Bueno", email: "abueno@gmail.com", role: "admin" }
        ];

        // Inserta solo si está vacío
        if (await Categoria.count() === 0) await Categoria.bulkCreate(categories);
        if (await Nivel.count() === 0) await Nivel.bulkCreate(levels);
        if (await Descuento.count() === 0) await Descuento.bulkCreate(discounts);
        if (await Usuario.count() === 0) await Usuario.bulkCreate(users);
        console.log("✅ Datos sincronizados")

    } catch (error) {
        console.error("❌ Error en seeds:", error);
    }
}
