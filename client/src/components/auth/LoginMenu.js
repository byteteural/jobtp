import Link from "next/link";

export default function LoginMenu() {
  return (
    <section className="login-menu-section">
      <div className="login-menu-container">
        <div className="login-menu">
          <p className="login-menu-title">ลงชื่อเข้าใช้</p>
          <div className="login-menu-input">
            <div className="login-menu-input-item">
              <label htmlFor="email">อีเมล</label>
              <input type="text" id="email" placeholder="email" />
            </div>
            <div className="login-menu-input-item">
              <label htmlFor="password">รหัสผ่าน</label>
              <input type="password" id="password" placeholder="password" />
            </div>
          </div>
          <Link href="/login" className="login-menu-button">เข้าสู่ระบบ →</Link>
        </div>
      </div>
      <div className="login-menu-bussiness">
        <Link href="/register">ลงชื่อเข้าใช้สำหรับผู้ประกอบการ →</Link>
      </div>
    </section>
  )
}