import styled from "styled-components";
const CheckContainer = styled.div`
  display: flex;
  > hr {
    width: 22%;
    height: 5px;
    border: none;
    border-radius: 5em;
  }
`;
const CalculateStrength = (pass) => {
  const length = pass.length;
  if (length < 8) return 0;
  if (length >= 8 && length < 10) return 1;
  if (length >= 10 && length < 12) return 2;
  if (length >= 12) return 3;
};
const PassCheck = ({ pass, touched }) => {
  const strength = touched ? CalculateStrength(pass) : -1;
  return (
    <>
      <CheckContainer>
        <hr
          style={{
            backgroundColor: "red",
            opacity: strength === 0 ? "100%" : "10%",
          }}
        />
        <hr
          style={{
            backgroundColor: "orange",
            opacity: strength === 1 ? "100%" : "10%",
          }}
        />
        <hr
          style={{
            backgroundColor: "yellowgreen",
            opacity: strength === 2 ? "100%" : "10%",
          }}
        />
        <hr
          style={{
            backgroundColor: "green",
            opacity: strength === 3 ? "100%" : "10%",
          }}
        />
      </CheckContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {strength === 0 && <div style={{ color: "red" }}>too weak</div>}
        {strength === 1 && <div style={{ color: "orange" }}>weak</div>}
        {strength === 2 && <div style={{ color: "yellowgreen" }}>strong</div>}
        {strength === 3 && <div style={{ color: "green" }}>very strong</div>}
      </div>
    </>
  );
};

export default PassCheck;
