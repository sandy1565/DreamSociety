const db = require('../config/db.config.js');
const config = require('../config/config.js');

const City = db.city;

exports.create = (req,res) => {
    console.log("creating city");

    City.create({
        name:req.body.name
    }).then(city =>{
        res.json({message:"City added successfully!",city:city});
    }).catch(err => {
    res.status(500).send("Fail! Error -> " + err);
})
}

exports.get = (req, res) => {
    City.findAll()
      .then(cities => {
        res.json(cities);
      });
    }

exports.getById = (req,res) => {
   City.findOne({
       where: {id: req.userId},
   }).then(city => {
    res.status(200).json({
        "description": "City Content Page",
        "city": city
    });
}).catch(err => {
    res.status(500).json({
        "description": "Can not city Page",
        "error": err
    });
})
}

exports.update = (req,res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    City.find({
        where: { id: id }
      })
      .then(city => {
        return city.updateAttributes(updates)
      })
      .then(updatedCity => {
        res.json({message:"City updated successfully!",updatedCity:updatedCity});
      });
}

exports.delete = (req,res) => {
    const id = req.params.id;
    City.destroy({
      where: { id: id }
    })
      .then(deletedCity => {
        res.json({message:"City deleted successfully!",deletedCity:deletedCity});
      });
}


