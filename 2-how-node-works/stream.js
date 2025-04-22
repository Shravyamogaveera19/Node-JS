const fs = require('fs');
const server = require("http").createServer();

server.on("request",(req,res) =>{
    //Solution 1
    // fs.readFile("testfile.txt",(err,data) =>{
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    //Solution 2 Using streams
    // const readable = fs.createReadStream("testfile.txt");
    // readable.on("data", chunk =>{
    //     res.write(chunk);
    // });
    // readable.on("end", () =>{
    //     res.end();
    // });
    // readable.on("error", err =>{
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File not Found!");
    // });

    //Solution 3
    const readable = fs.createReadStream("testfile.txt");
    readable.pipe(res);
    //readableSource.pipe(writableDest)
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for Requests...");
  });
  