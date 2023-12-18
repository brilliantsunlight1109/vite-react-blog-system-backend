const Stylist = require("../Models/Stylist");

module.exports.postCreateStylist = (req, res) => {
  Stylist.create(req.body)
    .then((data) => res.json({ message: "Stylist added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add Blog", error: err.message })
    );
};

module.exports.getAllStylist = (req, res) => {
  Stylist.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(404).json({ message: "Stylist not found", error: err.message })
    );
};

module.exports.getIdStylist = (req, res) => {
  const id = req.params.id;
  Stylist.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Stylist not found" });
      }
      res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error fetching Stylist", error: err.message });
    });
};

module.exports.putUpdateStylist = (req, res) => {
  Stylist.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "Stylist successfully", data }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to Stylist", error: err.message })
    );
};

module.exports.deleteStylist = (req, res) => {
  Stylist.findByIdAndDelete(req.params.id, req.body)
    .then((data) => res.json({ message: "Stylist deleted successfully", data }))
    .catch((err) => {
      res
        .status(404)
        .json({ message: "Stylist not found", error: err.message });
    });
};
