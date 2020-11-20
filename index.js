const { mongoose } = require('./database');

const express = require('express');
const app = express();


// Settings
app.set('port', process.env.PORT || 4000)

app.use(express.json())


// Routes
const userController = require('./controller/user.controller');

app.get('/user/', userController.getUsers);
app.get('/user/:id', userController.getUser);
app.post('/user/', userController.createUser);
app.put('/user/:id', userController.updateUser);
app.delete('/user/:id', userController.deleteUser);

app.listen(app.get('port'), () => {
    console.log("server init on", app.get('port'));
});