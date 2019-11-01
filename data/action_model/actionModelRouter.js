const router = require("express").Router();
router.use(require("./middleware"));
const db = require("../helpers/actionModel.js");


router.get("/:id", (req, res) => {
    db.get(req.params.id)
    .then(action => action ? res.status(200).json(action) : res.status(404).json({message: "action not found"}))
    .catch(() => res.status(500).json({message: "could "}))
});

router.post("/:project_id", (req, res) => {
    db.insert({project_id: req.params.project_id, ...req.body})
    .then(() => res.sendStatus(201))
    .catch(() => res.status(500).json({message: "could not insert information to database"}));
});

router.put("/:id", (req, res) => {
    db.update(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json({message: "could not update database information"}));
});

router.delete("/:id", (req, res) => {
    db.remove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json({message: "could not remove object from database"}));
});

module.exports = router;