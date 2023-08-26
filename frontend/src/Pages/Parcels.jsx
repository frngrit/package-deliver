import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useState } from "react";

function Parcels() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:8081/api/packages");
        const { data } = result;
        setParcels(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getData();
  }, []);

  console.log(parcels);

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
          {parcels.map((value, index) => {
            return (
              <tr key={index}>
                <td className="td">{value.CreatedAt}</td>
                <td className="td">{value.TrackingNo}</td>
                <td className="td">{value.OwnerId}</td>
                <td className="td">{value.RoomId}</td>
                <td className="td">
                  <Checkbox color="success" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Parcels;
