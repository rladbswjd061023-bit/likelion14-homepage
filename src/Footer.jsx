import logo from "./assets/images/image2.png";
import icon from "./assets/images/image3.png";

function Footer() {
  return (
    <footer style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "24px 24px 24px 24px",
      backgroundColor: "rgb(255, 255, 255)",
      color: "#fff",
      marginTop: "80px",
    }}>
      {/* 왼쪽: 로고 + 주소 */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <img src={logo} alt="SKU LIKELION" style={{ height: "35px", marginBottom: "8px" }} />
      </div>
      {/* 오른쪽: 아이콘 */}
      <img src={icon} alt="아이콘" style={{ height: "45px" }} />
    </footer>
  );
}

export default Footer;