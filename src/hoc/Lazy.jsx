import React, { useEffect, useRef, useState } from "react";
import LazyLoading from "../components/LazyLoading";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Lazy = ({ ...props }) => {
  const ref = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ref.current.getBoundingClientRect();
  }, []);

  const handleLoad = () => {
    setLoading(true);
  };

  const rect = ref.current?.getBoundingClientRect();
  return (
    <div className="lazyBody">
      {!loading && <LazyLoading width={rect?.width} height={rect?.height} />}
      <img ref={ref} {...props} onLoad={handleLoad} />
    </div>
  );
};

export default Lazy;
