const express = require('express')
const path = require('path')
const routerAvatar = express.Router()
const getAvatar = require('../DB/query/get-img')




routerAvatar.get('/', (req, res) => {
    getAvatar()
});


