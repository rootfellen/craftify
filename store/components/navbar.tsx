import React from "react";
import Container from "./ui/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <Link href="/">
          <p>STORE</p>
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
