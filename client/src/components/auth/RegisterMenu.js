import Link from "next/link";

export default function RegisterMenu() {
  return (
    <section className="login-menu-section">
      <div className="login-menu-container-wrapper">
        <div className="login-menu-container">
          <div className="login-menu">
            <p className="login-menu-title">สมัครสมาชิก</p>
            <div className="login-menu-input">
              <div className="login-menu-input-item-email">
                <label htmlFor="email">ชื่อ</label>
                <input type="text" id="fname" placeholder="name" />
              </div>
              <div className="login-menu-input-item-email">
                <label htmlFor="email">นามสกุล</label>
                <input type="text" id="lname" placeholder="lastname" />
              </div>
              <div className="login-menu-input-item-email">
                <label htmlFor="email">อีเมล</label>
                <input type="text" id="email" placeholder="email" />
              </div>
              <div className="login-menu-input-item-password">
                <label htmlFor="password">รหัสผ่าน</label>
                <input type="password" id="password" placeholder="password" />
              </div>
              <div className="login-menu-input-item-confirm-password">
                <label htmlFor="password">ยืนยันรหัสผ่าน</label>
                <input type="password" id="confirm-password" placeholder="confirm password" />
              </div>
            </div>
            <Link href="#" className="login-menu-button">ยืนยันการสมัคร →</Link>
          </div>
        </div>
        <div className="login-menu-bussiness">
          <Link href="/bussiness_login">สมัครสมาชิกสำหรับผู้ประกอบการ →</Link>
          <Link href="/login">หรือ ลงชื่อเข้าใช้ →</Link>
        </div>
      </div>
    </section>
  )
}