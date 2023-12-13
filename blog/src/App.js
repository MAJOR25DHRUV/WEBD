import React, { useState } from "react";

export default function App() {
  // State variables: fn and sn
  const [fn, setFn] = useState(14);
  const [sn, setSn] = useState(15);

  return (
    <div className="outerdiv">
      {/* Display the sum of fn and sn */}
      <p>{fn + sn}</p>
    </div>
  );
}
