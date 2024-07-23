const {PDFDocument} =require('pdf-lib');
const fs = require('fs');

async function generatePDF(content) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(content, { x: 50, y: 700 });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('newsletter.pdf', pdfBytes);
  }
  
  module.exports = generatePDF;