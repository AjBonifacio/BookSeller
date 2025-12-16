import * as SQLite from "expo-sqlite"

export async function DB (){

    const DB = await SQLite.openDatabaseAsync("BookSeller");

    try {
        await DB.createSessionAsync(`
            CREATE TABLE IF NOT EXISTS Book (
                IdBook INTEGER PRIMARY KEY NOT NULL,
                Title TEXT NOT NULL, 
                Content TEXT,
                Page INTEGER
            );

            CREATE TABLE IF NOT EXISTS Category (
                idCategory INTEGER PRIMARY KEY NOT NULL,
                Name TEXT NOT NULL,
                Description TEXT
            );

            CREATE TABLE IF NOT EXISTS Category_Book (
                IdcategoryBook INTEGER PRIMARY KEY NOT NULL,
                IdBook INTEGER FOREIGN KEY REFERENCES Book(IdBook),
                IdCategory INTEGER FOREIGN KEY REFERENCES Category(IdCategory)
            );

            CREATE TABLE IF NOT EXISTS IMAGEN (
                IdImagen INTEGER PRIMARY KEY NOT NULL,
                IdBook INTEGER FOREIGN KEY REFERENCES Book(IdBook),
                Image TEXT NOT NULL
            );
            
         `)
    } catch (error) {
        console.log("Error creating tables: ", error);
    }
    
}