const GoogleScholarIcon: React.FC = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Hat (mortarboard) */}
    <polygon points="12,3 2,9 12,15 22,9 12,3" />
    <line x1="12" y1="15" x2="12" y2="21" />
    <path d="M6 18c0-1.1.9-2 2-2h3" />
    <path d="M18 18c0-1.1-.9-2-2-2h-3" />
    <line x1="9" y1="21" x2="9" y2="18" />
    <line x1="15" y1="21" x2="15" y2="18" />
  </svg>
  );
};

export default GoogleScholarIcon;
