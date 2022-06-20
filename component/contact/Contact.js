import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Contact() {
  const router = useRouter();
  useEffect(() => {
    // router.push("/?counter=10", undefined, { shallow: true });
  }, []);
  return <div>Contact</div>;
}

export default Contact;
