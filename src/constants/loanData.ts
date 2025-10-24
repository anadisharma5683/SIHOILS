// Loan & Insurance Data for Krishi Shield

// Define types for our data
interface LoanData {
  id: string;
  name: string;
  eligibleLoan: string;
  interest: string;
  nextInstallment: string;
  bank: string;
  status: string;
}

interface ClaimHistory {
  id: number;
  date: string;
  mishap: string;
  status: string;
}

export const LOAN_DATA: LoanData[] = [
  { 
    id: 'MP2025KCC1234', 
    name: 'Ramesh Patil', 
    eligibleLoan: '₹75,000', 
    interest: '4% p.a.', 
    nextInstallment: '15 Dec 2025', 
    bank: 'SBI Akola',
    status: 'Active'
  },
  { 
    id: 'MH2025KCC0987', 
    name: 'Suresh More', 
    eligibleLoan: '₹50,000', 
    interest: '4.5% p.a.', 
    nextInstallment: '10 Jan 2026', 
    bank: 'BOB Jalgaon',
    status: 'Pending Verification'
  },
  {
    id: 'GJ2025KCC5678',
    name: 'Rajesh Kumar',
    eligibleLoan: '₹65,000',
    interest: '4.2% p.a.',
    nextInstallment: '22 Nov 2025',
    bank: 'Bank of India, Surat',
    status: 'Active'
  }
];

export const CLAIM_HISTORY: ClaimHistory[] = [
  {
    id: 1,
    date: '15 Oct 2025',
    mishap: 'Pest attack',
    status: 'Reviewed'
  },
  {
    id: 2,
    date: '03 Sep 2025',
    mishap: 'Heavy rainfall',
    status: 'Approved'
  },
  {
    id: 3,
    date: '22 Aug 2025',
    mishap: 'Drought',
    status: 'Submitted'
  }
];