const db = require('../config/db.config.js');
const config = require('../config/config.js');

const Flat = db.flat;

exports.create = (req,res) => {
    console.log("creating flat");

    Flat.create({
        type:req.body.type,
        size:req.body.size
    }).then(flat =>{
        res.json({message:"Flat added successfully!",flat:flat});
    }).catch(err => {
    res.status(500).send("Fail! Error -> " + err);
})
}

exports.get = (req, res) => {
    Flat.findAll()
      .then(flat => {
        res.json(flat);
      });
    }

exports.getById = (req,res) => {
    Flat.findOne({
       where: {id: req.userId},
   }).then(flat => {
    res.status(200).json({
        "description": "Flat Content Page",
        "flat": flat
    });
}).catch(err => {
    res.status(500).json({
        "description": "Can not Flat Page",
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
    Flat.find({
        where: { flatId: id }
      })
      .then(flat => {
        return flat.updateAttributes(updates)
      })
      .then(updatedFlat => {
        res.json({message:"Flat updated successfully!",updatedFlat:updatedFlat});
      });
}

exports.delete = (req,res) => {
    const id = req.params.id;
    if(!id || id === undefined){
        res.json("Id missing");
    }
    Flat.destroy({
      where: { flatId: id }
    })
      .then(deletedFlat => {
        res.json({message:"Flat deleted successfully!",deletedFlat:deletedFlat});
      });
}


