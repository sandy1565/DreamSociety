const db = require('../config/db.config.js');
const config = require('../config/config.js');

const Service = db.service;

exports.create = (req,res) => {
    let body = req.body;
    console.log("creating service");
    if(!body.serviceName || !body.service_detail){
        res.json({message:"Parameters Missing"})
    }
    Service.create({
        serviceName:req.body.serviceName,
        service_detail:req.body.service_detail,
    }).then(service =>{
        res.json({message:"Service added successfully!",service:service});
    }).catch(err => {
    res.status(500).send("Fail! Error -> " + err);
})
}

exports.get = (req, res) => {
    Service.findAll()
      .then(service => {
        res.json(service);
      });
    }

exports.getById = (req,res) => {
   Service.findOne({
       where: {id: req.userId},
   }).then(service => {
    res.status(200).json({
        "description": "Service Content Page",
        "service": service
    });
}).catch(err => {
    res.status(500).json({
        "description": "Can not service Page",
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
    Service.find({
        where: { serviceId: id }
      })
      .then(service => {
        return service.updateAttributes(updates)
      })
      .then(updatedService => {
        res.json({message:"Service updated successfully!",updatedService:updatedService});
      });
}

exports.delete = (req,res) => {
    const id = req.params.id;
    if(!id){
        res.json("Please enter id");
    }
    Service.destroy({
      where: { serviceId: id }
    })
      .then(deletedService => {
        res.json({message:"Service deleted successfully!",deletedService:deletedService});
      });
}


