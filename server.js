const express = require('express');
const fs = require('fs');
const path = require('path');\

const util = require('util');

const app = express();
const htmlroutes = require('.routes/htmlroutes');
const port = process.env.PORT || 3001;
const apiroutes = require('.routes/apiroutes');