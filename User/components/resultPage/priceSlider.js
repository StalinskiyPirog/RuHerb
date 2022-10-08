import {useEffect, useRef} from "react";

export default function PriceSlider() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
      
     useEffect(() => {
      function getVals(){
        // Get slider values
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        console.log(slides)
          let slide1 = parseFloat( slides[0].value );
          let slide2 = parseFloat( slides[1].value );
        // Neither slider will clip the other, so make sure we determine which is larger
        if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
        
        let displayElement = parent.getElementsByClassName("rangeValues")[0];
            displayElement.innerHTML = "$" + slide1 
            let displayElement2 = document.querySelector('.rangeValues2')
            displayElement2.innerHTML =  "$" + slide2;
      }



      window.onload = function(){
        // Initialize Sliders
        let sliderSections = document.getElementsByClassName("range-slider");
            for( let x = 0; x < sliderSections.length; x++ ){
              let sliders = sliderSections[x].getElementsByTagName("input");
              for( let y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
                  sliders[y].oninput = getVals;
                  // Manually trigger event first time to display values
                  sliders[y].oninput();
                }
              }
            }
      }
      ref1.current.setAttribute('value', 1000)
      ref2.current.setAttribute('value', 50000)
     })

  return (
    <>

<div>
  


    <div className="py-12 px-4">
<div className="lg:max-w-[452px] md:max-w-[343px] max-w-[343px] mx-auto container  px-4   ">
    <div className="mx-auto w-full mb-3 py-6">
        <p className="text-xs text-center font-medium leading-3 text-gray-800 pb-2">Price Range</p>
        <p className="text-xs text-center leading-3 text-gray-600">Select your minimum and maximum price range</p>
    </div>

<div className="range-slider relative">
  <input  ref={ref1} min="1000" max="50000" step="500" type="range"/>
  <input  ref={ref2} min="1000" max="50000" step="500" type="range"/>
  <div className="flex gap-52 mt-4 absolute top-10 z-10">
  <span className="rangeValues w-[50px]"></span>
  <span className="rangeValues2 w-[50px]"></span>
  </div>
</div>
    </div>
</div>



<style>
    {
      `
      body{
    background:rgb(243 244 246);
}


.range-slider {
  width: 311px;
  text-align: center;
  position: relative;
}
.rangeValues {
    display: block;
    margin-left: 58px;
  }

input[type=range] {
  -webkit-appearance: none;
  border: 1px solid white;
  width: 311px;
  position: absolute;
  left: 53px;

}

input[type=range]::-webkit-slider-runnable-track {
  width: 311px;
  height: 8px;
  background: rgb(67 56 202); 

  border: none;
  border-radius: 3px;

}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: rgb(67 56 202);

  border: 6px solid  rgb(248 250 252);
  margin-top: -8px;
    cursor: pointer;
      position: relative;
    z-index: 1;
   
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
 
    background: rgb(67 56 202); 
}

input[type=range]::-moz-range-track {
  width: 311px;
  height: 8px;
  background: rgb(67 56 202);
  border: none;
  border-radius: 3px;
}

input[type=range]::-moz-range-thumb {
  border: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: rgb(67 56 202);
  
}


/*hide the outline behind the border*/

input[type=range]:-moz-focusring {
  outline: 1px solid white;
  outline-offset: -1px;
}

input[type=range]::-ms-track {
  width: 311px;
  height: 8px;
  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
  background: transparent;
  /*leave room for the larger thumb to overflow with a transparent border */
  border-color: transparent;
  border-width: 6px 0;
  /*remove default tick marks*/
  color: transparent;
    z-index: -4;

}

input[type=range]::-ms-fill-lower {
  background: #777;
  border-radius: 10px;
}

input[type=range]::-ms-fill-upper {
  background: #ddd;
  border-radius: 10px;
}

input[type=range]::-ms-thumb {
  border: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: rgb(67 56 202);
  
}

input[type=range]:focus::-ms-fill-lower {
  background: #888;
}

input[type=range]:focus::-ms-fill-upper {
  background: #ccc;
}
`
    }
  </style>
</div>
      
    </>
  )
}
