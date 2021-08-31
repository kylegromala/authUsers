// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/login/static/index.html');
// });

// app.get("/login", (req, res) => {
//     res.sendFile(__dirname + '/login/static/login.html')
// });

// app.post("/login", async (req, res) => {
//     try{
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const user = { name: req.body.name, password: hashedPassword };
//         users.push(user)
//         res.status(201).send();
//     } catch {
//         res.status(500).send();
//     }
// });

// const port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`App is listening on port ${port}`));