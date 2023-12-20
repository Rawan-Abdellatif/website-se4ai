const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const updateForm = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("se4ai");

    const { id } = req.params; // Assuming the ID is in the request parameters

    // Check if the provided ID is a valid UUID
    if (!uuidv4(id)) {
      return res.status(400).json({ message: "Invalid form ID" });
    }

    const formDataUpdates = req.body; // Assuming the updates are in the request body

    // Update logic using the provided formDataUpdates
    const result = await db.collection("FormData").updateOne(
      { _id: id },
      { $set: formDataUpdates }
    );

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Form data updated successfully" });
    } else {
      res.status(404).json({ message: "Form data not found" });
    }
  } catch (error) {
    console.error("Error updating form data:", error);
    res.status(500).json({ message: "Error updating form data" });
  } 
};

module.exports = { updateForm };