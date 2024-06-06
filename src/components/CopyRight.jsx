import React from "react";

const CopyRight = () => {
  const latestYear = new Date().getUTCFullYear();

  return (
    <footer className="py-10">
      <p className="text-xs text-center text-text_hover_color">
        Copyright © {latestYear} JevelinTheme - Theme by Shufflehound
      </p>
    </footer>
  );
};

export default CopyRight;
