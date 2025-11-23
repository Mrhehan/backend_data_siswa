const express = require('express'); //import express
const cors = require('cors'); //import cors package

const app = express();

// import routes
const siswaRoutes = require('./src/routes/siswaRoutes')

app.use(cors()); //aktifkan cors (default: semua orgin diperbolehkan)

app.use(express.json()) //parse json body

// prefix api
app.use('/api/siswa', siswaRoutes)

// health-check
app.get('/', (req, res) => {
    res.send("API berjalan")
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`);
});