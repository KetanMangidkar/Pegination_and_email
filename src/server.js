const app = require('./index');

const connect = require('./configs/db');

app.listen(9555,async () => {
    try {
        await connect();
        console.log("listing on port 9555");
    } catch (error) {
        console.log(error);
    }
})