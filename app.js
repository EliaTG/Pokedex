const express = require("express");
const path = require("path")
const expressHbs = require("express-handlebars");
const {engine} = require("express-handlebars");
const sequelize = require("./util/database");
const multer = require('multer');
const { v4: uuidv4 } = require("uuid");

const Pokemons = require("./models/Pokemon");
const Regions = require("./models/Region");
const Types = require("./models/Type");
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
app.use("/images", express.static(path.join(__dirname, "images")));

const imageStorage = multer.diskStorage({
  destination: (req, filter, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}-${file.originalname}`);
  },
})
app.use(multer({ storage: imageStorage}).single("Image"));


const pokemonRouter = require('./routes/pokemon');
const regionRouter = require('./routes/region');
const typeRouter = require('./routes/type');

app.use(pokemonRouter);
app.use(regionRouter);
app.use(typeRouter);
app.use(ErrorController.Get404);

Pokemons.belongsTo(Regions, { constraint: true,  onDelete: "CASCADE"});
Regions.hasMany(Pokemons);

Pokemons.belongsTo(Types, { constraint: true,  onDelete: "CASCADE"});
Types.hasMany(Pokemons);


sequelize.sync().then(result=>{
    app.listen(5065);
  }).catch(err =>{
      console.log(err);
  })


