const FloatingIcons = () => {
  const icons = ["⚛️", "🚀", "💻", "🎨", "⚡"];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20 animate-float"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 2) * 40}%`,
            animationDelay: `${index * 1.5}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;