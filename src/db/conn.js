const mongoose =  require('mongoose');

mongoose.connect("mongodb://localhost:27017/jujutsu", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful")
}).catch((e) => {
    console.log('Connection is not successful')
})