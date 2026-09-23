import { jsPDF } from 'jspdf';
import { Invoice } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';

export const generateInvoicePDF = (invoice: Invoice) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  // Header Background bar
  doc.setFillColor(13, 148, 136); // Teal 600
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Hospital Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(HOSPITAL_INFO.name.toUpperCase(), 14, 12);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`${HOSPITAL_INFO.tagline} | ISO Certified`, 14, 18);
  doc.text(`Sadrauna, Mohan Road, Lucknow, UP 226009 | Helpline: ${HOSPITAL_INFO.phone}`, 14, 23);

  // Sub Header: INVOICE / RECEIPT
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('TAX INVOICE / RECEIPT', 14, 40);

  // Tax & Reg info
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`GSTIN: ${HOSPITAL_INFO.gstin} | Reg: ${HOSPITAL_INFO.registrationNo}`, 14, 45);

  // Status Badge
  const isPaid = invoice.paymentStatus === 'Paid';
  doc.setFillColor(isPaid ? 220 : 254, isPaid ? 252 : 243, isPaid ? 231 : 199);
  doc.roundedRect(pageWidth - 55, 33, 41, 12, 2, 2, 'F');
  doc.setTextColor(isPaid ? 22 : 180, isPaid ? 101 : 83, isPaid ? 52 : 9);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(isPaid ? 'STATUS: PAID' : 'STATUS: PENDING', pageWidth - 52, 41);

  // Divider line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(14, 49, pageWidth - 14, 49);

  // Patient & Invoice Details Grid
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);

  // Left Column (Patient)
  doc.setFont('helvetica', 'bold');
  doc.text('BILLED TO (PATIENT):', 14, 56);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.text(invoice.patientName || 'Walk-in Patient', 14, 62);
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Phone: +91 ${invoice.patientPhone}`, 14, 67);
  if (invoice.patientAge) {
    doc.text(`Age/Gender: ${invoice.patientAge} Yrs / ${invoice.patientGender || 'N/A'}`, 14, 72);
  }
  doc.text(`Address: ${invoice.patientAddress || 'Lucknow, UP'}`, 14, 77);

  // Right Column (Invoice Metadata)
  doc.setTextColor(71, 85, 105);
  doc.setFont('helvetica', 'bold');
  doc.text('INVOICE DETAILS:', pageWidth - 80, 56);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(15, 23, 42);
  doc.text(`Invoice No: ${invoice.invoiceNumber}`, pageWidth - 80, 62);
  doc.text(`Date: ${invoice.date}`, pageWidth - 80, 67);
  if (invoice.appointmentId) {
    doc.text(`Appt Ref: ${invoice.appointmentId}`, pageWidth - 80, 72);
  }
  doc.text(`Doctor: ${invoice.doctorName}`, pageWidth - 80, 77);
  doc.text(`Payment Mode: ${invoice.paymentMode}`, pageWidth - 80, 82);

  // Items Table Header
  const tableStartY = 90;
  doc.setFillColor(241, 245, 249);
  doc.rect(14, tableStartY, pageWidth - 28, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);

  doc.text('#', 17, tableStartY + 5.5);
  doc.text('TREATMENT / SERVICE DESCRIPTION', 26, tableStartY + 5.5);
  doc.text('SAC CODE', 110, tableStartY + 5.5);
  doc.text('QTY', 135, tableStartY + 5.5);
  doc.text('UNIT PRICE', 155, tableStartY + 5.5);
  doc.text('TOTAL (INR)', pageWidth - 35, tableStartY + 5.5);

  // Items Rows
  let currentY = tableStartY + 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);

  invoice.items.forEach((item, index) => {
    currentY += 7;
    doc.setTextColor(71, 85, 105);
    doc.text(String(index + 1), 17, currentY);
    
    doc.setTextColor(15, 23, 42);
    const desc = item.description.length > 48 ? item.description.substring(0, 45) + '...' : item.description;
    doc.text(desc, 26, currentY);

    doc.setTextColor(71, 85, 105);
    doc.text(item.hsnSac || '999312', 110, currentY);
    doc.text(String(item.qty), 137, currentY);
    doc.text(`₹${item.unitPrice.toLocaleString('en-IN')}`, 155, currentY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`₹${item.total.toLocaleString('en-IN')}`, pageWidth - 35, currentY);
    doc.setFont('helvetica', 'normal');

    // Light divider line
    doc.setDrawColor(241, 245, 249);
    doc.line(14, currentY + 2.5, pageWidth - 14, currentY + 2.5);
  });

  // Calculation Summary Box
  const summaryStartY = Math.max(currentY + 12, 140);
  const summaryX = pageWidth - 80;

  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Subtotal:', summaryX, summaryStartY);
  doc.text(`₹${invoice.subtotal.toLocaleString('en-IN')}`, pageWidth - 20, summaryStartY, { align: 'right' });

  doc.text('Discount Applied:', summaryX, summaryStartY + 6);
  doc.text(`- ₹${invoice.discount.toLocaleString('en-IN')}`, pageWidth - 20, summaryStartY + 6, { align: 'right' });

  doc.text('Healthcare GST (0%):', summaryX, summaryStartY + 12);
  doc.text('₹0', pageWidth - 20, summaryStartY + 12, { align: 'right' });

  // Grand Total Highlight
  doc.setFillColor(240, 253, 250); // Teal 50
  doc.roundedRect(summaryX - 4, summaryStartY + 16, 70, 10, 2, 2, 'F');
  doc.setTextColor(13, 148, 136); // Teal 600
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Total Amount:', summaryX, summaryStartY + 23);
  doc.text(`₹${invoice.totalAmount.toLocaleString('en-IN')}`, pageWidth - 20, summaryStartY + 23, { align: 'right' });

  // Hospital Notes & Seal Box
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Note: Dental clinical services are exempt from GST under Indian Tax Laws.', 14, summaryStartY);
  doc.text('• All restorative crowns & implants are covered under clinic guarantee protocols.', 14, summaryStartY + 5);
  doc.text('• 24x7 Emergency Contact: +91 94500 00000 / +91 98390 11111', 14, summaryStartY + 10);

  if (invoice.notes) {
    doc.setFont('helvetica', 'italic');
    doc.text(`Doctor's Remarks: ${invoice.notes}`, 14, summaryStartY + 17);
  }

  // Doctor Signature & Official Seal
  const footerY = 240;
  doc.setDrawColor(203, 213, 225);
  doc.line(pageWidth - 75, footerY, pageWidth - 15, footerY);
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Authorized Signatory / Medical Supt.', pageWidth - 70, footerY + 5);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Hope Dental Hospital & Wellness Centre', pageWidth - 70, footerY + 9);

  // Footer bar
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 282, pageWidth, 15, 'F');
  doc.setTextColor(203, 213, 225);
  doc.setFontSize(7.5);
  doc.text('Thank you for trusting Hope Dental Hospital & Wellness Centre for your smile care!', pageWidth / 2, 288, { align: 'center' });
  doc.text('Web: www.hopedentalhospital.com | Sadrauna, Lucknow', pageWidth / 2, 292, { align: 'center' });

  // Save the PDF
  doc.save(`${invoice.invoiceNumber}.pdf`);
};
