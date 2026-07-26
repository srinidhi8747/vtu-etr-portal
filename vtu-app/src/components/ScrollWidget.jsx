import React from 'react';

export default function ScrollWidget() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-widget">
      <button className="scroll-btn" onClick={scrollToTop} title="Scroll to Top">
        ▲
      </button>
      <button className="scroll-btn" onClick={scrollToBottom} title="Scroll to Bottom">
        ▼
      </button>
    </div>
  );
}