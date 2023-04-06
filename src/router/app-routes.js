import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../modules/app-layout/app-layout";
import CustomerSetup from "../modules/customer-setup/customer-setup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<CustomerSetup/>} />

        {/* <Route path={"*"} element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
