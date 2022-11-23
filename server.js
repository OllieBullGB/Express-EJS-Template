/**
 * 
 *  Filename: server.js
 * 
 *  Date: 17th November 2022
 * 
 *  Description: A file to create an instance of app.js
 *               and start running RoomFinder
 * 
 *  Version: v1.0 17/11/22,
 * 
 */

const app = require("./app");
const port = 8090;

app.listen(port, () => 
{
    console.info(`Server listening on port ${port}`);
})