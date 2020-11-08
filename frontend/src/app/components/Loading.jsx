import React from "react";
import BlackBackgroundPanel from "./BlackBackgroundPanel";
import loading from "./style/loading.gif";

export default function Loading() {
  return (
    <BlackBackgroundPanel>
      <img src={loading} alt='Loading...' />
    </BlackBackgroundPanel>
  );
}
