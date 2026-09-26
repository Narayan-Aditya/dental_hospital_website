import { jsPDF } from 'jspdf';
import { Invoice, Appointment } from '../types';
import { HOSPITAL_INFO, CLINIC_BRANCHES_DATA, DOCTORS_DATA, TREATMENTS_DATA } from '../data/mockData';

export const generateAppointmentPDF = (appointment: Appointment) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const branch = CLINIC_BRANCHES_DATA.find(b => b.id === appointment.clinicBranchId) || CLINIC_BRANCHES_DATA[0];
  const doctor = DOCTORS_DATA.find(d => d.id === appointment.doctorId);
  const treatment = TREATMENTS_DATA.find(t => t.id === appointment.treatmentId);

  // Deep Navy Header Bar
  doc.setFillColor(11, 31, 58); // #0B1F3A
  doc.rect(0, 0, pageWidth, 32, 'F');

  // Golden accent stripe
  doc.setFillColor(197, 160, 89); // Gold #C5A059
  doc.rect(0, 32, pageWidth, 2, 'F');

  // Hospital Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('HOPE DENTAL HOSPITAL', 14, 13);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(220, 230, 242);
  doc.text('Multispecialty Dental Hospital & Wellness Centre | Centre for Implantology & Laser Dentistry', 14, 19);
  doc.text(`Helpline: ${HOSPITAL_INFO.phone} / ${HOSPITAL_INFO.emergencyPhone} | Sadrauna, Para Road, Lucknow`, 14, 25);

  // Sub Header: APPOINTMENT CONFIRMATION PASS
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('CONFIRMED APPOINTMENT PASS', 14, 44);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Issued On: ${new Date().toLocaleDateString('en-GB')} | Token Ref: ${appointment.id}`, 14, 50);

  // Status Badge
  doc.setFillColor(220, 252, 231);
  doc.roundedRect(pageWidth - 62, 38, 48, 12, 2, 2, 'F');
  doc.setTextColor(22, 101, 52);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('✓ CONFIRMED', pageWidth - 55, 46);

  // Divider line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(14, 55, pageWidth - 14, 55);

  // Patient Details Box (Left)
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 60, 88, 52, 2, 2, 'F');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(11, 31, 58);
  doc.text('PATIENT INFORMATION', 18, 67);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Patient Name:', 18, 74);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(appointment.patientName, 44, 74);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Contact Phone:', 18, 81);
  doc.setTextColor(15, 23, 42);
  doc.text(appointment.patientPhone, 44, 81);

  doc.setTextColor(71, 85, 105);
  doc.text('Email Address:', 18, 88);
  doc.setTextColor(15, 23, 42);
  doc.text(appointment.patientEmail || 'N/A', 44, 88);

  doc.setTextColor(71, 85, 105);
  doc.text('Age / Gender:', 18, 95);
  doc.setTextColor(15, 23, 42);
  doc.text(`${appointment.patientAge} Years / ${appointment.gender}`, 44, 95);

  doc.setTextColor(71, 85, 105);
  doc.text('Patient Origin:', 18, 102);
  doc.setTextColor(15, 23, 42);
  doc.text(appointment.country || 'India', 44, 102);

  // Appointment Schedule Box (Right)
  doc.setFillColor(240, 253, 250);
  doc.roundedRect(108, 60, 88, 52, 2, 2, 'F');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 148, 136); // Teal
  doc.text('SCHEDULE & LOCATION', 112, 67);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Appointment Date:', 112, 74);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(appointment.date, 145, 74);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Reserved Time:', 112, 81);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 148, 136);
  doc.text(appointment.timeSlot, 145, 81);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Consultation Mode:', 112, 88);
  doc.setTextColor(15, 23, 42);
  doc.text(appointment.consultationType === 'virtual' ? 'Virtual Video E-Consult' : 'In-Person Clinic Visit', 145, 88);

  doc.setTextColor(71, 85, 105);
  doc.text('Consultant Doctor:', 112, 95);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(doctor ? doctor.name : 'Specialist Assigned', 145, 95);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Selected Center:', 112, 102);
  doc.setTextColor(15, 23, 42);
  doc.text(branch.name.slice(0, 26), 145, 102);

  // Clinic Center Details Full Bar
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(14, 118, pageWidth - 28, 28, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(11, 31, 58);
  doc.text(`SELECTED CLINIC VENUE: ${branch.name.toUpperCase()}`, 18, 125);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Address: ${branch.address}`, 18, 131, { maxWidth: pageWidth - 36 });
  doc.text(`Landmark: ${branch.landmark} | Direct Branch Phone: ${branch.phone}`, 18, 141);

  // Procedure Details & Guidelines
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('PRIMARY TREATMENT INQUIRY', 14, 154);

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, 158, pageWidth - 28, 24, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(13, 148, 136);
  doc.text(treatment ? treatment.title : 'Comprehensive Dental Examination', 18, 166);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(treatment ? treatment.shortDesc : 'Includes thorough clinical inspection, digital intraoral photography, and treatment plan.', 18, 172, { maxWidth: pageWidth - 36 });

  // Important Patient Instructions
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('IMPORTANT PATIENT INSTRUCTIONS', 14, 192);

  const instructions = [
    'Please arrive 10–15 minutes prior to your scheduled time slot for initial registration and digital record creation.',
    'Carry any existing dental OPG X-rays, medical records, or lists of current medications if applicable.',
    'If you are feeling unwell or running a fever, please notify us in advance to reschedule without penalty.',
    'Complimentary patient parking is available at our Sadrauna, Lucknow hospital campus.',
    'For appointment assistance or directions, call +91 79052 87870 / +91 79052 69559.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  let instY = 200;
  instructions.forEach((inst, idx) => {
    doc.text(`${idx + 1}.`, 16, instY);
    doc.text(inst, 22, instY, { maxWidth: pageWidth - 38 });
    instY += 6.5;
  });

  // Simulated Barcode & Security Strip
  doc.setFillColor(15, 23, 42);
  const barcodeY = 245;
  for (let i = 0; i < 40; i++) {
    const barW = (i % 3 === 0 ? 1.5 : (i % 2 === 0 ? 0.8 : 0.4));
    doc.rect(14 + (i * 2.2), barcodeY, barW, 9, 'F');
  }
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`SECURITY VERIFICATION HASH: ${appointment.id.replace(/-/g, '')}778X`, 14, barcodeY + 14);

  // Signatures
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('AUTHORIZED REGISTRAR', pageWidth - 60, barcodeY + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Hope Central Patient Desk', pageWidth - 60, barcodeY + 13);

  // Footer bar
  doc.setFillColor(11, 31, 58);
  doc.rect(0, 285, pageWidth, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(7.5);
  doc.text('HOPE DENTAL HOSPITAL & WELLNESS CENTRE — Sadrauna, Lucknow | Centre for Implantology & Laser Dentistry', pageWidth / 2, 292, { align: 'center' });

  // Save the document
  doc.save(`HopeDental_Appointment_${appointment.id}.pdf`);
};

export const generateInvoicePDF = (invoice: Invoice) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  // Header Background bar
  doc.setFillColor(11, 31, 58); // #0B1F3A
  doc.rect(0, 0, pageWidth, 30, 'F');

  // Gold line
  doc.setFillColor(197, 160, 89);
  doc.rect(0, 30, pageWidth, 2, 'F');

  // Hospital Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('HOPE DENTAL HOSPITAL', 14, 13);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(220, 230, 242);
  doc.text('Multispecialty Dental Hospital & Wellness Centre | ISO 9001:2015 Certified', 14, 19);
  doc.text(`Helpline: ${HOSPITAL_INFO.phone} | Emergency: ${HOSPITAL_INFO.emergencyPhone}`, 14, 25);

  // Sub Header: INVOICE / RECEIPT
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('TAX INVOICE / RECEIPT', 14, 42);

  // Tax & Reg info
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`GSTIN: ${HOSPITAL_INFO.gstin} | NABH Reg: ${HOSPITAL_INFO.registrationNo}`, 14, 48);

  // Status Badge
  const isPaid = invoice.paymentStatus === 'Paid';
  doc.setFillColor(isPaid ? 220 : 254, isPaid ? 252 : 243, isPaid ? 231 : 199);
  doc.roundedRect(pageWidth - 55, 36, 41, 12, 2, 2, 'F');
  doc.setTextColor(isPaid ? 22 : 180, isPaid ? 101 : 83, isPaid ? 52 : 9);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(isPaid ? 'STATUS: PAID' : 'STATUS: PENDING', pageWidth - 52, 44);

  // Divider line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(14, 53, pageWidth - 14, 53);

  // Patient & Invoice Details Grid
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);

  // Left Column (Patient)
  doc.setFont('helvetica', 'bold');
  doc.text('BILLED TO (PATIENT):', 14, 60);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.text(invoice.patientName || 'Registered Patient', 14, 66);
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Phone: ${invoice.patientPhone}`, 14, 71);
  if (invoice.patientAge) {
    doc.text(`Age/Gender: ${invoice.patientAge} Yrs / ${invoice.patientGender || 'N/A'}`, 14, 76);
  }
  doc.text(`Address: ${invoice.patientAddress || 'Lucknow, Uttar Pradesh'}`, 14, 81);

  // Right Column (Invoice Metadata)
  doc.setTextColor(71, 85, 105);
  doc.setFont('helvetica', 'bold');
  doc.text('INVOICE DETAILS:', pageWidth - 80, 60);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(15, 23, 42);
  doc.text(`Invoice No: ${invoice.invoiceNumber}`, pageWidth - 80, 66);
  doc.text(`Date: ${invoice.date}`, pageWidth - 80, 71);
  if (invoice.appointmentId) {
    doc.text(`Appt Ref: ${invoice.appointmentId}`, pageWidth - 80, 76);
  }
  doc.text(`Doctor: ${invoice.doctorName}`, pageWidth - 80, 81);
  doc.text(`Branch: ${invoice.branchName.slice(0, 24)}`, pageWidth - 80, 86);
  doc.text(`Payment Mode: ${invoice.paymentMode}`, pageWidth - 80, 91);

  // Items Table Header
  const tableStartY = 100;
  doc.setFillColor(241, 245, 249);
  doc.rect(14, tableStartY, pageWidth - 28, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);

  doc.text('#', 17, tableStartY + 5.5);
  doc.text('TREATMENT / SERVICE DESCRIPTION', 26, tableStartY + 5.5);
  doc.text('SAC CODE', 110, tableStartY + 5.5);
  doc.text('QTY', 135, tableStartY + 5.5);
  doc.text('UNIT PRICE (INR)', 150, tableStartY + 5.5);
  doc.text('TOTAL (INR)', 180, tableStartY + 5.5);

  let currentY = tableStartY + 8;

  invoice.items.forEach((item, index) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    doc.text(`${index + 1}`, 17, currentY + 5.5);
    doc.text(item.description, 26, currentY + 5.5, { maxWidth: 80 });
    doc.text(item.hsnSac, 110, currentY + 5.5);
    doc.text(item.qty.toString(), 137, currentY + 5.5);
    doc.text(`₹${item.unitPrice.toLocaleString('en-IN')}`, 150, currentY + 5.5);
    doc.text(`₹${item.total.toLocaleString('en-IN')}`, 180, currentY + 5.5);

    currentY += 8;
  });

  // Divider
  doc.setDrawColor(226, 232, 240);
  doc.line(14, currentY + 2, pageWidth - 14, currentY + 2);

  // Summary Totals
  const totalsY = currentY + 8;
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);

  doc.text('Subtotal:', 140, totalsY);
  doc.text(`₹${invoice.subtotal.toLocaleString('en-IN')}`, 180, totalsY);

  doc.text('Healthcare GST Exemption (0%):', 110, totalsY + 6);
  doc.text('₹0', 180, totalsY + 6);

  if (invoice.discount > 0) {
    doc.text('Discount:', 140, totalsY + 12);
    doc.text(`-₹${invoice.discount.toLocaleString('en-IN')}`, 180, totalsY + 12);
  }

  // Grand Total Box
  doc.setFillColor(240, 253, 250);
  doc.rect(110, totalsY + 16, pageWidth - 124, 10, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(13, 148, 136);
  doc.text('TOTAL AMOUNT PAID:', 114, totalsY + 22.5);
  doc.text(`₹${invoice.totalAmount.toLocaleString('en-IN')}`, 176, totalsY + 22.5);

  // Terms & Bank Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('TERMS & CONDITIONS:', 14, totalsY + 38);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('1. Consultations are valid for 15 days for subsequent treatment planning reviews.', 14, totalsY + 44);
  doc.text('2. Dental treatments and surgical procedures are exempt from GST under Indian Health Services notification.', 14, totalsY + 49);
  doc.text('3. This is an official computer-generated receipt issued by Hope Dental Hospital & Wellness Centre.', 14, totalsY + 54);

  // Signature
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('FOR HOPE DENTAL HOSPITAL', pageWidth - 65, totalsY + 44);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Authorized Finance Signatory', pageWidth - 65, totalsY + 50);

  // Footer bar
  doc.setFillColor(11, 31, 58);
  doc.rect(0, 285, pageWidth, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(7.5);
  doc.text('Thank you for choosing Hope Dental Hospital & Wellness Centre — Restoring Smiles, Inspiring Hope', pageWidth / 2, 292, { align: 'center' });

  doc.save(`HopeDental_Invoice_${invoice.invoiceNumber.replace(/\//g, '_')}.pdf`);
};
