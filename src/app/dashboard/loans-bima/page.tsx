'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/common/Button';
import { LOAN_DATA, CLAIM_HISTORY } from '@/constants/loanData';

export default function LoansBimaPage() {
  const [user, setUser] = useState<{name: string, email: string, role: string} | null>(null);
  const [loading, setLoading] = useState(true);
  const [kccId, setKccId] = useState('');
  const [loanInfo, setLoanInfo] = useState<any>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    // Also remove the auth cookie
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/login');
  };

  const handleKccSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loanData = LOAN_DATA.find(data => data.id === kccId);
    if (loanData) {
      setLoanInfo(loanData);
    } else {
      setLoanInfo(null);
      alert('KCC ID not found — please contact your bank.');
    }
  };

  const handleCameraCapture = () => {
    // Simulate camera capture
    setShowCamera(false);
    setClaimSubmitted(true);
    setTimeout(() => setClaimSubmitted(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-softBG flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-softBG py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Loans & Bima</h1>
            <p className="text-gray-600">Access credit and insurance services</p>
          </div>
          <Button onClick={() => router.push('/dashboard')} variant="secondary">
            Back to Dashboard
          </Button>
        </div>

        {/* Loans & Bima Section */}
        <div className="bg-[#ffe5d9] rounded-xl p-6 shadow-lg border border-[#fec89a] mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">💰</span> Loans & Bima (ऋण और बीमा)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Loan Info Section */}
            <div className="bg-white rounded-lg p-5 border border-[#fec89a]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">💳</span> Check Loan Eligibility (ऋण पात्रता जांचें)
              </h3>
              
              {!loanInfo ? (
                <form onSubmit={handleKccSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="kccId" className="block text-gray-700 mb-2">
                      Enter your KCC ID to check loan eligibility
                      <span className="block text-sm text-gray-500">अपना KCC ID डालें और जानें आपको कितना ऋण मिल सकता है</span>
                    </label>
                    <input
                      type="text"
                      id="kccId"
                      value={kccId}
                      onChange={(e) => setKccId(e.target.value)}
                      className="w-full px-4 py-2 border border-[#fec89a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fec89a]"
                      placeholder="e.g., MP2025KCC1234"
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-[#fec89a] hover:bg-[#fcb87a] text-gray-800">
                    Check Eligibility
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-[#ffe5d9] rounded-lg">
                    <h4 className="font-semibold text-gray-800">{loanInfo.name}</h4>
                    <p className="text-gray-600 text-sm">KCC ID: {loanInfo.id}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#ffe5d9] p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Eligible Loan Amount</p>
                      <p className="font-bold text-lg text-gray-800">{loanInfo.eligibleLoan}</p>
                    </div>
                    <div className="bg-[#ffe5d9] p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Interest Rate</p>
                      <p className="font-bold text-lg text-gray-800">{loanInfo.interest}</p>
                    </div>
                    <div className="bg-[#ffe5d9] p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Next Installment</p>
                      <p className="font-bold text-lg text-gray-800">{loanInfo.nextInstallment}</p>
                    </div>
                    <div className="bg-[#ffe5d9] p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Linked Bank</p>
                      <p className="font-bold text-lg text-gray-800">{loanInfo.bank}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-[#fec89a] rounded-lg">
                    <p className="text-sm text-gray-800">
                      Status: <span className="font-semibold">{loanInfo.status}</span>
                    </p>
                  </div>
                  
                  <Button 
                    onClick={() => setLoanInfo(null)} 
                    variant="secondary"
                    className="w-full"
                  >
                    Check Another KCC ID
                  </Button>
                </div>
              )}
            </div>
            
            {/* Bima Claim Section */}
            <div className="bg-white rounded-lg p-5 border border-[#fec89a]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🛡️</span> Crop Bima Claim (फसल बीमा दावा)
              </h3>
              
              <div className="mb-4 p-3 bg-[#ffe5d9] rounded-lg">
                <p className="text-gray-700">
                  In case of pest attack, weather loss, or any field mishap, record a short video or image to report the damage.
                  <span className="block text-sm text-gray-600 mt-1">
                    कीटाणु हमला, मौसम से होने वाली हानि या किसी भी क्षेत्रीय दुर्घटना की स्थिति में, क्षति की रिपोर्ट करने के लिए एक छोटा सा वीडियो या चित्र दर्ज करें।
                  </span>
                </p>
              </div>
              
              {claimSubmitted ? (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-4">
                  Your Bima report has been saved. A representative will review it.
                  <span className="block text-sm mt-1">
                    आपकी बीमा रिपोर्ट सहेज ली गई है। एक प्रतिनिधि इसकी समीक्षा करेगा।
                  </span>
                </div>
              ) : (
                <Button 
                  onClick={() => setShowCamera(true)}
                  className="w-full bg-[#fec89a] hover:bg-[#fcb87a] text-gray-800 mb-4 flex items-center justify-center"
                >
                  <span className="mr-2">📷</span> Capture Photo/Video to Report Damage
                </Button>
              )}
              
              {showCamera && (
                <div className="p-4 bg-gray-100 rounded-lg mb-4">
                  <p className="text-center text-gray-700 mb-3">Camera Simulation</p>
                  <div className="bg-gray-300 h-40 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-500">📷 Camera Preview</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleCameraCapture}
                      className="flex-1 bg-green-500 hover:bg-green-600"
                    >
                      Capture
                    </Button>
                    <Button 
                      onClick={() => setShowCamera(false)}
                      variant="secondary"
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
              
              <h4 className="font-semibold text-gray-800 mb-3">Claim History (दावा इतिहास)</h4>
              <div className="space-y-3">
                {CLAIM_HISTORY.map((claim) => (
                  <div key={claim.id} className="p-3 bg-[#ffe5d9] rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{claim.date}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        claim.status === 'Approved' ? 'bg-green-200 text-green-800' :
                        claim.status === 'Reviewed' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {claim.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{claim.mishap}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}