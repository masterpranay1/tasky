// @ts-ignore
import { Client, Account, Storage, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64bc12af7f163a60df19");

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
