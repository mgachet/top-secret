const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

require("./routes/api-routes.js")(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))