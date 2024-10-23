import path from "path";
import fs from "fs";
import sharp from "sharp";
import { fileURLToPath } from 'url';
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const findOrConvertPosterToWebP = async (posterUrl: string, movieId: string) => {
    const imageName = `${movieId}.webp`;
    const imagePath = path.join(__dirname, '../assets/images', imageName);

    if (fs.existsSync(imagePath)) return imageName;

    try {
        const imageBuffer = await getImageBuffer(posterUrl);

        const webpBuffer = await sharp(imageBuffer)
            .webp({ quality: 75, lossless: false })
            .toBuffer()

        await fs.promises.writeFile(imagePath, webpBuffer);

        return imageName
    } catch (error) {
        return '';
    }
}

const getImageBuffer = async (imageUrl: string) => {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    return Buffer.from(response.data);
};
