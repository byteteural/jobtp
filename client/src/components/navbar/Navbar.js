"use client";
import Link from "next/link";
import React, { useState } from 'react';

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsNavVisible((prev) => !prev);
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link href="#!">JobTP</Link>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="nav-toggle"
              href="#!"
              onClick={handleToggle}
              className={isNavVisible ? 'active' : ''}
            >
              <span></span>
            </a>
          </div>
          <ul
            className="nav-list"
            style={{ display: isNavVisible ? 'block' : 'none' }}
          >
            <li><Link href="#!">ค้นหางาน</Link></li>
            <li><Link href="#!">เกี่ยวกับเรา</Link></li>
            <li><Link href="#!">โปรไฟล์</Link></li>
            <li><Link className="login" href="#!">ลงชื่อเข้าใช้</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
