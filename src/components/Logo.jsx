export default function Logo() {
  return (
    <div className="logo-container">
      <svg width="60" height="60" viewBox="0 0 60 60" className="logo-svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="60" height="60" rx="12" fill="url(#logoGradient)" />
        <text x="30" y="40" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif">
          IK
        </text>
      </svg>
      <span className="logo-text">Desenvolvedor Fullstack</span>
    </div>
  )
}