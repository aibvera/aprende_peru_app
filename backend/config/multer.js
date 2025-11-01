import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Necesario en ESM para obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta donde se guardarán las imágenes
const uploadsPath = path.join(__dirname, '..', 'uploads', 'cursos');

// Crear la carpeta si no existe (con recursive para subcarpetas)
if (!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath, { recursive: true });
}

// Configuración de almacenamiento de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsPath); // Carpeta de destino
    },
    filename: (req, file, cb) => {
        // Evitar colisiones generando nombre único
        const ext = path.extname(file.originalname).toLowerCase();
        const baseName = path.basename(file.originalname, ext).replace(/\s+/g, '_');
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${baseName}_${uniqueSuffix}${ext}`);
    }
});

// Filtro para permitir solo imágenes específicas
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('Formato no permitido. Solo JPG o PNG'));
    }
    cb(null, true);
};

// Exportamos la instancia configurada
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // Máximo 2 MB
  }
});

export default upload;
