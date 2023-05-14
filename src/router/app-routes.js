import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../modules/app-layout/app-layout";
import CustomerSetup from "../modules/customer-setup/customer-setup";
import ApiMapping from "../modules/api-mapping/api-mapping";
import CustomerSetupmodule from "../modules/customer-setup/customer_setup";
import PageNotFound from "../modules/pageNotFound/pageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<CustomerSetup />} />
        <Route path="/customerSetup" element={<CustomerSetup />} />
        <Route path="/apiMapping" element={<ApiMapping />} />
        <Route path="/overview" element={<CustomerSetupmodule />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
