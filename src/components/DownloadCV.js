// DownloadPDFButton.js

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const DownloadPDFButton = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const canvas = await html2canvas(contentRef.current);
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div className='download-pdf-button'>
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
};

export default DownloadPDFButton;
