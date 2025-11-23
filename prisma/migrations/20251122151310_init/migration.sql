-- CreateTable
CREATE TABLE `Siswa` (
    `kode_siswa` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_siswa` VARCHAR(191) NOT NULL,
    `alamat_siswa` VARCHAR(191) NOT NULL,
    `tgl_siswa` DATETIME(3) NOT NULL,
    `jurusan_siswa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kode_siswa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
