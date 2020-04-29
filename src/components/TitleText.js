import React from 'react';

const TitleText = () => {
    const d = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const d_string = `M 0,0 C 0,175 ${d},175 ${d},0`
    return (
    <svg id="titleText">
        <circle id="curve" cx="50%" cy="50%" r="50%" stroke="black" stroke-width="3" fill="red"></circle>
        <text  width="100%" style={{"transform":"translate3d(0,0,0)"}}>
            <textPath textAnchor="middle" startOffset="25%" style={{"transform":"translate3d(0,0,0)"}} alignment-baseline="top" xlinkHref="#curve"  id="text-path">Ben Winchester</textPath>
        </text>
    </svg>
)}

export default TitleText;