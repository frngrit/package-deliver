import React from "react";
import Checkbox from '@mui/material/Checkbox';


function Parcels() {
  return (
    <div className="div">
      <table className="table" width="100%">
        <thead>
          <tr>
            <th>Date</th>
            <th>Parcels</th>
            <th>Name</th>
            <th>Room</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td">26/08/2023</td>
            <td className="td">TH2332312134</td>
            <td className="td">K'Frank</td>
            <td className="td">5/191</td>
            <td className="td">
              <Checkbox color="success" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Parcels;
