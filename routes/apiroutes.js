const router = require('express').Router();
const store = require('.db/store');
const fs = require('fs');
const savednote = JSON.parse(fs.readFileSync(".db/db.json"));

