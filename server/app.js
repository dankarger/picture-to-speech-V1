const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const  app = express();
const PORT = process.env.PORT || 8080 ;
const pictureRoute = require('./route/picture.route')

let publicPath = path.join(__dirname, '../build')
if(PORT===8080){
    publicPath = path.join(__dirname, '../clientVanilla')
}
app.use(express.static(publicPath));
app.use(express.json());
app.use(cors());
app.use('/api',pictureRoute)


app.get('*', (req,res)=> {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})