import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Shallow() {
  const router = useRouter();
  useEffect(() => {
    router.push("/?counter=10", undefined, { shallow: true });
  }, []);
  return <div>Shallow</div>;
}

export default Shallow;
