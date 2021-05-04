import mongoose, { ConnectionOptions } from 'mongoose'

(async () => {
    try {
        const mongooseOption: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db =  await mongoose.connect('mongodb+srv://SergioTellez:thestrokes@cluster0.jmumd.mongodb.net/carsdb?retryWrites=true&w=majority', mongooseOption);
        console.log('Database is connected to: ', db.connection.name)
    } catch (e) {
        console.log(e)
    }

})()