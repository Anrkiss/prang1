import React, { useState, useEffect } from 'react';
import { DollarSign, Gift, ArrowUpRight, ArrowDownRight, Filter, Download } from 'lucide-react';
import { supabase, getWalletData } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface WalletData {
  tokens: number;
  cash: number;
  points: number;
}

interface Transaction {
  id: string;
  type: 'Earned' | 'Redeemed';
  amount: number;
  currency: string;
  description: string;
  created_at: string;
}

const WalletPage: React.FC = () => {
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchWalletData = async () => {
      if (!user) return;

      setIsLoading(true);
      setError(null);

      try {
        const { wallet, transactions } = await getWalletData(user.id);
        setWalletData(wallet);
        setTransactions(transactions);
      } catch (error) {
        console.error('Error fetching wallet data:', error);
        setError('Failed to load wallet data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWalletData();
  }, [user]);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading wallet data...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wallet</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Tokens</h2>
          <p className="text-3xl font-bold text-primary-600">{walletData?.tokens || 0}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Cash</h2>
          <p className="text-3xl font-bold text-green-600">${(walletData?.cash || 0).toFixed(2)}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Points</h2>
          <p className="text-3xl font-bold text-blue-600">{walletData?.points || 0}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Transaction History</h2>
          <div className="flex space-x-2">
            <button className="btn-secondary flex items-center">
              <Filter className="mr-2" size={16} />
              Filter
            </button>
            <button className="btn-secondary flex items-center">
              <Download className="mr-2" size={16} />
              Export
            </button>
          </div>
        </div>
        <div className="card p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Date</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t border-gray-200">
                  <td className="py-2">{new Date(transaction.created_at).toLocaleDateString()}</td>
                  <td className="py-2">
                    <span className={`flex items-center ${transaction.type === 'Earned' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'Earned' ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-2 font-semibold">
                    {transaction.currency === 'USD' ? '$' : ''}{transaction.amount} {transaction.currency}
                  </td>
                  <td className="py-2">{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {transactions.length === 0 && (
            <p className="text-gray-600 mt-4">No transactions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;