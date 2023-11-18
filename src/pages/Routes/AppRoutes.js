import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import Home from "../Home";
import AboutUs from "../FooterComponents/AboutUs";
import RequireAuth from "./requireAuth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="login" element={<LoginPage />} />
        <Route path="signUp" element={<SignupPage />} />
        <Route path="forgotPassword" element={<ForgotPassword />} /> */}
        {/* <Route
          path="unauthorized"
          element={
            <div style={{ textAlign: "center", backgroundColor: "grey" }}>
              unauthorized
            </div>
          }
        /> */}
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus" element={<AboutUs />} /> */}
        {/* <Route path="patientOverview" element={<Home />} />
        <Route path="patientOverview" element={<Home />} /> */}

        {/* <Route element={<RequireAuth allowedRoles={["Admin", "Customer"]} />}>
          <Route index element={<Home />} />
        </Route> */}
        {/* <Route
          path="patientOverview"
          element={
            <RequireAuth allowedRoles={["Clinician", "SuperAdmin", "Admin"]} />
          }
        >
          <Route index element={<PatientOverview />} />
        </Route> */}

        {/* <Route path="*" element={<h1>404</h1>} /> */}
      </Route>
    </Routes>
  );
};
export default AppRoutes;
