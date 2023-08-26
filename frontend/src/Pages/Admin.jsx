import React from "react";
import Button from '@mui/material/Button';


function Admin(){
    return (
        <div className="div2">
            <div className="center">
            <form>
                <p><h2>&emsp; Add parcel to tenants</h2></p>
                <p>
                    <label>&emsp;&emsp;&emsp; Select Date :
                        &emsp;<input type="date" />
                    </label>
                </p>
                <p>
                    <label>&emsp;&emsp;&emsp; Tracking Numbers :
                        &emsp;<input type="text" />
                    </label>
                </p>
                <p>
                    <label>&emsp;&emsp;&emsp; Owner's Name :
                        &emsp;<input type="text" />
                    </label>
                </p>
                <p>
                    <label>&emsp;&emsp;&emsp; Room's Numbers :
                        &emsp;<input type="text" />
                    </label>
                </p>
                <Button variant="contained" color="success">ADD</Button>
            </form>
           </div>
        </div>
    )
}

export default Admin;