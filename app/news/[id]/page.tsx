"use client";

import React from "react";

function articleID({ params }) {

  const {id} = React.use(params)

  return <div>{id}</div>;
}

export default articleID;
