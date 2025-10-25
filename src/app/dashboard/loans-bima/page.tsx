'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/common/Button';
import { LOAN_DATA, CLAIM_HISTORY } from '@/constants/loanData';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
// import theme from '@/constants/theme';


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


export default function LoansBimaPage() {
  const [kccId, setKccId] = useState('');
  const [loanInfo, setLoanInfo] = useState<LoanData | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [kccIdError, setKccIdError] = useState('');
  const router = useRouter();
  const { user, loading } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const validateKccId = () => {
    if (!kccId.trim()) {
      setKccIdError(t('enterKccIdRequired'));
      return false;
    }
    
    // Basic KCC ID format validation (example: XX2025KCC1234)
    const kccIdRegex = /^[A-Z]{2}\d{4}KCC\d{4}$/;
    if (!kccIdRegex.test(kccId)) {
      setKccIdError(t('invalidKccIdFormat'));
      return false;
    }
    
    setKccIdError('');
    return true;
  };

  const handleKccSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateKccId()) {
      return;
    }
    
    setError('');
    const loanData = LOAN_DATA.find(data => data.id === kccId);
    if (loanData) {
      setLoanInfo(loanData);
    } else {
      setLoanInfo(null);
      setError(t('kccIdNotFound'));
    }
  };

  const handleKccIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKccId(e.target.value.toUpperCase());
    if (kccIdError) setKccIdError('');
  };

  const handleCameraCapture = () => {
    // Simulate camera capture
    setShowCamera(false);
    setClaimSubmitted(true);
    setTimeout(() => setClaimSubmitted(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#d5f9de] flex items-center justify-center">
        <div className="text-xl text-[#374151]">{t('loading')}</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#d5f9de] py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#374151]">{t('loansAndBima')}</h1>
            <p className="text-[#545e75]">{t('loansAndBimaDesc')}</p>
          </div>
          <Button onClick={() => router.push('/dashboard')} variant="secondary" className="bg-[#f59e0b] hover:bg-[#d97706] border border-[#f59e0b] text-white">
            {t('back')} {t('dashboard')}
          </Button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-[#fcb1a6] text-[#374151] rounded-lg" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        {/* Loans & Bima Section */}
        <div className="bg-[#8aa399] rounded-xl p-6 shadow-lg border border-[#545e75] mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-2">💰</span> {t('loansAndBimaTitle')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Loan Info Section */}
            <div className="bg-white rounded-lg p-5 border border-[#8aa399]">
              <h3 className="text-lg font-semibold text-[#374151] mb-4 flex items-center">
                <span className="mr-2">💳</span> {t('checkLoanEligibility')}
              </h3>
              
              {!loanInfo ? (
                <form onSubmit={handleKccSubmit} className="space-y-4" aria-label="KCC ID form">
                  <div>
                    <label htmlFor="kccId" className="block text-[#374151] mb-2">
                      {t('checkLoanEligibilityDesc')}
                    </label>
                    <input
                      type="text"
                      id="kccId"
                      value={kccId}
                      onChange={handleKccIdChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        kccIdError ? 'border-[#fcb1a6] focus:ring-[#fcb1a6]' : 'border-[#8aa399] focus:ring-[#8aa399]'
                      }`}
                      placeholder={t('kccIdPlaceholder')}
                      aria-invalid={!!kccIdError}
                      aria-describedby={kccIdError ? "kcc-id-error" : undefined}
                    />
                    {kccIdError && (
                      <p id="kcc-id-error" className="text-[#fcb1a6] text-sm mt-1" role="alert">
                        {kccIdError}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="bg-[#059669] hover:bg-[#047857] text-white">
                    {t('checkEligibility')}
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-[#f0f9f2] rounded-lg">
                    <h4 className="font-semibold text-[#374151]">{loanInfo.name}</h4>
                    <p className="text-[#545e75] text-sm">{t('kccIdLabel')}: {loanInfo.id}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f0f9f2] p-3 rounded-lg">
                      <p className="text-sm text-[#545e75]">{t('eligibleLoanAmount')}</p>
                      <p className="font-bold text-lg text-[#374151]">{loanInfo.eligibleLoan}</p>
                    </div>
                    <div className="bg-[#f0f9f2] p-3 rounded-lg">
                      <p className="text-sm text-[#545e75]">{t('interestRate')}</p>
                      <p className="font-bold text-lg text-[#374151]">{loanInfo.interest}</p>
                    </div>
                    <div className="bg-[#f0f9f2] p-3 rounded-lg">
                      <p className="text-sm text-[#545e75]">{t('nextInstallment')}</p>
                      <p className="font-bold text-lg text-[#374151]">{loanInfo.nextInstallment}</p>
                    </div>
                    <div className="bg-[#f0f9f2] p-3 rounded-lg">
                      <p className="text-sm text-[#545e75]">{t('linkedBank')}</p>
                      <p className="font-bold text-lg text-[#374151]">{loanInfo.bank}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-[#8aa399] rounded-lg">
                    <p className="text-sm text-white">
                      {t('status')}: <span className="font-semibold">{loanInfo.status}</span>
                    </p>
                  </div>
                  
                  <Button 
                    onClick={() => setLoanInfo(null)} 
                    variant="secondary"
                    className="w-full bg-[#10b981] hover:bg-[#059669] border border-[#10b981] text-white"
                  >
                    {t('checkAnotherKcc')}
                  </Button>
                </div>
              )}
            </div>
            
            {/* Bima Claim Section */}
            <div className="bg-white rounded-lg p-5 border border-[#8aa399]">
              <h3 className="text-lg font-semibold text-[#374151] mb-4 flex items-center">
                <span className="mr-2">🛡️</span> {t('cropBimaClaim')}
              </h3>
              
              <div className="mb-4 p-3 bg-[#f0f9f2] rounded-lg">
                <p className="text-[#374151]">
                  {t('cropBimaClaimDesc')}
                </p>
              </div>
              
              {claimSubmitted ? (
                <div className="p-4 bg-[#8aa399] text-white rounded-lg mb-4" role="alert" aria-live="polite">
                  {t('bimaReportSaved')}
                </div>
              ) : (
                <Button 
                  onClick={() => setShowCamera(true)}
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white mb-4 flex items-center justify-center"
                >
                  <span className="mr-2">📷</span> {t('captureDamage')}
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
                      className="flex-1 bg-[#059669] hover:bg-[#047857]"
                    >
                      {t('submitClaim')}
                    </Button>
                    <Button 
                      onClick={() => setShowCamera(false)}
                      variant="secondary"
                      className="flex-1 bg-[#6b7280] hover:bg-[#4b5563] border border-[#6b7280] text-white"
                    >
                      {t('cancel')}
                    </Button>
                  </div>
                </div>
              )}
              
              <h4 className="font-semibold text-[#374151] mb-3">{t('claimHistory')}</h4>
              <div className="space-y-3">
                {CLAIM_HISTORY.map((claim) => (
                  <div key={claim.id} className="p-3 bg-[#f0f9f2] rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-[#374151]">{claim.date}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        claim.status === 'Approved' ? 'bg-[#8aa399] text-white' :
                        claim.status === 'Reviewed' ? 'bg-[#545e75] text-white' :
                        'bg-[#304d6d] text-white'
                      }`}>
                        {claim.status}
                      </span>
                    </div>
                    <p className="text-[#545e75] text-sm mt-1">{claim.mishap}</p>
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