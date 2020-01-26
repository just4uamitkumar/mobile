const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/Items');

//
const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect Mongo 
mongoose
.connect(db)
.then(() => console.log('Mongo DB Connected...'))
.catch(err => console.log(err));


//Use Routes
app.use('/api/items', items);

//Serve Static assets if in production
if (process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



//To Run   npm run server
//To Run npm run dev

//https://storage.needpix.com/rsynced_images/iphone-37856_1280.png

//https://cdn.pixabay.com/photo/2017/07/02/16/56/iphone-2464968_960_720.png

//https://storage.needpix.com/rsynced_images/iphone-2468714_1280.png

//https://upload.wikimedia.org/wikipedia/commons/a/ac/Nexus_5_Front_View.png

//https://cdn.pixabay.com/photo/2016/10/05/17/11/smartphone-1717163_960_720.png


//https://tranquil-temple-54770.herokuapp.com/
