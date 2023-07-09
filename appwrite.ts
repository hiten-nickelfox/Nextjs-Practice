import { Client, ID, Storage, Databases, Account } from "appwrite"

const client = new Client()
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APP_WRITE_PROJECT_ID!)

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)

export { account, databases, storage }
