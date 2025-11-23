// import prisma
const prisma = require('../config/utils');

// create
const createSiswa = async (req, res) => {
    try { // kode yang bisa menimbulkan error
        const { nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;
        const siswa = await prisma.siswa.create({
            data: { nama_siswa, alamat_siswa, tgl_siswa: new Date(tgl_siswa), jurusan_siswa }
        });
        return res.status(201).json(siswa);
    } catch (error) { // menangani error
        console.error(error)
        return res.status(400).json({ message: error.message })
    }
}

// read
const getAllSiswa = async (req, res) => {
    try {
        const siswa = await prisma.siswa.findMany({ // findMany untuk ambil byk data
            orderBy: { kode_siswa: 'desc' } // descending urutan dari besar ke kecil, asc sebaliknya
        });
        return res.json(siswa);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'internal server error' });
    }
}

// read byId
const getAllSiswaById = async (req, res) => {
    try {
        const kode_siswa = parseInt(req.params.id); // nilai string diubah number/int parseInt
        const siswa = await prisma.siswa.findUnique({ //ambil satu data berdasarkan id
            where: { kode_siswa } //kondisi pencarian
        });

        // jika tidak ada
        if(!siswa) return res.status(404).json({ message: 'siswa not found' });
        // kalo ada tampilkan siswa
        return res.json(siswa);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// update
const updateSiswa = async (req, res) => {
    try {
        const kode_siswa = parseInt(req.params.id);
        const { nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;

        const siswa = await prisma.siswa.update({
            where: { kode_siswa },
            data: { nama_siswa, alamat_siswa, tgl_siswa: new Date(tgl_siswa), jurusan_siswa }
        });
        return res.json(siswa)
    } catch (error) {
        console.error(error)
        if(error.code === 'P2025') { // P2025 adalah error code bawaan prisma
            return res.status(404).json({ message: 'siswa not found' });
        }
        return res.status(400).json({ message: error.message })
    }
}

// delete
const deleteSiswa = async (req, res) => {
    try {
        const kode_siswa = parseInt(req.params.id)
        await prisma.siswa.delete({
            where: { kode_siswa }
        });
        return res.json({ message: 'siswa deleted' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'internal server error' })
    }
}

module.exports = {
    createSiswa,
    getAllSiswa,
    getAllSiswaById,
    updateSiswa,
    deleteSiswa
}