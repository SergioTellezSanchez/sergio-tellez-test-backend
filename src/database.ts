import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'

(async () => {
    try {
        const mongooseOption: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db =  await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOption);
        console.log('Database is connected to: ', db.connection.name)
    } catch (e) {
        console.log(e)
    }

})()