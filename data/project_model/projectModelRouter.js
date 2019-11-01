const router = require("express").Router();
const db = require("../helpers/projectModel.js");

router.use(require("./middleware"));

router.get("/:id", (req, res) => {
    db.get(req.params.id)
    .then(project => project ? res.status(200).json(project) : res.status(404).json({message: "project not found"}))
    .catch(() => res.status(500).json({message: "could not retrieve project information"}));
})

router.put("/:id", (req, res) => {
    db.update(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json({message: "could not update project"}));
});

router.post("/", (req, res) => {
    db.insert(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.status(500).json({message: "could not add project to database"}));
})

router.delete("/:id", (req, res) => {
    db.remove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json({message: "could not delete post"}));
})

module.exports = router;