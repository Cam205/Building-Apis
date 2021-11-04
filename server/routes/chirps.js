const express = require('express');
const chirpStore = require('../chirpstore.js');
const router = express.Router();

// Gets all chirps
router.get('/:id?', (req, res) => {
    const id = req.params.id
    if(id) {
        res.json(chirpStore.GetChirp(id))
    } else {
        res.send(chirpStore.GetChirps())
    }
});


// Creates a chirp
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})

// PUT a specific chirp 
router.put("/:id", (req, res) => {
    const id = req.params.id;
    chirpstore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

// DELETE a specific chirp
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.sendStatus(200);
});


module.exports = router;