import smile from "./assets/images/smile.png";
import shine from "./assets/images/shine.png";

function InfoBox({ name, department }) {
  const parts = department.split(" ");
  const cls = parts[parts.length - 1];
  const dept = parts.slice(0, -1).join(" ");

  return (
    <div style={{
      border: "1.5px solid #000000",
      borderRadius: "0px",
      width: "180px",
      overflow: "hidden",
      backgroundColor: "#ffffff",
    }}>
      {/* 이미지 영역 */}
      <div style={{
        height: "130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        position: "relative",
        padding: "20px",
      }}>
        <img
          src={shine}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
          }}
        />
        <img
          src={smile}
          alt="smile"
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            objectFit: "contain",
            zIndex: 1,
          }}
        />
      </div>

      {/* 텍스트 영역 */}
<div style={{
  padding: "10px 13px 10px",
  backgroundColor: "#F8FBE7",
  textAlign: "left",
}}>
  <p style={{ fontWeight: "bold", margin: "0 0 5px", fontSize: "18px", color: "#000000" }}>
    {name}
  </p>
  <p style={{
    color: "#000000",
    margin: "0",          // 0 0 0px → 0
    lineHeight: "1.5",   // 추가
    fontSize: "12px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}>
    {dept}
  </p>
  <p style={{
    color: "#000000",
    margin: 0,
    lineHeight: "1.2",   // 추가
    fontSize: "12px",
    whiteSpace: "nowrap",
  }}>
    {cls}
  </p>
</div>
    </div>
  );
}

export default InfoBox;