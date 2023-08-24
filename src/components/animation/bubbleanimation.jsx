const Bubbleanimation = ({color}) => {

    return (
        <>
         <style jsx>{`
  .area{
    width: 100%;
    height:100vh;
    position: absolute;
    
    background-color:#fff;
}
            #cl,
            #cl_2,
            #cl_3,
            #cl_4,
            #cl_5 {
            transform-box: fill-box;
            transform-origin: center;
            animation: move__right_angle 25s linear infinite;
            }

            @keyframes move__right_angle {
            0% {
                opacity: 0;
            }

            5% {
                opacity: 1;
            }

            100% {
                opacity: 1;
                transform: translate(1920px, -1080px);
            }
            }

            #cm,
            #cm_2,
            #cm_3,
            #cm_4,
            #cm_5,
            #cm_6,
            #cm_7,
            #cm_8,
            #cm_9,
            #cm_10,
            #cm_11 {
            transform-box: fill-box;
            transform-origin: center;
            animation: move__right_angle 50s linear infinite;
            }

            #csm,
            #csm_2,
            #csm_3,
            #csm_4,
            #csm_5,
            #csm_6 {
            transform-box: fill-box;
            transform-origin: center;
            animation: move__right_angle 75s linear infinite;
            }

            #cssm,
            #cssm_2,
            #cssm_3 {
            transform-box: fill-box;
            transform-origin: center;
            animation: move__right_angle 100s linear infinite;
            }

            
            `}</style>
   
<div className="area">
   <svg width="100%" height="100vh" viewBox="0 0 1920 1280" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="Screen">
        <circle id="cssm" r="32" transform="matrix(-1 0 0 1 1092 164)" fill={color} fill-opacity=".85" />
        <circle id="cssm_2" cx="124" cy="570" r="40" fill={color} fill-opacity=".85" />
        <circle id="cssm_3" cx="1298" cy="1134" r="34" fill={color} fill-opacity=".85" />
        <circle id="csm" cx="1442.65" cy="196" r="46" fill={color} fill-opacity=".85" />
        <circle id="csm_2" cx="1720" cy="714" r="58" fill={color} fill-opacity=".85" />
        <circle id="csm_3" cx="306" cy="824" r="56" fill={color} fill-opacity=".85" />
        <circle id="csm_4" cx="1504" cy="600" r="58" fill={color} fill-opacity=".85" />
        <circle id="csm_5" cx="846" cy="428" r="48" fill={color} fill-opacity=".85" />
        <circle id="csm_6" cx="632" cy="1088" r="60" fill={color} fill-opacity=".85" />
        <circle id="cm" cx="1097.14" cy="1014" r="74" fill={color} fill-opacity=".85" />
        <circle id="cm_2" cx="886.329" cy="1184.61" r="58.3294" fill={color} fill-opacity=".85" />
        <circle id="cm_3" cx="1662" cy="1088" r="80" fill={color} fill-opacity=".85" />
        <circle id="cm_4" cx="886.329" cy="801.14" r="82" fill={color} fill-opacity=".85" />
        <circle id="cm_5" cx="498" cy="508" r="74" fill={color} fill-opacity=".85" />
        <circle id="cm_6" cx="692" cy="628.329" r="58.3294" fill={color} fill-opacity=".85" />
        <circle id="cm_7" cx="1103.14" cy="544" r="68" fill={color} fill-opacity=".85" />
        <circle id="cm_8" cx="1138" cy="718.4" r="53.6" fill={color} fill-opacity=".85" />
        <circle id="cm_9" cx="1756" cy="358" r="70" fill={color} fill-opacity=".85" />
        <circle id="cm_10" cx="582" cy="164" r="72" fill={color} fill-opacity=".85" />
        <circle id="cm_11" cx="180" cy="1122" r="82" fill={color} fill-opacity=".85" />
        <circle id="cl" r="104" fill={color} fill-opacity=".85" />
        <circle id="cl_2" cx="582" cy="861.671" r="120" fill={color} fill-opacity=".85" />
        <circle id="cl_3" cx="925.57" cy="248.15" r="97.5701" fill={color} fill-opacity=".85" />
        <circle id="cl_4" cx="1430" cy="858" r="132" fill={color} fill-opacity=".85" />
        <circle id="cl_5" cx="1381.33" cy="413.327" r="107.327" fill={color} fill-opacity=".85" />
    </g>
</svg>
</div>
           
        </>
        );
    };
    
    export default Bubbleanimation;
    