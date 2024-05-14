import express from "express";
import Ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());

app.post("/process-video", (req, res) => {
    // Get path of input video file from the req body
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    // Error handling for when incorrect file path: input or output
    if(!inputFilePath){
        res.status(400).send("Bad Request: Missing input file path.")
    } else if(!outputFilePath){
        res.status(400).send("Bad Request: Missing output file path.")
    };

    // different outlooks on scaling, error and saving video. 
    Ffmpeg(inputFilePath)
    .outputOption("-vf", "scale=-1:360") //360p
    .on("end", () => {
        res.status(200).send("Processing Complete Successfully.")
    })
    .on("error", (err) => {
        console.log(`An error occurred: ${err.message}`);
        res.status(500).send(`Internal Server Error: ${err.message}`);
    })
    .save(outputFilePath);
});

// imp when we deploy but will use 3000 for dev proposes. 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(
`video ps lis at localhost:${port}`);
});
 