import { useState } from "react";
import TopSection from "./TopSection.jsx";
import InfoBox from "./InfoBox.jsx";
import eyesImg from "./assets/images/eyes.png";
import ideasImg from "./assets/images/ideas.png";
import dogImg from "./assets/images/dog.png";

const members14 = {
  운영진: {
    대표: [{ name: "윤희준", department: "소프트웨어학과 20학번" }],
    부대표: [{ name: "임다현", department: "소프트웨어학과 23학번" }],
    PO: [
      { name: "정영진", department: "디자인학부 비주얼디자인전공 20학번" },
      { name: "최운조", department: "비주얼디자인학전공 22학번" },
      { name: "임다현", department: "소프트웨어학과 23학번" },
      { name: "김정현", department: "아트앤테크놀로지학과 23학번" },
    ],
    FRONTEND: [
      { name: "심서현", department: "소프트웨어학과 23학번" },
      { name: "정목진", department: "소프트웨어학과 22학번" },
      { name: "김현수", department: "소프트웨어학과 25학번" },
    ],
    BACKEND: [
      { name: "금시언", department: "소프트웨어학과 21학번" },
      { name: "신채린", department: "소프트웨어학과 23학번" },
      { name: "김나경", department: "소프트웨어학과 공공인재학부 22학번" },
    ],
  },
  아기사자: {
    PO: [
      { name: "조재호", department: "소프트웨어학과 21학번" },
      { name: "한슬기", department: "미래융합학부 IT계열 25학번" },
      { name: "박세은", department: "미래융합학부 IT계열 25학번" },
      { name: "구나영", department: "비주얼디자인학과 24학번" },
      { name: "엄다영", department: "아트앤테크놀로지 26학번" },
      { name: "조민서", department: "미래융합학부2 26학번" },
      { name: "강서연", department: "시각정보디자인전공 22학번" },
      { name: "이정민", department: "비주얼디자인학과 23학번" },
    ],
    FRONTEND: [
      { name: "최서연", department: "소프트웨어학과 24학번" },
      { name: "백윤관", department: "소프트웨어학과 22학번" },
      { name: "김서현", department: "소프트웨어학과 24학번" },
      { name: "김민솔", department: "소프트웨어학과 22학번" },
      { name: "김우현", department: "소프트웨어학과 23학번" },
      { name: "홍윤지", department: "소프트웨어학과 23학번" },
      { name: "한주은", department: "아동학과 21학번" },
      { name: "김승민", department: "소프트웨어학과 22학번" },
      { name: "양우석", department: "소프트웨어학과 23학번" },
      { name: "정시훈", department: "소프트웨어학과 23학번" },
      { name: "장서후", department: "소프트웨어학과 22학번" },
      { name: "양희창", department: "소프트웨어학과 21학번" },
      { name: "장경무", department: "전자컴퓨터공학과 22학번" },
      { name: "김윤정", department: "파이낸스앤테크학과 25학번" },
    ],
    BACKEND: [
      { name: "이주희", department: "전자컴퓨터공학과 23학번" },
      { name: "최아원", department: "소프트웨어학과 23학번" },
      { name: "조민호", department: "소프트웨어학과 24학번" },
      { name: "오지우", department: "소프트웨어학과 23학번" },
      { name: "남궁강", department: "컴퓨터학과 20학번" },
      { name: "이정능", department: "컴퓨터학과 22학번" },
      { name: "최예윤", department: "소프트웨어학과 23학번" },
      { name: "이충환", department: "컴퓨터학과 22학번" },
      { name: "김민호", department: "컴퓨터학과 22학번" },
      { name: "나형준", department: "소프트웨어학과 21학번" },
      { name: "김정모", department: "소프트웨어학과 21학번" },
      { name: "김태현", department: "소프트웨어학과 23학번" },
    ],
  },
};

const dummy = Array(5).fill({ name: "김멋사", department: "소프트웨어학과 23학번" });
const oldMembers = { PO: dummy, FRONTEND: dummy, BACKEND: dummy };

const genData = {
  "14기": members14,
  "13기": oldMembers,
  "12기": oldMembers,
  "11기": oldMembers,
};

const sectionLabelStyle = {
  fontSize: "20px",
  color: "#000000",
  fontWeight: "bold",
  marginBottom: "12px",
  marginTop: "0",
  textAlign: "left",
};

const titleStyle = {
  fontSize: "26px",
  marginBottom: "47px",
  color: "#000000",
  fontWeight: "bold",
  textAlign: "left",
  padding: "24px 0px 24",
};

const decorImgStyle = {
  position: "absolute",
  right: "-100px",   // 오른쪽으로 밀어서 잘리게
  zIndex: -1,        // 구성원 상자 뒤로
  pointerEvents: "none",
  opacity: 0.8,
};

function MemberSection({ title, members }) {
  return (
    <div style={{ padding: "24px 86px 0" }}>
      <h3 style={titleStyle}>{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {members.map((member, idx) => (
          <InfoBox key={idx} name={member.name} department={member.department} />
        ))}
      </div>
    </div>
  );
}

function Members() {
  const [activeGen, setActiveGen] = useState("14기");
  const data = genData[activeGen];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* 배경 이미지들 */}
      <img src={eyesImg} alt="" style={{ ...decorImgStyle, top: "30px", width: "550px" }} />
      <img src={ideasImg} alt="" style={{ ...decorImgStyle, top: "990px", right: "650px", width: "612px" }} />
      <img src={dogImg} alt="" style={{ ...decorImgStyle, top: "2400px", right: "400px", width: "550px" }} />

      <TopSection activeGen={activeGen} setActiveGen={setActiveGen} />

      {activeGen === "14기" ? (
        <>
          {/* 운영진 섹션 */}
          <div style={{ padding: "24px 86px 0" }}>
            <h3 style={titleStyle}>운영진</h3>

            {/* 대표/부대표 */}
            <div style={{ marginBottom: "83px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <p style={{ ...sectionLabelStyle, marginBottom: "12px" }}>대표</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {data.운영진.대표.map((member, idx) => (
                      <InfoBox key={idx} name={member.name} department={member.department} />
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ ...sectionLabelStyle, marginBottom: "12px" }}>부대표</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {data.운영진.부대표.map((member, idx) => (
                      <InfoBox key={idx} name={member.name} department={member.department} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PO/FRONTEND/BACKEND */}
            {["PO", "FRONTEND", "BACKEND"].map((part) => (
              <div key={part} style={{ marginBottom: "83px" }}>
                <p style={sectionLabelStyle}>{part}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  {data.운영진[part].map((member, idx) => (
                    <InfoBox key={idx} name={member.name} department={member.department} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 아기사자 섹션 */}
          <div style={{ padding: "24px 86px 0" }}>
            <h3 style={titleStyle}>아기사자</h3>
            {Object.entries(data.아기사자).map(([part, people]) => (
              <div key={part} style={{ marginBottom: "83px" }}>
                <p style={sectionLabelStyle}>{part}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  {people.map((member, idx) => (
                    <InfoBox key={idx} name={member.name} department={member.department} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        ["PO", "FRONTEND", "BACKEND"].map((part) => (
          <MemberSection key={part} title={part} members={data[part]} />
        ))
      )}

      <div style={{ height: "80px" }} />
    </div>
  );
}

export default Members;