// optimize-image.js
const sharp = require('sharp'); // llibreria per processar imatges
const fs = require('fs'); // treballa en el sistema d'arxius
const path = require('path'); // rutes d'arxius de forma segura

// Ruta d'entrada i exida
const inputDir = path.join(__dirname, 'img'); // on estan les imatges
const outputDir = path.join(__dirname, 'img/webp'); // on es guarden les imatges

// Crear la carpeta webp si no existeix
if (!fs.existsSync(outputDir)) { // verifiquem si la carpeta d'eixida existeix
    fs.mkdirSync(outputDir, { recursive: true }); // la crearà si no existeix
    console.log('📁 Carpeta img/webp creada.');
}

// Extensiones válidas a convertir
const validExtensions = ['.jpg', '.jpeg', '.png'];

// Llegir tots els arxius de la carpeta img/
fs.readdirSync(inputDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    // Si la extensió es vàlida
    if (validExtensions.includes(ext)) { // ruta d'entrada i exidad per a cada imatge
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${baseName}.webp`); // arxiu d'eixida .webp

        sharp(inputPath) // llegeix la imatge
            .webp({ quality: 20 }) // converteix a webp al 20% (80% de reducció aprox)
            .toFile(outputPath) // guarda a outputPath
            // mostrar si hi ha errades o si la conversió s'ha efectuat correctament
            .then(() => console.log(`✅ ${file} → ${baseName}.webp`))
            .catch(err => console.error(`❌ Error al convertir ${file}:`, err));
    }
});



