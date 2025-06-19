const MoleculeSVG = () => (
  <svg
    className="floating-shape"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="10" fill="#0EA5E9" />
    <circle cx="20" cy="20" r="6" fill="#22C55E" />
    <circle cx="80" cy="30" r="5" fill="#A855F7" />
    <line x1="50" y1="50" x2="20" y2="20" stroke="#22C55E" />
    <line x1="50" y1="50" x2="80" y2="30" stroke="#A855F7" />
  </svg>
);
export default MoleculeSVG;
