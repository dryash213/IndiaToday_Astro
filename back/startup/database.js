const mongoose = require('mongoose');

module.exports = function () {
    //fixing all deprecationWarning of mongoDB
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    function connectWithRetry() {
        mongoose.connect("mongodb+srv://FinBookDB:finbook@cluster0.dnxrq.mongodb.net/test",
            { dbName: 'FinBook', useNewUrlParser: true })
            .then(() => {
                console.log("connected to mongo");
            })
            .catch((err) => { console.log("Error connecting to mongo", err); setTimeout(connectWithRetry, 5000); });
    }
    connectWithRetry();
}