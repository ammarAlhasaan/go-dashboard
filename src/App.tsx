import React from 'react';
import {Button} from "./components/button";
import {DashboardLayout} from "./components/dashboard-layout";
import {TfoDetails} from "./pages/TfoDetails";


function App() {
  return (
    <div className="ca-theme">
      <DashboardLayout>
        <TfoDetails />
      </DashboardLayout>

    </div>
  );
}

export default App;
