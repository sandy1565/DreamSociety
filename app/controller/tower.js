const db = require('../config/db.config.js');
const config = require('../config/config.js');

const Tower = db.tower;

exports.create = (req,res) => {
    console.log("creating tower");

    Tower.create({
        towerName:req.body.towerName
    }).then(tower =>{
        res.json({message:"Tower added successfully!",tower:tower});
    }).catch(err => {
    res.status(500).send("Fail! Error -> " + err);
})
}

exports.get = (req, res) => {
    Tower.findAll()
      .then(tower => {
        res.json(tower);
      });
    }

exports.getById = (req,res) => {
    Tower.findOne({
       where: {id: req.userId},
   }).then(tower => {
    res.status(200).json({
        "description": "Tower Content Page",
        "tower": tower
    });
}).catch(err => {
    res.status(500).json({
        "description": "Can not tower Page",
        "error": err
    });
})
}

exports.update = (req,res) => {
    const id = req.params.id;
    if(!id){
        res.json("Please enter id");
    }
    const updates = req.body.updates;
    Tower.find({
        where: { towerId: id }
      })
      .then(tower => {
        return tower.updateAttributes(updates)
      })
      .then(updatedTower => {
        res.json({message:"Tower updated successfully!",updatedTower:updatedTower});
      });
}

exports.delete = (req,res) => {
    const id = req.params.id;
    if(!id){
        res.json("Please enter id");
    }
    Tower.destroy({
      where: { towerId: id }
    })
      .then(deletedTower => {
        res.json({message:"Tower deleted successfully!",deletedTower:deletedTower});
      });
}


