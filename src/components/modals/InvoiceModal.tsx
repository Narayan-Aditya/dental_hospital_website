import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  Printer, 
  Search, 
  CheckCircle2, 
  Clock, 
  QrCode, 
  CreditCard, 
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Invoice } from '../../types';
import { generateInvoicePDF } from '../../utils/pdfGenerator';
import { HOSPITAL_INFO } from '../../data/mockData';

export const InvoiceModal: React.FC = () => {
  const { 
    isInvoiceModalOpen, 
    setIsInvoiceModalOpen, 
    invoices, 
    activeInvoice, 
    setActiveInvoice,
    findInvoice 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(activeInvoice || invoices[0] || null);
  const [searchNotFound, setSearchNotFound] = useState<boolean>(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState<boolean>(false);

  if (!isInvoiceModalOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const result = findInvoice(searchQuery);
    if (result) {
      setSelectedInvoice(result);
      setSearchNotFound(false);
    } else {
      setSearchNotFound(true);
    }
  };

  const handleSelectSample = (inv: Invoice) => {
    setSelectedInvoice(inv);
    setSearchNotFound(false);
  };

  const handleDownloadPDF = () => {
    if (selectedInvoice) {
      generateInvoicePDF(selectedInvoice);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSimulatePayment = () => {
    if (selectedInvoice) {
      selectedInvoice.paymentStatus = 'Paid';
      setShowPaymentSuccess(true);
      setTimeout(() => {
        setShowPaymentSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col justify-between">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                Official Billing & Invoices Portal
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                Patient Tax Invoice & Receipt
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsInvoiceModalOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Sample Invoices Bar */}
        <div className="p-5 sm:p-6 bg-slate-50/50 border-b border-slate-100 space-y-3">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchNotFound(false);
                }}
                placeholder="Search by Invoice No (e.g. HDH-INV-2026-0421), Patient Phone or Name..."
                className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all"
            >
              Search
            </button>
          </form>

          {searchNotFound && (
            <div className="text-xs text-rose-600 font-semibold flex items-center space-x-1 animate-fadeIn">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>No invoice matching "{searchQuery}" found. Try one of the test invoices below:</span>
            </div>
          )}

          {/* Quick Test Invoices Chips */}
          <div className="flex items-center flex-wrap gap-2 pt-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Quick Preview:</span>
            {invoices.slice(0, 4).map((inv) => (
              <button
                key={inv.id}
                onClick={() => handleSelectSample(inv)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                  selectedInvoice?.id === inv.id
                    ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {inv.invoiceNumber} ({inv.patientName})
              </button>
            ))}
          </div>
        </div>

        {/* Invoice Display View */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 bg-white" id="printable-invoice">
          {selectedInvoice ? (
            <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Invoice Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                      HOPE DENTAL HOSPITAL
                    </span>
                    <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Sadrauna, Lucknow
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {HOSPITAL_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    GSTIN: {HOSPITAL_INFO.gstin} | Registration: {HOSPITAL_INFO.registrationNo}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                    TAX INVOICE
                  </span>
                  <div className="font-mono font-bold text-sm text-slate-800 mt-0.5">
                    {selectedInvoice.invoiceNumber}
                  </div>
                  <div className="text-xs text-slate-500">Date: {selectedInvoice.date}</div>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold mt-1.5 ${
                    selectedInvoice.paymentStatus === 'Paid'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedInvoice.paymentStatus === 'Paid' ? 'STATUS: PAID ✓' : 'STATUS: PENDING PAYMENT'}
                  </div>
                </div>
              </div>

              {/* Patient and Consultation Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                    Billed To (Patient Details)
                  </span>
                  <div className="font-bold text-sm text-slate-900">{selectedInvoice.patientName}</div>
                  <div className="text-slate-600">Phone: +91 {selectedInvoice.patientPhone}</div>
                  {selectedInvoice.patientAge && (
                    <div className="text-slate-600">
                      Age/Gender: {selectedInvoice.patientAge} Yrs / {selectedInvoice.patientGender}
                    </div>
                  )}
                  <div className="text-slate-500">{selectedInvoice.patientAddress}</div>
                </div>

                <div className="space-y-1 sm:text-right">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                    Treatment & Doctor Details
                  </span>
                  <div className="font-bold text-slate-900">{selectedInvoice.doctorName}</div>
                  {selectedInvoice.appointmentId && (
                    <div className="text-slate-600 font-mono">Appt Ref: {selectedInvoice.appointmentId}</div>
                  )}
                  <div className="text-slate-600">Payment Mode: {selectedInvoice.paymentMode}</div>
                  <div className="text-teal-700 font-semibold">Hospital Branch: Sadrauna, Lucknow</div>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-700 font-bold">
                      <th className="py-2.5 px-3">#</th>
                      <th className="py-2.5 px-3">Service / Procedure Description</th>
                      <th className="py-2.5 px-3 text-center">HSN/SAC</th>
                      <th className="py-2.5 px-3 text-center">Qty</th>
                      <th className="py-2.5 px-3 text-right">Unit Rate (₹)</th>
                      <th className="py-2.5 px-3 text-right">Total (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedInvoice.items.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td className="py-3 px-3 text-slate-400 font-medium">{idx + 1}</td>
                        <td className="py-3 px-3 font-semibold text-slate-900">{item.description}</td>
                        <td className="py-3 px-3 text-center text-slate-500 font-mono">{item.hsnSac || '999312'}</td>
                        <td className="py-3 px-3 text-center text-slate-700 font-bold">{item.qty}</td>
                        <td className="py-3 px-3 text-right text-slate-700">₹{item.unitPrice.toLocaleString('en-IN')}</td>
                        <td className="py-3 px-3 text-right font-bold text-slate-900">₹{item.total.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total Calculation Breakdown */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-1.5 max-w-sm text-xs text-slate-500">
                  <p>• Clinical dental services are exempt from GST under Indian Tax Laws.</p>
                  <p>• All ceramic crowns & implants include genuine lab guarantee certificate.</p>
                  {selectedInvoice.notes && (
                    <p className="font-medium text-slate-700 italic">Notes: {selectedInvoice.notes}</p>
                  )}
                </div>

                <div className="w-full sm:w-64 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span>₹{selectedInvoice.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Hospital Discount:</span>
                    <span className="text-emerald-600">- ₹{selectedInvoice.discount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Healthcare GST (0%):</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-slate-200 text-sm font-bold text-slate-900">
                    <span className="text-teal-700 uppercase">Grand Total:</span>
                    <span className="text-xl font-extrabold text-teal-800">
                      ₹{selectedInvoice.totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Success Alert */}
              {showPaymentSuccess && (
                <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-4 rounded-xl text-center text-xs font-bold animate-fadeIn">
                  Payment of ₹{selectedInvoice.totalAmount.toLocaleString('en-IN')} Marked as Verified & Paid!
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              Select or search an invoice to view details.
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            {selectedInvoice?.paymentStatus === 'Pending' && (
              <button
                onClick={handleSimulatePayment}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
              >
                <CreditCard className="w-4 h-4" />
                <span>Simulate Online UPI / Card Payment</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl shadow-sm transition-all flex items-center space-x-1.5"
            >
              <Printer className="w-4 h-4 text-teal-600" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF Invoice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
