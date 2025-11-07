import React from 'react';
import { Toolbar } from 'primereact/toolbar';


function AppToolbar() {
    return (
        <div className="row">
            <Toolbar 
                start={<i className="pi pi-ticket" style={{ fontSize: '2rem', color: '#2196f3' }}></i>}
                end={<h3>Sansamark</h3>}
            >
            </Toolbar>
        </div>
    )
}

export default AppToolbar;
