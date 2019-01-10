const db = require('../config/db.config.js');
const config = require('../config/config.js');

const Country = db.country;

exports.create = (req,res) => {
    console.log("creating city");

    Country.create({
        name:req.body.name
    }).then(country =>{
        res.json({message:"Country added successfully!",country:country});
    }).catch(err => {
    res.status(500).send("Fail! Error -> " + err);
})
}

exports.get = (req, res) => {
    Country.findAll()
      .then(country => {
        res.json(country);
      });
    }

exports.getById = (req,res) => {
    Country.findOne({
       where: {id: req.userId},
   }).then(country => {
    res.status(200).json({
        "description": "Country Content Page",
        "country": country
    });
}).catch(err => {
    res.status(500).json({
        "description": "Can not Country Page",
        "error": err
    });
})
}

exports.update = (req,res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    Country.find({
        where: { id: id }
      })
      .then(country => {
        return country.updateAttributes(updates)
      })
      .then(updatedCountry => {
        res.json({message:"Country updated successfully!",updatedCountry:updatedCountry});
      });
}

exports.delete = (req,res) => {
    const id = req.params.id;
    Country.destroy({
      where: { id: id }
    })
      .then(deletedCountry => {
        res.json({message:"Country deleted successfully!",deletedCountry:deletedCountry});
      });
}


