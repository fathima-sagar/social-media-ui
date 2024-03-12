import { Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Authentication = () => {
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  console.log("path", location.pathname);

  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img
            className="h-full w-full"
            src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
          />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">Connect Social</h1>
                <p
                  style={{ marginBottom: "8px" }}
                  className="text-center text-sm w-[70&]"
                >
                  Connecting Lives, Sharing Stories: Your Social World, Your Way
                </p>
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
