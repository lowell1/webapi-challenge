const db = require("../helpers/actionModel.js");

module.exports = [
    // (req, res, next) => {
    //     if(req.method !== "POST") {
    //         console.log("req.params",req.url)
    //         db.get(req.params.id)
    //         .then(action => action ? req.body.action = action && next() : res.status(404).json({message: "id not found in database"}))
    //         .catch(() => res.status(500).json({message: "could not retrieve database information"}));
    //     } else {
    //         next();
    //     }
    // },
    (req, res, next) => {
        if(req.method === "POST" || req.method === "PUT") {
            if(req.body.description && req.body.name)
                next();
            else
                res.status(400).json({message: "missing description or name"});
        } else {
            next();
        }
    }
]