import Button from "./Button.jsx";

function TopSection({ activeGen, setActiveGen }) {
  return (
    <div style={{ padding: "40px 86px 0" }}>
      
      {/* 제목 - 가운데 정렬 + 모서리 네모 */}
      <div style={{ textAlign: "left", marginBottom: "12px" }}>
        <div style={{
          display: "inline-block",
          border: "2px solid #333",
          padding: "8px 24px",
          position: "relative",
        }}>
          <span style={{ position: "absolute", top: "-5px", left: "-5px", width: "8px", height: "8px", backgroundColor: "#333" }} />
          <span style={{ position: "absolute", top: "-5px", right: "-5px", width: "8px", height: "8px", backgroundColor: "#333" }} />
          <span style={{ position: "absolute", bottom: "-5px", left: "-5px", width: "8px", height: "8px", backgroundColor: "#333" }} />
          <span style={{ position: "absolute", bottom: "-5px", right: "-5px", width: "8px", height: "8px", backgroundColor: "#333" }} />
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>구성원</h2>
        </div>
      </div>

      {/* 부제목 - 가운데 정렬 */}
      <p style={{ color: "#000000", fontSize: "13px", margin: "0 0 40px", textAlign: "left" }}>
        서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.
      </p>

      {/* 버튼 - 왼쪽 정렬 */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "28px", borderColor: "#000000" }}>
        {["14기", "13기", "12기", "11기"].map((gen) => (
          <Button
            key={gen}
            label={gen}
            isActive={activeGen === gen}
            onClick={() => setActiveGen(gen)}
          />
        ))}
      </div>
      <hr style={{ borderColor: "#eee", margin: "0 -40px" }} />
    </div>
  );
}

export default TopSection;