import * as SQLite from "expo-sqlite"

export default async function DB (){

    const DB = await SQLite.openDatabaseAsync("BookSeller");

    await DB.createSessionAsync(`
        CREATE TABLE IF NOT EXISTS Book (
            id INTEGER PRIMARY KEY NOT NULL,
            Title TEXT NOT NULL, 
            Content TEXT,
            Image TEXT,
            Page INT,
         )`)
         
    return (
        <>

        </>
    )

}