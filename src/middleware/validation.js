// Jalankan middleware validasi hanya untuk POST dan PUT, karena hanya method ini yang memakai body.
const validationBodySiswa = (req, res, next) => {
    let { nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;

    if( nama_siswa === undefined || alamat_siswa === undefined || tgl_siswa === undefined || jurusan_siswa === undefined) {
        res.status(400).json({ message: 'nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa is required' });
    } else {
        next();
    }
}

// export middleware untuk dipakai di route
module.exports = validationBodySiswa