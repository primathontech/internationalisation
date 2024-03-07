'use client';

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ position: 'relative', backgroundColor: "#D3D3D3", padding: "10px", marginBottom: "10px" }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end" }}>
        <div onClick={handleDropdownToggle} style={{ cursor: 'pointer' }}>
          Language
        </div>
        {isDropdownOpen && (
          <div style={{ position: 'absolute', top: '100%', right: 0, display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #ccc' }}>
            <Link href="/" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>English</div>
            </Link>
            <Link href="/hi" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Hindi</div>
            </Link>
            <Link href="/mr" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Marathi</div>
            </Link>
            <Link href="/ta" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Tamil</div>
            </Link>
            <Link href="/te" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Telugu</div>
            </Link>
            <Link href="/pa" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Punjabi</div>
            </Link>
            <Link href="/gu" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Gujrati</div>
            </Link>
            <Link href="/kn" passHref style={{ textDecoration: "none", padding: "10px", color:"#008000" }}>
              <div>Kannada</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
