import React from "react";

import "./style.css";

function FadeInScroll(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([element]) => {
        if (element.isIntersecting) {
          observer.disconnect();
          setTimeout(() => setVisible(true), props.delay ?? 0);
        }
      },
      {
        threshold: props.threshold ?? 0.4,
      }
    );
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInScroll;
