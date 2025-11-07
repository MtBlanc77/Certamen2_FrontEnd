import React from 'react';
import { Toolbar } from 'primereact/toolbar';


function AppToolbar() {
    return (
        <div className="row">
            <Toolbar 
                start={<h3>Sansamark</h3>}
                end={<i className="pi pi-ticket" style={{ fontSize: '2rem', color: '#2196f3' }}></i>}
            >
            </Toolbar>
        </div>
    )
}

export default AppToolbar;
