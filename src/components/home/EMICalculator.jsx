import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(27376306);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(10);
  const [emi, setEmi] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    let emiCalc;
    if (monthlyRate === 0) {
      emiCalc = loanAmount / months;
    } else {
      emiCalc =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const total = emiCalc * months;
    const interest = total - loanAmount;

    setEmi(Math.round(emiCalc));
    setTotalAmount(Math.round(total));
    setInterestAmount(Math.round(interest));
  }, [loanAmount, tenure, interestRate]);

  const data = [
    { name: 'Principal Amount', value: loanAmount },
    { name: 'Interest Amount', value: interestAmount },
  ];

  const COLORS = ['#1e40af', '#60a5fa'];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-xl mb-5 ">
      <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">
        Home Loan EMI Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <label className="block font-semibold">
              Loan Amount (₹): {loanAmount.toLocaleString()}
            </label>
            <input
              type="range"
              min={100000}
              max={100000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Tenure (Years): {tenure}
            </label>
            <input
              type="range"
              min={1}
              max={30}
              value={tenure}
              onChange={(e) => setTenure(+e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Interest Rate (% P.A.): {interestRate}%
            </label>
            <input
              type="range"
              min={0}
              max={15}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* EMI Info & Pie Chart */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Monthly Home Loan EMI</h3>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            ₹ {emi.toLocaleString()}
          </p>

          <ul className="space-y-2 text-gray-700 mb-4">
            <li>Principal Amount: ₹ {loanAmount.toLocaleString()}</li>
            <li>Interest Amount: ₹ {interestAmount.toLocaleString()}</li>
            <li>Total Payable: ₹ {totalAmount.toLocaleString()}</li>
          </ul>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={100}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
