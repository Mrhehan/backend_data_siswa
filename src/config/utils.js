const { PrismaClient } = require('@prisma/client');
//import class PrismaClient dari package @prisma/client (generator pada prisma/schema.prisma membuat package ini)

const prisma = new PrismaClient();
//inisialisasi instance prisma yg terhubung ke DB sesuai DATABASE_URL.

module.exports = prisma;
// export instance agar file lain (controller) bisa require('../config/utils') dan memakai prisma