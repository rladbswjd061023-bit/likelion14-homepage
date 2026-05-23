import { Link } from "react-router-dom";
import logo from "../../assets/images/image1.png";

function Header() {
  const navItems = [
    { label: "지원하기", path: "/recruit" },
    { label: "프로젝트", path: "/project" },
    { label: "구성원", path: "/members" },
  ];

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        borderBottom: "1px solid #000000",
        height: "60px",
      }}
    >
      {/* 로고 + 텍스트 */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          color: "inherit",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderRight: "1px solid #000000",
        }}
      >
        <img src={logo} alt="멋사 로고" style={{ height: "40px" }} />
        <span style={{ fontSize: "15px", fontWeight: "bold", color: "#000000" }}>
          멋쟁이사자처럼 서경대학교
        </span>
      </Link>

      {/* 지원하기, 프로젝트 */}
      <nav style={{ display: "flex", alignItems: "stretch" }}>
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "#000000",
              fontSize: "12px",
              fontWeight: "bold", 
              padding: "0 28px",
              borderLeft: idx === 0 ? "1px solid #000000" : "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* 로그인/회원가입 */}
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#000000",
            fontSize: "12px",
            fontWeight: "bold",   
            padding: "0 28px",
            borderLeft: "1px solid #000000",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          로그인/회원가입
        </Link>
      </nav>
    </header>
  );
}

export default Header;