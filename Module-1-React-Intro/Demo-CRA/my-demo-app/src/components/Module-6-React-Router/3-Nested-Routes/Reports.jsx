// Reports.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import DailyReports from './components/Module-6-React-Router/3-Nested-Routes/DailyReports';
import MonthlyReports from './components/Module-6-React-Router/3-Nested-Routes/MonthlyReports';

const Reports = () => {
    return (
        <div>
            <h2>Reports</h2>
            <nav>
                <ul>
                    <li><Link to="daily">Daily Reports</Link></li>
                    <li><Link to="monthly">Monthly Reports</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="daily" element={<DailyReports />} />
                <Route path="monthly" element={<MonthlyReports />} />
            </Routes>
        </div>
    );
};

export default Reports;
