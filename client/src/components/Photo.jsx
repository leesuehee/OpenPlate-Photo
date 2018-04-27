import React from 'react';
import Handle_one_thru_Eight_wo_five_seven from './photo-views/Handle_one_thru_Eight_wo_five_six.jsx';

let Photo = function(props) {
  let hsize;
  let wsize;
  let photoLen = props.photos.length; 
  
  if (photoLen === 5) {hsize = '150px'; wsize = hsize
  } else if (photoLen === 7) {hsize = '90px'; wsize = hsize; 
  } else if (photoLen >= 9) {hsize = "135px"; wsize = hsize; 
  } 

  else if (photoLen <= 8 && photoLen !== 5 && photoLen !== 7) {
    return (
      <div>
        <Handle_one_thru_Eight_wo_five_seven pic={props.photos}/>
      </div>
    )
  } else {// photoLen is 5,7,9+
    let pic = props.photos 
      if (photoLen === 5) {
        let styles1 = {position: 'absolute', top:'0px', left:'2px'}
        let styles2 = {position: 'absolute',top:'152px', left:'0px'}
        let styles3 = {position: 'absolute',top:'0px', left:'152px'}
        let styles4 = {position: 'absolute',top: '0px', left:'452px'}
        let styles5 = {position: 'absolute',top: '152px',left:'450px'}

      // RETURN FOR 5 
        return (
          <div className = 'photogallery'>
            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles1}>
                <img className = 'pic' onClick = {props.click} src = {pic[0].src} height = {hsize} width = {wsize}/>
                <p className = 'text'> {pic[0].txt_description}</p>
              </div>  
            </div>         
      
            <div className = 'photo'>
              <div className = 'pic-wrapper'  style = {styles2}>
                <img className = 'pic' onClick = {props.click} src = {pic[1].src} height = {wsize} width = {wsize}/>
                <p className = 'text'> {pic[1].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles3}>
                <img className = 'pic' onClick = {props.click} src = {pic[2].src} height = '300px' width = '300px'/>
                <p className = 'text'> {pic[2].txt_description}</p>
              </div>
            </div>
        
            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles4}>
                <img className = 'pic' onClick = {props.click} src = {pic[3].src} height = {hsize} width = {wsize}/>
                <p className = 'text'> {pic[3].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles5}>
                <img className = 'pic' onClick = {props.click} src = {pic[4].src} height = {hsize} width = {wsize}/>
                <p className = 'text'> {pic[4].txt_description}</p>
              </div>
            </div>

          </div>
        )

      //RETURN FOR 7
      } else if (photoLen === 7) {
        let abs = 'absolute';
        let zero = '0px'
        //med
        let styles1 = {position: abs,top:zero,left:'2px'}
        let styles2 = {position: abs,top:'123px',left:zero}
        //large
        let styles3 = {position: abs,top:zero,left:'120px'}
        //med
        let styles4 = {position: abs,top:zero,left:'363px'}
        let styles5 = {position: abs,top:'123px',left:'361px'}
        let styles6 = {position: abs,top:zero,left:'481px'}
        let styles7 = {position: abs,top:'123px',left:'480px'}

        return (
          <div className = 'photogallery'>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles1}>
                <img className = 'pic' onClick = {props.click} src = {pic[0].src} height = '120px' width = '120px'/>
                <p className = 'text'> {pic[0].txt_description}</p>
              </div>  
            </div>         
            
            <div className = 'photo'>
              <div className = 'pic-wrapper'  style = {styles2}>
                <img className = 'pic' onClick = {props.click} src = {pic[1].src} height = '120px' width = '120px'/>
                <p className = 'text'> {pic[1].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles3}>
                <img className = 'pic' onClick = {props.click} src = {pic[2].src} height = '243px' width = '243px'/>
                <p className = 'text'> {pic[2].txt_description}</p>
              </div>
            </div>
        
            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles4}>
                <img className = 'pic' onClick = {props.click} src = {pic[3].src} height = '120px'width = '120px'/>
                <p className = 'text'> {pic[3].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles5}>
                <img className = 'pic' onClick = {props.click} src = {pic[4].src} height = '120px' width ='120px'/>
                <p className = 'text'> {pic[4].txt_description}</p>
              </div>
            </div>

              <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles6}>
                <img className = 'pic' onClick = {props.click} src = {pic[5].src} height = '120px' width ='120px'/>
                <p className = 'text'> {pic[5].txt_description}</p>
              </div>
            </div>

              <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles7}>
                <img className = 'pic' onClick = {props.click} src = {pic[6].src} height = '120px' width ='120px'/>
                <p className = 'text'> {pic[6].txt_description}</p>
              </div>
            </div>

          </div>
        )
      }
      // RETURN FOR 9
      else if (photoLen === 9) {
        let abs = 'absolute';
        let zero = '0px'
        // medium
        let styles1 = {position: abs,top:zero,left:'2px'}
        let styles2 = {position: abs,top:'137px',left:zero}
        // large
        let styles3 = {position: abs,top:zero,left:'135px'}
        // small top row
        let styles4 = {position: abs,top: zero,left:'409px'}
        let styles5 = {position: abs,top: zero,left:'500px'}
        // small mid row
        let styles6 = {position: abs,top: '93px',left:'405px'}
        let styles7 = {position: abs,top: '93px',left:'496px'}
        // small bottom row 
        let styles8 = {position: abs,top: '185px',left:'401px'}
        let styles9 = {position: abs,top: '185px',left:'491px'}

        return (
          <div className = 'photogallery'>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles1}>
                <img className = 'pic' onClick = {props.click} src = {pic[0].src} height = '135px' width = '135px'/>
                <p className = 'text'> {pic[0].txt_description}</p>
              </div>  
            </div>         
            
            <div className = 'photo'>
              <div className = 'pic-wrapper'  style = {styles2}>
                <img className = 'pic' onClick = {props.click} src = {pic[1].src} height = '135px' width = '135px'/>
                <p className = 'text'> {pic[1].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles3}>
                <img className = 'pic' onClick = {props.click} src = {pic[2].src} height = '274px' width = '274px'/>
                <p className = 'text'> {pic[2].txt_description}</p>
              </div>
            </div>
        
            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles4}>
                <img className = 'pic' onClick = {props.click} src = {pic[3].src} height = '90px'width = '90px'/>
                <p className = 'text'> {pic[3].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles5}>
                <img className = 'pic' onClick = {props.click} src = {pic[4].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[4].txt_description}</p>
              </div>
            </div>

              <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles6}>
                <img className = 'pic' onClick = {props.click} src = {pic[5].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[5].txt_description}</p>
              </div>
            </div>

              <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles7}>
                <img className = 'pic' onClick = {props.click} src = {pic[6].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[6].txt_description}</p>
              </div>
            </div>

              <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles8}>
                <img className = 'pic' onClick = {props.click} src = {pic[7].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[7].txt_description}</p>
              </div>
            </div>

              <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles9}>
                <img className = 'pic' onClick = {props.click} src = {pic[8].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[8].txt_description}</p>
              </div>
            </div>

          </div>
        )
      } else {
        let abs = 'absolute';
        let zero = '0px'
        // medium
        let styles1 = {position: abs,top:zero,left:'2px'}
        let styles2 = {position: abs,top:'137px',left:zero}
        // large
        let styles3 = {position: abs,top:zero,left:'135px'}
        // small top row
        let styles4 = {position: abs,top: zero,left:'409px'}
        let styles5 = {position: abs,top: zero,left:'500px'}
        // small mid row
        let styles6 = {position: abs,top: '93px',left:'405px'}
        let styles7 = {position: abs,top: '93px',left:'496px'}
        // small bottom row 
        let styles8 = {position: abs,top: '185px',left:'401px'}
        let styles9 = {position: abs,top: '185px',left:'491px'}

        return (
          <div className = 'photogallery'>
            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles1}>
                <img className = 'pic' onClick = {props.click} src = {pic[0].src} height = '135px' width = '135px'/>
                <p className = 'text'> {pic[0].txt_description}</p>
              </div>  
            </div>         
            
            <div className = 'photo'>
              <div className = 'pic-wrapper'  style = {styles2}>
                <img className = 'pic' onClick = {props.click} src = {pic[1].src} height = '135px' width = '135px'/>
                <p className = 'text'> {pic[1].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles3}>
                <img className = 'pic' onClick = {props.click} src = {pic[2].src} height = '274px' width = '274px'/>
                <p className = 'text'> {pic[2].txt_description}</p>
              </div>
            </div>
        
            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles4}>
                <img className = 'pic' onClick = {props.click} src = {pic[3].src} height = '90px'width = '90px'/>
                <p className = 'text'> {pic[3].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles5}>
                <img className = 'pic' onClick = {props.click} src = {pic[4].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[4].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles6}>
                <img className = 'pic' onClick = {props.click} src = {pic[5].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[5].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles7}>
                <img className = 'pic' onClick = {props.click} src = {pic[6].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[6].txt_description}</p>
              </div>
            </div>

            <div className = 'photo'>
              <div className = 'pic-wrapper' style = {styles8}>
                <img className = 'pic' onClick = {props.click} src = {pic[7].src} height = '90px' width ='90px'/>
                <p className = 'text'> {pic[7].txt_description}</p>
              </div>
            </div>

            <div className = 'photo more'>
              <div className = 'pic-wrapper' style = {styles9}>
                <img className = 'pic' onClick = {props.click} src = {pic[8].src} height = '90px' width ='90px'/>
              </div>
            </div>
            <p className = 'excess'>+{props.photos.length-8} more </p>
          </div>
        )
      }
  }

};

export default Photo;
