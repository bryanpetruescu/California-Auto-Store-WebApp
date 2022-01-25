import React from 'react';
import '../../App.css';
import AnalyticsNav from '../Analytics-nav';
import Menubar from '../Menubar';

function Analytics() {
    return (
        <div>
            <Menubar/>
            Hello this is the temp Analytics page.
            <div>
                <AnalyticsNav/>
                </div>
        </div>
    );
}

export default Analytics;