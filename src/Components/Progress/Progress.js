import React , {useState} from 'react'
import './Progress.css'

const Progress = ( ) => {
    const [progress , setProgress] = useState(10)

    var i = 0;
const setProgressBar =() => {
        setProgress(move())
}

    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 60);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.Progress.width = width + "%";
            elem.innerHTML = width  + "%";
          }
        }
      }
    }
    return(
        <div>
<div id="myProgress">
  <div id="myBar">{progress}</div>
</div>

<br />
<button onclick={setProgressBar , console.log("button clicked")}>Click Me</button> 
        </div>
    )
}

export default Progress