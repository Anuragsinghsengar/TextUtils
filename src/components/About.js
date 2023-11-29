import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'

export default function About(props) {
  let myStyle = {
    backgroundColor : props.mode =="light"?"white":"#808080",
    color : props.mode == "light" ? "black" : "white"
  };
    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid black'
    // });
    
  //  const toggleHide = () => {
  //   if(myStyle.color == 'black'){
  //    setMyStyle({
  //       color : 'white',
  //       backgroundColor : 'black',
  //       border : '1px solid white'
  //    })
  //    setBtnText('Enable Light Mode');
  //   }else{
  //       setMyStyle({
  //           color : 'black',
  //           backgroundColor : 'white',
  //           border : '1px solid black'
  //        })
  //        setBtnText('Enable Dark Mode');
  //   }
  //  }
  return (
  <>
  <div class="accordion" id="accordionExample">
    <h2 className='my-2' style ={{color : props.mode =='light'?'black':'white'}}>About Us</h2>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About Application</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
       This is a simple application made with the help of react js which helps to analyze text in an effective manner so as to know more about it 
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Application Features</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        This application provides the features to covert any text from uppercase to lowercase and to lowercase to uppercase and to copy text, highlighting vowels, handling extra spaces. Also it provides the total number of words, characters and the minutes read.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        This application is free to use for everyone
      </div>
    </div>
  </div>
  {/* <button onClick = {toggleHide} type='button' className='btn btn-success my-2 mx-2'>{btnText}</button> */}
</div>
  </>
  )
}
