"use server"

const { redirect } = require("next/navigation")
const { AsyncDatabase } = require("promised-sqlite3")

 export default async function updateUsername(formData) {
    console.log("updateUsername called" , formData )

    const username = formData.get('username')
    const id = formData.get('id')

    if ( !username || !id) {
        throw new Error('All Fields are required')
    }

    const db = await AsyncDatabase.open('./notes.db')
    await db.run('UPDATE users SET NAME = ? WHERE ID = ?', [username, id])
    redirect('/')
 }