const SpiralDot = () => (
  <svg
    className="floating-shape"
    width="90"
    height="90"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="1" fill="#0f172a">
      <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);
export default SpiralDot;
