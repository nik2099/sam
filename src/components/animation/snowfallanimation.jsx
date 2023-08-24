const Snowfallanimation = ({color}) => {

    return (
        <>
         <style jsx>{`



.snowflakes {
  width: 100%;
  position: absolute;
  background-color: #fff;
  top: 0;
  overflow: hidden;
  height: 100vh;
}

i,
i:after,
i:before {
  background: red;
}
i {
  display: inline-block;
  -webkit-animation: snowflakes 3s linear 2s 20;
  -moz-animation: snowflakes 3s linear 2s 20;
  position: relative;
}
i:after,
i:before {
  height: 100%;
  width: 100%;
  content: ".";
  position: absolute;
  top: 0px;
  left: 0px;
  -webkit-transform: rotate(120deg);
}
i:before {
  -webkit-transform: rotate(240deg);
}

@-webkit-keyframes snowflakes {
  0% {
    -webkit-transform: translate3d(0, 0, 0) rotate(0deg) scale(0.6);
  }
  100% {
    -webkit-transform: translate3d(15px, 1200px, 0px) rotate(360deg) scale(0.6);
  }
}

.snowflakes i:nth-child(3n) {
  width: 16px;
  height: 4px;
  -webkit-animation-duration: 4s;
  -webkit-animation-iteration-count: 30;
  -webkit-transform-origin: right -45px;
}

.snowflakes i:nth-child(3n + 1) {
  width: 24px;
  height: 6px;
  -webkit-animation-duration: 6s;
  -webkit-animation-iteration-count: 45;
  -webkit-transform-origin: right -30px;
}

.snowflakes i:nth-child(3n + 2) {
  width: 32px;
  height: 8px;
  -webkit-animation-duration: 8s;
  -webkit-animation-iteration-count: 60;
  -webkit-transform-origin: right -15px;
}

/* different delays so they don't all start at the same time */
.snowflakes i:nth-child(7n) {
  opacity: 0.3;
  -webkit-animation-delay: 0s;
  -webkit-animation-timing-function: ease-in;
}
.snowflakes i:nth-child(7n + 1) {
  opacity: 0.4;
  -webkit-animation-delay: 1s;
  -webkit-animation-timing-function: ease-out;
}
.snowflakes i:nth-child(7n + 2) {
  opacity: 0.5;
  -webkit-animation-delay: 1.5s;
  -webkit-animation-timing-function: linear;
}
.snowflakes i:nth-child(7n + 3) {
  opacity: 0.6;
  -webkit-animation-delay: 2s;
  -webkit-animation-timing-function: ease-in;
}
.snowflakes i:nth-child(7n + 4) {
  opacity: 0.7;
  -webkit-animation-delay: 2.5s;
  -webkit-animation-timing-function: linear;
}
.snowflakes i:nth-child(7n + 5) {
  opacity: 0.8;
  -webkit-animation-delay: 3s;
  -webkit-animation-timing-function: ease-out;
}
.snowflakes i:nth-child(7n + 6) {
  opacity: 0.9;
  -webkit-animation-delay: 3.5s;
  -webkit-animation-timing-function: ease-in;
}

}




  
`}</style>
   
   <div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
           
        </>
        );
    };
    
    export default Snowfallanimation;
    