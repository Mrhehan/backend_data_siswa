const express = require('express');
const router = express.Router();
const siswaController =  require('../controllers/siswaController');
const validationBodySiswa = require('../middleware/validation');

router.post('/', validationBodySiswa, siswaController.createSiswa);
router.get('/', siswaController.getAllSiswa);
router.get('/:id', siswaController.getAllSiswaById);
router.put('/:id', validationBodySiswa, siswaController.updateSiswa);
router.delete('/:id', siswaController.deleteSiswa);

// export router untuk dipakai di index.js
module.exports = router;