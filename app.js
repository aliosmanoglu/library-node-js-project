const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://aliguveli0:root@librarycluster.l2n3jbz.mongodb.net/`)
.catch((err) => {
    console.log(err);
});



const app = express();

//VIEW ENGINE
app.set('view engine','ejs');


const port = 3000;

app.listen(port,
    () => {
        console.log(`Sunucu ${port} portunda başlatılıd`);
})