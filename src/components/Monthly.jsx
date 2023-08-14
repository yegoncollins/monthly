import React, { useState } from 'react';

const Monthly = () => {
  const salesData = [
  {
    "data": [
      {
        "average_price_per_item_sold": 300,
        "item": "data-y",
        "month": "June",
        "original_price": 300,
        "profit_month": 0,
        "quantity_sold": 9,
        "total": 2700
      },
      {
        "average_price_per_item_sold": 3000,
        "item": "datax",
        "month": "June",
        "original_price": 3000,
        "profit_month": 0,
        "quantity_sold": 6,
        "total": 18000
      },
      {
        "average_price_per_item_sold": 300,
        "item": "pillow",
        "month": "June",
        "original_price": 300,
        "profit_month": 0,
        "quantity_sold": 23,
        "total": 6900
      },
      {
        "average_price_per_item_sold": 242.5,
        "item": "socks",
        "month": "June",
        "original_price": 300,
        "profit_month": -3960,
        "quantity_sold": 22,
        "total": 2640
      },
      {
        "average_price_per_item_sold": 1200,
        "item": "sweater",
        "month": "June",
        "original_price": 1200,
        "profit_month": 0,
        "quantity_sold": 2,
        "total": 2400
      },
      {
        "average_price_per_item_sold": 300,
        "item": "NewsDesk",
        "month": "July",
        "original_price": 300,
        "profit_month": 0,
        "quantity_sold": 2,
        "total": 600
      },
      {
        "average_price_per_item_sold": 320,
        "item": "data-y",
        "month": "July",
        "original_price": 300,
        "profit_month": 20,
        "quantity_sold": 1,
        "total": 320
      },
      {
        "average_price_per_item_sold": 3002.72,
        "item": "datax",
        "month": "July",
        "original_price": 3000,
        "profit_month": 5.45,
        "quantity_sold": 2,
        "total": 6005.45
      },
      {
        "average_price_per_item_sold": 300,
        "item": "pillow",
        "month": "July",
        "original_price": 300,
        "profit_month": 0,
        "quantity_sold": 5,
        "total": 1500
      },
      {
        "average_price_per_item_sold": 304,
        "item": "socks",
        "month": "July",
        "original_price": 300,
        "profit_month": 40,
        "quantity_sold": 7,
        "total": 2140
      }
    ],
    "profit_year": -3894.55,
    "year": 2023
  }
];

  const [selectedMonth, setSelectedMonth] = useState('All');

  const handleMonthFilterChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredSalesData = selectedMonth === 'All'
    ? salesData[0].data
    : salesData[0].data.filter((sale) => sale.month === selectedMonth);

  const totalMonthProfit = filteredSalesData.reduce((total, sale) => total + sale.profit_month, 0);
  const totalYearProfit = salesData[0].profit_year;

  return (
    <div className="max-w-[870px] mx-auto item-center flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className='text-white text-xl'>Monthly Sales Data</h1>
            <div className="flex justify-end mb-4">
              <label className="text-white pr-2">Filter by Month:</label>
              <select
                className="px-2 py-1 rounded-md bg-neutral-700 border border-neutral-600 text-white"
                value={selectedMonth}
                onChange={handleMonthFilterChange}
              >
                <option value="All">All</option>
                <option value="June">June</option>
                <option value="July">July</option>
                {/* Add more months if needed */}
              </select>
            </div>
            <table className='min-w-full text-left text-sm font-light text-teal-50 border-r border-l dark:border-neutral-500'>
              <thead className="border-b font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Item</th>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Month</th>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Quantity Sold</th>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Price per Item</th>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Original Price</th>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Total Revenue</th>
                  <th scope="col" className="px-6 py-4 border-r dark:border-neutral-500">Gross Profit</th>
                </tr>
              </thead>
              <tbody>
                {filteredSalesData.map((sale, index) => (
                  <tr className="border-b dark:border-neutral-500 transition duration-300 ease-in-out hover:bg-neutral-500" key={index}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium border-r dark:border-neutral-500">{sale.item}</td>
                    <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">{sale.month}</td>
                    <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">{sale.quantity_sold}</td>
                    <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">{sale.average_price_per_item_sold}</td>
                    <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">{sale.original_price}</td>
                    <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">{sale.total}</td>
                    <td className="whitespace-nowrap px-6 py-4 border-r dark:border-neutral-500">{sale.profit_month}</td>
                  </tr>
                ))}
                <tr className="border-b dark:border-neutral-500">
                  <td colSpan="6" className="px-6 py-4 font-medium">Total for {selectedMonth === 'All' ? 'All Months' : selectedMonth}</td>
                  <td className="px-6 py-4">{totalMonthProfit}</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td colSpan="6" className="px-6 py-4 font-medium">Total for the Year</td>
                  <td className="px-6 py-4">{totalYearProfit}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monthly;