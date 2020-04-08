const express = require('express');
const app = express();

app.get('/api/bookings', (req, res) => {
    res.json( {message: "Hello"})
})

app.listen(3000)
// const cors = require('cors');
// app.use(cors);

// app.listen(3000, function () {
//   console.log(`Listening on port ${ this.address().port }`);
// });