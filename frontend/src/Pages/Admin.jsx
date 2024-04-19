import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function Admin() {
  const [data, setData] = useState({
    CreatedAt: "",
    OwnerId: "",
    PhoneNumber: "",
    RoomId: "",
    TrackingNo: "",
  });
  
  const handleSubmit = async (event) => {
    const payload = {...data}
    payload.OwnerId = +payload.OwnerId || 0
    console.log(payload)
    const response = await axios.post("http://localhost:8081/api/packages", [payload])
    console.log(response);
  };

  const onChange = (event) => {
    setData(prev => ({
        ...prev,
        [event.target.id]: event.target.value
    }))
  };

  return (
    <div className="div2">
      <div className="center">
        <form onSubmit={handleSubmit}>
          <h2>&emsp; Add parcel to tenants</h2>
          <p>
            <label>
              &emsp;&emsp;&emsp; Select Date : &emsp;
              <input type="date" id="CreatedAt" onChange={onChange} value={data.CreatedAt}/>
            </label>
          </p>
          <p>
            <label>
              &emsp;&emsp;&emsp; Tracking Numbers : &emsp;
              <input type="text" id="TrackingNo" onChange={onChange} value={data.TrackingNo}/>
            </label>
          </p>
          <p>
            <label>
              &emsp;&emsp;&emsp; Owner's Name : &emsp;
              <input type="text" id="OwnerId" onChange={onChange} value={data.OwnerId}/>
            </label>
          </p>
          <p>
            <label>
              &emsp;&emsp;&emsp; Room's Numbers : &emsp;
              <input type="text" id="RoomId" onChange={onChange} value={data.RoomId}/>
            </label>
          </p>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            ADD
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
