import React from "react";

const PriceList = () => {
  return (
    <div className="max-w-4xl mx-auto py-3">
      <table className="w-full border border-gray-300 ">
        <thead>
          <tr className="bg-blue-150 border-b border-gray-300">
            <th className="px-4 py-2 w-2/3">Service</th>
            <th className="px-4 py-2 w-1/3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 text-center">HairCut design & Beard </td>
            <td className="px-4 py-2 text-center">20,000₩</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 text-center">Haircut S design</td>
            <td className="px-4 py-2 text-center">15,000₩</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 text-center">Hair Dye</td>
            <td className="px-4 py-2 text-center">15,000₩</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 text-center">Beard &Line Up</td>
            <td className="px-4 py-2 text-center">10,000₩</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 text-center">Extra</td>
            <td className="px-4 py-2 text-center">5,000₩</td>
          </tr>
          {/* add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
