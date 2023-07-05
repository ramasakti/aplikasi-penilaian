const xlsx = require('xlsx')
const fs = require('fs')

const importing = (req, res) => {
    const file = req.file;
    const workbook = xlsx.readFile(file.path);
  
    // Mendapatkan nama sheet yang diinginkan
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
  
    // Mengubah data sheet menjadi bentuk JSON
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
  
    // Lakukan pemrosesan data sesuai kebutuhan Anda
    // ...
    
    // Hapus file yang diunggah setelah selesai diproses
    fs.unlinkSync(file.path);
  
    res.send(data);
}

module.exports = { importing }