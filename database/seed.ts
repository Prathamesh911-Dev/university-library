import ImageKit from 'imagekit';
import dummyBooks from '../dummybooks.json'
import { books } from './schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';

config({path: '.env.local'});
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({client:sql});

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
})
const UploadToImagekit = async (url: string, fileName: string, folder: string) => {
    try {
       const response = await imagekit.upload({
        file: url,
        fileName,
        folder,
       });
       return response.filePath;
    } catch (error) {
        console.error("Error uploading image to imagekit", error);
    }
} 
const seed =  async () => {
    console.log('seeding data...');

    try {
        for (const book of dummyBooks) {
            const cover = (await UploadToImagekit(
                book.cover,
                `${book.title}.jpg`,
                "/books/covers",
            )) as string;

            const video = (await UploadToImagekit(
                book.video,
                `${book.title}.mp4`,
                "/books/videos",
            )) as string;

            await db.insert(books).values({
                ...book,
                cover,
                video,
            })
        }
        console.log("Data seeded successfully!");
    } catch (error) {
        console.log('Error seeding data:', error);
        
    }
};

seed();