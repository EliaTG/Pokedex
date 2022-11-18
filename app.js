const express = require("express");
const path = require("path")
const expressHbs = require("express-handlebars");
const {engine} = require("express-handlebars");
const sequelize = require("./util/database");
const Pokemon = require("./models/Pokemon");
const Region = require("./models/Region");
const Type = require("./models/Type");
const app = express();

const ErrorController = require("./controllers/ErrorController")
const compareHelpers = require('./util/helpers/compare')


app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: 'hbs',
    helpers: {
        equalValue: compareHelpers.EqualValue,
      },
    },
))
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

const pokemonRouter = require('./routes/pokemon');
const regionRouter = require('./routes/region');
const typeRouter = require('./routes/type');

app.use(pokemonRouter);
app.use(regionRouter);
app.use(typeRouter);
app.use(ErrorController.Get404);


sequelize.sync().then(result=>{
    app.listen(5065);
  }).catch(err =>{
      console.log(err);
  })


