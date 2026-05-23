function Button({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: isActive ? "#b8e04a" : "#fff",
        color: isActive ? "#fff" : "#333",
        fontWeight: isActive ? "bold" : "normal",
        cursor: "pointer",
        fontSize: "13px",
      }}
    >
      {label}
    </button>
  );
}

export default Button;