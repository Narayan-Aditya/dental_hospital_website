import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Calendar, 
  FileText, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Search, 
  Download, 
  DollarSign, 
  Users, 
  Activity,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { InvoiceItem } from '../../types';
import { generateInvoicePDF } from '../../utils/pdfGenerator';

export const AdminPortalModal: React.FC = () => {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    appointments, 
    invoices, 
    addInvoice, 
    doctors, 
    treatments,
    cancelAppointment,
    rescheduleAppointment,
    setIsInvoiceModalOpen,
    setActiveInvoice
  } = useApp();

  const [activeTab, setActiveTab] = useState<'appointments' | 'new-invoice' | 'analytics'>('appointments');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // New Invoice Form State
  const [invPatientName, setInvPatientName] = useState('');
  const [invPatientPhone, setInvPatientPhone] = useState('');
  const [invPatientAge, setInvPatientAge] = useState(30);
  const [invPatientGender, setInvPatientGender] = useState('Male');
  const [invDoctorName, setInvDoctorName] = useState(doctors[0]?.name || 'Dr. Amit Verma');
  const [invDiscount, setInvDiscount] = useState(0);
  const [invPaymentMode, setInvPaymentMode] = useState<'UPI / QR' | 'Credit/Debit Card' | 'Cash at Counter' | 'NetBanking'>('UPI / QR');
  const [invItems, setInvItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Specialist Oral OPD Examination & Diagnosis', hsnSac: '999312', qty: 1, unitPrice: 500, total: 500 },
    { id: '2', description: 'Single-Sitting Rotary Root Canal Treatment (RCT)', hsnSac: '999312', qty: 1, unitPrice: 2499, total: 2499 }
  ]);
  const [newInvoiceCreatedMsg, setNewInvoiceCreatedMsg] = useState('');

  if (!isAdminOpen) return null;

  const filteredAppointments = appointments.filter(a => {
    const matchesStatus = statusFilter === 'All' || a.status === statusFilter;
    const matchesSearch = 
      a.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.patientPhone.includes(searchTerm) ||
      a.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Calculate Subtotal
  const calculatedSubtotal = invItems.reduce((acc, item) => acc + (item.qty * item.unitPrice), 0);
  const calculatedTotal = Math.max(0, calculatedSubtotal - invDiscount);

  const handleAddItem = () => {
    setInvItems([
      ...invItems,
      { id: String(Date.now()), description: 'Digital Dental Procedure / OPG Scan', hsnSac: '999312', qty: 1, unitPrice: 1000, total: 1000 }
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setInvItems(invItems.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, val: any) => {
    const updated = [...invItems];
    updated[index] = { ...updated[index], [field]: val };
    if (field === 'qty' || field === 'unitPrice') {
      updated[index].total = updated[index].qty * updated[index].unitPrice;
    }
    setInvItems(updated);
  };

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invPatientName || !invPatientPhone || invItems.length === 0) return;

    const newInv = addInvoice({
      patientName: invPatientName,
      patientPhone: invPatientPhone,
      patientAge: Number(invPatientAge),
      patientGender: invPatientGender,
      patientAddress: 'Sadrauna, Lucknow, UP',
      date: new Date().toISOString().split('T')[0],
      doctorName: invDoctorName,
      items: invItems,
      subtotal: calculatedSubtotal,
      taxGst: 0,
      discount: Number(invDiscount),
      totalAmount: calculatedTotal,
      paymentMode: invPaymentMode,
      paymentStatus: 'Paid',
      paymentDate: new Date().toISOString().split('T')[0],
      notes: 'Generated via Hospital Front Desk Reception Portal.'
    });

    setNewInvoiceCreatedMsg(`Invoice ${newInv.invoiceNumber} created successfully!`);
    
    // Auto trigger PDF
    setTimeout(() => {
      generateInvoicePDF(newInv);
      setActiveInvoice(newInv);
      setIsInvoiceModalOpen(true);
      setIsAdminOpen(false);
    }, 1000);
  };

  // Analytics Stats
  const totalRevenue = invoices.reduce((acc, inv) => acc + inv.totalAmount, 0);
  const paidRevenue = invoices.filter(i => i.paymentStatus === 'Paid').reduce((acc, inv) => acc + inv.totalAmount, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-md">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                Hospital Reception & Management Console
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Hope Dental Hospital - Staff Desk
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-4 border-b border-slate-100 flex items-center space-x-4 text-xs font-bold bg-slate-50/60">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`pb-3 border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'appointments'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Manage Appointments ({appointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('new-invoice')}
            className={`pb-3 border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'new-invoice'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Generate Patient Invoice</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-3 border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'analytics'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Clinic Analytics & Billing Ledger</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4 flex-1">
          {/* TAB 1: APPOINTMENTS LIST */}
          {activeTab === 'appointments' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Patient Name, Phone or ID..."
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                  {['All', 'Confirmed', 'Rescheduled', 'Cancelled'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        statusFilter === status
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table of Appointments */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="py-2.5 px-3">Appt ID</th>
                      <th className="py-2.5 px-3">Patient</th>
                      <th className="py-2.5 px-3">Doctor & Treatment</th>
                      <th className="py-2.5 px-3">Schedule</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAppointments.map((appt) => {
                      const docObj = doctors.find(d => d.id === appt.doctorId);
                      const trtObj = treatments.find(t => t.id === appt.treatmentId);

                      return (
                        <tr key={appt.id} className="hover:bg-slate-50/80">
                          <td className="py-3 px-3 font-mono font-bold text-teal-700">{appt.id}</td>
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">{appt.patientName}</div>
                            <div className="text-[11px] text-slate-500">+91 {appt.patientPhone}</div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-slate-800">{docObj?.name || 'Dr. Amit Verma'}</div>
                            <div className="text-[11px] text-slate-500">{trtObj?.title || 'Consultation'}</div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-medium text-slate-900">{appt.date}</div>
                            <div className="text-[11px] text-slate-500">{appt.timeSlot}</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              appt.status === 'Confirmed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : appt.status === 'Rescheduled'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {appt.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5">
                            {appt.status !== 'Cancelled' && (
                              <button
                                onClick={() => cancelAppointment(appt.id)}
                                className="px-2 py-1 text-[11px] font-bold bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg"
                                title="Cancel Appointment"
                              >
                                Cancel
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: GENERATE NEW PATIENT BILL */}
          {activeTab === 'new-invoice' && (
            <form onSubmit={handleCreateInvoice} className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Patient Name *</label>
                  <input
                    type="text"
                    required
                    value={invPatientName}
                    onChange={(e) => setInvPatientName(e.target.value)}
                    placeholder="e.g. Alok Verma"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={invPatientPhone}
                    onChange={(e) => setInvPatientPhone(e.target.value)}
                    placeholder="e.g. 9839012345"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Consulting Doctor</label>
                  <select
                    value={invDoctorName}
                    onChange={(e) => setInvDoctorName(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none"
                  >
                    {doctors.map(d => (
                      <option key={d.id} value={d.name}>{d.name} ({d.role})</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Treatment Line Items & Charges
                  </label>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="px-2.5 py-1 bg-teal-50 text-teal-700 hover:bg-teal-100 font-bold text-xs rounded-lg flex items-center space-x-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Item</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {invItems.map((item, idx) => (
                    <div key={item.id} className="grid grid-cols-12 gap-2 items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs">
                      <div className="col-span-6">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                          placeholder="Procedure Description"
                          className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleItemChange(idx, 'qty', Number(e.target.value))}
                          placeholder="Qty"
                          className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-center text-slate-900"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          min="0"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(idx, 'unitPrice', Number(e.target.value))}
                          placeholder="Rate ₹"
                          className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-900"
                        />
                      </div>
                      <div className="col-span-1 text-center">
                        {invItems.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(idx)}
                            className="text-rose-500 hover:text-rose-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discount & Payment Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Discount Amount (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={invDiscount}
                    onChange={(e) => setInvDiscount(Number(e.target.value))}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Payment Method</label>
                  <select
                    value={invPaymentMode}
                    onChange={(e) => setInvPaymentMode(e.target.value as any)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
                  >
                    <option value="UPI / QR">UPI / QR</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="Cash at Counter">Cash at Counter</option>
                    <option value="NetBanking">NetBanking</option>
                  </select>
                </div>
              </div>

              {/* Summary Bar */}
              <div className="bg-teal-50 p-4 rounded-xl border border-teal-200 flex justify-between items-center text-xs">
                <div>
                  <span className="text-teal-900 font-bold">Subtotal: ₹{calculatedSubtotal.toLocaleString('en-IN')}</span>
                  <span className="text-slate-500 ml-2">Discount: -₹{invDiscount}</span>
                </div>
                <div className="text-sm font-extrabold text-teal-900">
                  Total Payable: ₹{calculatedTotal.toLocaleString('en-IN')}
                </div>
              </div>

              {newInvoiceCreatedMsg && (
                <div className="text-xs text-emerald-700 font-bold bg-emerald-100 p-2.5 rounded-lg text-center">
                  {newInvoiceCreatedMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Issue Official Invoice & Generate PDF</span>
              </button>
            </form>
          )}

          {/* TAB 3: CLINIC ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
                  <div className="text-xs font-bold text-slate-500 uppercase">Total Appointments</div>
                  <div className="font-display font-extrabold text-2xl text-slate-900">{appointments.length}</div>
                  <div className="text-[11px] text-teal-600 font-semibold">Live Patient Bookings</div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
                  <div className="text-xs font-bold text-slate-500 uppercase">Total Invoiced Volume</div>
                  <div className="font-display font-extrabold text-2xl text-slate-900">
                    ₹{totalRevenue.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold">Across {invoices.length} Bills</div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
                  <div className="text-xs font-bold text-slate-500 uppercase">Clinic Location</div>
                  <div className="font-bold text-sm text-slate-900">Sadrauna, Lucknow</div>
                  <div className="text-[11px] text-slate-400">UP-LKO-MED-DEN-2022</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-5 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl"
          >
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
};
