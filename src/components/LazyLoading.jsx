import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LazyLoading = ({width, height}) => {

    return(
        <div className="lazyLoading" style={{width:width, height:height}}>
            <ClipLoader className="center-text" loading={true} color={"#FF7426"} size={100} />
        </div>
    )
}

export default LazyLoading