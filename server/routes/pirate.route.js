const PirateController = require("../controllers/pirate.controller")

module.exports = (app) => {
    // CREATE
    app.post("/api/pirates", PirateController.createPirate);
    // READ ALL
    app.get("/api/pirates", PirateController.allPirates);
    // READ ONE
    app.get("/api/pirates/:pirate_id", PirateController.onePirate);
    // UPDATE
    app.put("/api/pirates/:pirate_id", PirateController.updatePirate);
    // DELETE
    app.delete("/api/pirates/:pirate_id", PirateController.deletePirate);
}