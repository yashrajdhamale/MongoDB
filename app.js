const { MongoClient } = require("mongodb")

const client = new MongoClient("mongodb+srv://yash:yash@myatlasclusteredu.ca2cn.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU");
//connect to database
const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to database ${dbname}`);
    } catch (error) {
        console.log(`Error Connecting ERR ${error}`);
    }
}

const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)


const sampleAccount = {
    account_holder: "Linus Torvalds",
    account_id: "MDB829001337",
    account_type: "checking",
    balance: 50352434,
}

const main = async () => {
    try {
        await connectToDatabase()
        // insertOne method is used here to insert the sampleAccount document
        let result = await accountsCollection.insertOne(sampleAccount)
        console.log(`Inserted document: ${result.insertedId}`)
    } catch (err) {
        console.error(`Error inserting document: ${err}`)
    } finally {
        await client.close()
    }
}

main()