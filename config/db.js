const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNECTIED".bgGreen);
    } catch (error) {
        console.log(`Unable to Connect ${error}`)
        process.exit() // stop the server
    }
}
module.exports = db