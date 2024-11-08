import { Client } from "pg";



async function query(queryObject) {
  const client = new Client({
    host: process.env.DB_HOST,
    port: 4432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
  await client.connect()
  const result = await client.query(queryObject)
  await client.end()
  return result
}


export default {
  query: query
}