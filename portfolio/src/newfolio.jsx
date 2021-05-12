import React,{Component} from 'react'
import './folio.css'
import pdf from './resume.pdf'
import Typewriter from "typewriter-effect";



class Newfolio extends Component{
    state={
        shpdow1:false,
        shpdow2:true,
        shpdow3:false,  

        over:false,
        over2: false,
        over3: false,
        over4: false,
        over5: false,
        over6: false,
        over7: false,
        over8: false,
        over9:false,
        widthSize:window.innerWidth,

        navbar:true,
        navbar2:'none',
        view:[1],
        rate:[1],
    }

    about = () => {
        window.scrollTo({
            behavior: 'smooth',
            top:window.innerHeight
        })
    }

    skill = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: ((window.innerHeight)*2)-150
        })
    }


    project = () => {
        window.scrollTo({
            behavior: 'smooth',
            top:((window.innerHeight)*3)-270
        })
    }


    rate = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 1600
        })
    }




    width_size = () => {
    const size=()=>{
        this.setState({widthSize:window.innerWidth})
        }
        window.addEventListener('resize',size,false)
    }
    
glow_ring=()=>{
    setInterval(() => {
        setTimeout(() => {
            this.setState({
                shpdow1:false,
                shpdow2:true,
                shpdow3:false,  
            })
        },0)
        setTimeout(() => {
            this.setState({
                shpdow1:true,
                shpdow2:false,
                shpdow3:false,  
            })
        },6000)
        setTimeout(() => {
            this.setState({
                shpdow1:false,
                shpdow2:false,
                shpdow3:true,  
            })
        },10000)

    },14000)
}

componentDidMount() {
   this.width_size()
   this.glow_ring()
   this.putview()
   this.getrate()
}

    
project_one=()=>{
    this.setState({over:!this.state.over})
    
}

       
project_two=()=>{
    this.setState({over2:!this.state.over2})
    
}

          
project_three=()=>{
    this.setState({over3:!this.state.over3})
    
}

project_four=()=>{
    this.setState({over4:!this.state.over4})
    
}

project_five=()=>{
    this.setState({over5:!this.state.over5})
    
    }
    project_six=()=>{
        this.setState({over6:!this.state.over6})
        
    }

    project_seven=()=>{
        this.setState({over7:!this.state.over7})
        
    }

    project_eigth=()=>{
        this.setState({over8:!this.state.over8})
        
    }

    project_nine=()=>{
        this.setState({over9:!this.state.over9})
        
    }

    navbar=()=>{
        if (this.state.navbar===true) {
            this.setState({ navbar:false })
            setTimeout(() => {
                this.setState({ navbar2: false}) 
             },600)

        }
    if(this.state.navbar===false){
        this.setState({navbar2:true})
        setTimeout(() => {
            this.setState({ navbar: true}) 
         },600)
    }
    }


    putview = () => {

        const data = JSON.parse(localStorage.getItem('view'));

 
       const date = new Date()
        const year = date.getFullYear()
        const hour = date.getHours()
        const min = date.getMinutes()
        const munt = date.getUTCMonth()
        const day = date.getUTCDay()
     
        if (data ===null||data.day !==`${day}/${munt}/${year}`) {
            const payload = { port: `${hour}:${min}-${day}/${munt}/${year}` }
            const localpayload={day:`${day}/${munt}/${year}`}

           localStorage.setItem('view', JSON.stringify(localpayload))
           console.log('viewpassed')
            fetch(`http://localhost:8080/portfolio/viewput`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then((response) => response.json()).then(data => {
                console.log('viewpassed',data)
                this.setState({ view: data })
            })
        }

    }



getrate=()=>{
    fetch('http://localhost:8080/portfolio/rateget').then(
        (response) => response.json()).then(data => {

          this.setState({ rate: data})
          console.log('GETR',data) 
        }
        ).catch(() => {
             alert('data was not fetch!!!')
        })
}



    rateput = () => {

        const data = JSON.parse(localStorage.getItem('rate'));

        console.log('dataz',data)

        if ( data===null) {
            const date = new Date()
            const year = date.getFullYear()
            const hour = date.getHours()
            const min = date.getMinutes()
            const munt = date.getUTCMonth()
            const day = date.getUTCDay()
     
            const payload = { divice: `${hour}:${min}-${day}/${munt}/${year}` }
           localStorage.setItem('rate', JSON.stringify(payload))
           console.log('succention')

            fetch(`http://localhost:8080/portfolio/ratepost`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then((response) => response.json()).then(data => {

                console.log('rate', data)
                this.setState({ rate: data,thanks:true })
                setTimeout(()=>{
                this.setState({ thanks: false })
            },5000)
            })
        }else{
            this.setState({ divice: true })
            setTimeout(()=>{
                this.setState({ divice: false })
            },1000)
        }
    }




render(){
    return(
        <div  className='newfolio'>
 {this.state.widthSize > 600 ?<div style={{ height: `${window.innerHeight + 5}px` }} className='newfolio-2'>
 <div style={{ height: `${window.innerHeight + 5}px` }}  className='newfolio-3s'>
 <div style={{marginTop:  `${window.innerHeight -525}px` ,boxShadow:this.state.shpdow1? '0px 0px 5px 1px rgb(255, 255, 255),0px 0px 20px 3px rgb(0, 255, 30)':'0px 0px 5px 1px rgb(0,0,0)'
}} className='newcercles-1'>
 </div>
 <div style={{marginTop:'0px',boxShadow:this.state.shpdow2? '0px 0px 5px 1px rgb(255, 255, 255),0px 0px 20px 3px rgb(0, 255, 30)':'0px 0px 5px 1px rgb(0,0,0)'
}} className='newcercles-2'>
 </div>
 <div style={{marginTop:`80px`,boxShadow:this.state.shpdow3?'0px 0px 5px 1px rgb(255, 255, 255),0px 0px 20px 3px rgb(0, 255, 30)':'0px 0px 5px 1px rgb(0,0,0)'
}} className='newcercles-3'>
 </div>
</div>
<div  style={{top:`-${window.innerHeight + 5}px`, height: `${window.innerHeight + 5}px` }} className='newfolio-4'>
<div className='folioinfo'>
<div className='folioinfo-span-1-about'>
<div onClick={this.about} className='folioinfo-span-1x'>
<img alt='learn' src={'./uploads/profl.png'} className="lerne-1" />
<span className='span-info'>About</span>
</div>
<div className='folioinfo-span-1s'></div>
</div>

<div className='folioinfo-span-1-skill'>
<div onClick={this.skill} className='folioinfo-span-1x'>
<img alt='learn' src={'./uploads/skills.png'} className="lerne-2" />
    <span className='span-info'>Skills</span>
</div>
<div className='folioinfo-span-1s'></div>
</div>

<div className='folioinfo-span-1-project'>
<div onClick={this.project} className='folioinfo-span-1x'>
<img alt='learn' src={'./uploads/projects.png'} className="lerne-3" />
    <span className='span-info-p'>Project</span></div>
<div className='folioinfo-span-1s'></div>
</div>

<div className='folioinfo-span-1'>
    <div  className='folioinfo-span-1-rate'>
<img alt='learn' src={'./uploads/views.png'} className="lerne-4" />
<span className='span-info-p1'>{`${92+this.state.view.length}`}</span>
</div>
</div>

<div className='folioinfo-span-1'>
    <div onClick={this.rateput} className='folioinfo-span-1-rate1'>
    <img alt='learn' src={'./uploads/rates.png'} className="lerne-5" />
    <span className='span-info-p1'>{`${57+this.state.rate.length}`}</span>
</div>
</div>

</div>
<div className='folioinfo-2'>
<div className='folioinfo-2-box'>
<div  className='folioinfo-2-s1'>
<div className='folioinfo-2-sx'>
<div className='folioinfo-2-sxp'>
<span style={{fontSize:this.state.widthSize < 800 &&'17px'}} className='h-there'>Hi There</span>
</div>
<div className='folioinfo-2-sxp'>
<span style={{fontSize:this.state.widthSize < 800 &&'17px'}} className='h-there'>I'M <strong style={{color:' rgb(21, 255, 0)'}} > SIPHOSEHTU NONGWE</strong></span>
</div>
    <div className='folioinfo-2-sxp'>
                                        <div style={{ fontSize: this.state.widthSize < 800 && '17px',color: ' rgb(21, 255, 0)' }} className='h-there-1'>
                                        <Typewriter
    options={{
      strings: [
        "Junior Programmer",
        "Deep Learning Engineer",
        "Full-Stack Developer",
        "Open Source Contributor",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
        
</div>
</div>
                                
</div>
</div>
<div  className='folioinfo-2-s2'>
<img style={{
            height: this.state.widthSize < 800 &&'200px',
             width: this.state.widthSize < 800 &&'200px'}}  alt='learn' src={'./uploads/learn.png'} className="lerne" />

</div>


</div>
</div>
</div>
</div>:

<div  className='mobilesx'>
<div  className='mobilenav'>
<div  className='mobilenav1'>
<span className='ns'>N.S</span>
</div>
<div  className='mobilenav2'>

{this.state.navbar?<div onClick={this.navbar}  className='treebars'>
<div  className='treebars1'>
</div>
<div className='treebars1'>
</div>
<div  className='treebars1'>
</div>
</div>:
<div onClick={this.navbar} className='treebarsx'>
<div  className='treebarsx1'>
</div>
<div  className='treebarsx2'>
</div>
</div>
}

</div>

</div>
{this.state.navbar===false&&<div style={{ height:this.state.navbar2===true? '0px':this.state.navbar2===false?'70px':'0px'}}  className='viewsbar'>
<div  className='viewsbar1'>

<div style={{width:'60px',height: '25px'}} className='folioinfo-span-1-rate'>
<img alt='learn' src={'./uploads/views.png'} className="lerne-4" />
<span className='span-info-p1'>{`${92+this.state.view.length}`}</span>
</div>

<span className='nsn'>Views</span>
</div>
<div  className='viewsbar1'>

<div style={{width:'60px',height: '25px'}} onClick={this.rateput} className='folioinfo-span-1-rate1'>
    <img alt='learn' src={'./uploads/rates.png'} className="lerne-5" />
    <span className='span-info-p1'>{`${57+this.state.rate.length}`}</span>
</div>

<span className='nsn'>Rates</span>
</div>
</div>}

<div className='million'>
<div className='milliontext'>

<div className='spantext'>
<span className='whitespan'>Hi There</span>
</div>
<div className='spantext'>
<span className='whitespan2'>I'M <strong style={{color:' rgb(21, 255, 0)'}} > SIPHOSEHTU NONGWE</strong></span>
</div>
<div className='spantext'>
<div className='greenspan'>

<Typewriter
    options={{
      strings: [
        "Junior Programmer",
        "Deep Learning Engineer",
        "Full-Stack Developer",
        "Open Source Contributor",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />

</div>
</div>

</div>


<img style={{ width:'90px',height:'90px'}} alt='learn' src={'./uploads/learn.png'} className="lernew" />

</div>

</div>
}

<section className='about-me-section'>
            <div className='about-me'>
                    <div style={{
                         textAlign: this.state.widthSize < 500&&'center',
                        width: this.state.widthSize < 600 && this.state.widthSize
                >400?'400px':this.state.widthSize < 450&&'250px'}} className='about-me-1'>
                        <div style={{
                            textAlign: this.state.widthSize < 500 && 'center'
                        }} className='about-me-text'>
                            <span style={{ fontSize: this.state.widthSize < 600 &&'17px'}} className='h-there'>LET ME <strong style={{color:' rgb(21, 255, 0)'}} >INTRODUCE</strong> MY SELF</span>
                    </div>
                    <div style={{
                            textAlign: this.state.widthSize < 500 && 'center'
                        }} className='about-me-text-1'>
                        <span style={{ fontSize: this.state.widthSize < 600 &&'10px'}} className='h-there-S'>Software developer specializing in front-end and back-end development,</span>
                    </div>
                    <div style={{
                            textAlign: this.state.widthSize < 500 && 'center'
                        }} className='about-me-text-1'>
                        <span style={{ fontSize: this.state.widthSize < 600 &&'10px'}} className='h-there-S'>I fell in love with programming and I have at least learnt something,</span>
                    </div>
                    <div style={{
                            textAlign: this.state.widthSize < 500 && 'center'
                        }} className='about-me-text-1'>
                        <span style={{ fontSize: this.state.widthSize < 600 &&'10px'}} className='h-there-S'>I am fluent in classics like <span style={{fontStyle: 'italic',color:'rgb(21, 255, 0)'}}>Javascript,TypeScript,Python and Kotlin.</span></span>
                    </div>
                    <div style={{
                            textAlign: this.state.widthSize < 500 && 'center'
                        }} className='about-me-text-1'>
                        <span style={{ fontSize: this.state.widthSize < 600 &&'10px'}} className='h-there-S'>My current focus is on <span style={{fontStyle: 'italic',color:'rgb(21, 255, 0)'}}>Deep Learning and Natural Language Processing</span></span>
                    </div>
                    <div style={{
                            textAlign: this.state.widthSize < 500 && 'center'
                        }} className='about-me-text-1'>
                        <span style={{ fontSize: this.state.widthSize < 600 &&'10px'}} className='h-there-S'>Whenever possible, I also apply my passion for developing products with <span style={{fontStyle: 'italic',color:'rgb(21, 255, 0)'}}> Modern Frameworks</span></span>
                    </div>
                </div>
                <div className='about-me-2'>
                <img style={{ width: this.state.widthSize < 400 &&'250px',height:this.state.widthSize < 400 &&'200px'}} alt='learn' src={'./uploads/learnw.png'} className="lernew" />

                
</div>

            </div>
</section>
            <section className='skill-section'>

<div className='my-skills'>
                    <div style={{
                        textAlign: this.state.widthSize < 400 && 'center',
                    }} className='about-me-text'>
                    <span style={{ fontSize: this.state.widthSize < 600 &&'20px'}} className='h-there-bold'>Professional <span style={{color:' rgb(21, 255, 0)'}} >Skillset</span></span>
                    </div>
                    <div style={{flexDirection:this.state.widthSize < 500 &&'column'}}  className='div-of-skills'>


 <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (2).png'} className="js-scripts" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Javascript</span>
    </div> 
    </div> 


     <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscriptst (3).png'} className="js-scripts" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Typescript</span>
    </div> 
    </div> 


     <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (4).png'} className="js-scripts" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Python</span>
    </div> 
    </div> 

    <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (5).png'} className="js-scripts-1" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Kotlin</span>
    </div> 
    </div> 

     <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (3).png'} className="js-scripts-1" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>React js</span>
    </div> 
    </div> 

    

     <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (3).png'} className="js-scripts-1" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>React Native</span>
    </div> 
    </div> 


     <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscrpts (1).jpg'} className="js-scripts" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Node js</span>
    </div> 
    </div> 


 <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscriptst (1).png'} className="js-scripts" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Express js</span>
    </div> 
    </div> 


 <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscriptst (2).png'} className="js-scripts" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Django</span>
    </div> 
    </div> 

<div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (7).png'} className="js-scripts-2" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>MongoDB</span>
    </div> 
    </div> 


    <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscripts (6).png'} className="js-scripts-2" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Heroku</span>
    </div> 
    </div> 

      <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscrpts (3).png'} className="js-scripts-2" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Netlify</span>
    </div> 
    </div> 

     <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscrpts (2).png'} className="js-scripts-3" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>Cloudnary</span>
    </div> 
    </div> 

    <div className='div-of-skills-1'>
<div className='div-in-img'>
 <img alt='learn' src={'./uploads/jsscrIpts (1).png'} className="js-scripts-4" />
    </div> 
    <div className='div-in-span'>
<span className='jscript'>AWS</span>
    </div> 
    </div> 


    </div>   




</div>
</section>

    <section className='project-section'>
  <div className='projects'>
                    <div style={{
                        textAlign: this.state.widthSize < 500 && 'center',
                    }} className='about-me-text'>
                    <span style={{ fontSize: this.state.widthSize < 600 &&'30px'}}  className='h-there-bold'>Projects</span>
                    </div>
  <div className='my-projects'>

                        
                        <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}}   onMouseEnter={this.project_one} onMouseLeave={this.project_one} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/pt2.jpg'} className="project-img" />
 {this.state.over?<div className='brightness-img'>
 <div className='brightness-img-1'>
                                    <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>Xtrail</span></div>
 </div>
 <div className='brightness-img-2'>
                                    <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 Find the latest new movies coming soon to theaters. Get the latest release dates, Watch trailers and many more
 </span>
 </div>
 <a style={{ textDecoration: 'none' }} href="https://xtrail.netlify.com">
 <div  style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'>
                                        <span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>Live website</span></div>
 </a>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-1'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (1).jpg'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-3'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/herok.png'} className="stack-img-1" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}}  className='stack-4'>
  <img style={{
            height: this.state.widthSize < 400 &&'10px',
             width: this.state.widthSize < 400 &&'14px'}} alt='learn' src={'./uploads/jsscrpts (2).png'} className="stack-img-2" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-5'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/mdb.png'} className="stack-img-3" />
 </div>
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}}  className='pj-name-1'>
    <span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>EXTRAIL</span>
 </div>
 </div>
 }
  </div>




 <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}}   onMouseEnter={this.project_nine} onMouseLeave={this.project_nine} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/uix.jpg'} className="project-img" />
 {this.state.over9?<div className='brightness-img'>
 <div className='brightness-img-1'>
                                    <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>30min</span></div>
 </div>
 <div className='brightness-img-2'>
                                    <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 Android fitness app.The benefits of fitness go on and on, but you need consistency and discipline in order to stick with a routine.
 </span>
 </div>
 <a style={{ textDecoration: 'none' }} href="https://github.com/nophora/30min_app">
 <div  style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'>
                                        <span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>Source Code</span></div>
 </a>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-1'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (1).jpg'} className="stack-img" />
 </div>
 
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-3'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/herok.png'} className="stack-img-1" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}}  className='stack-4'>
  <img style={{
            height: this.state.widthSize < 400 &&'30px',
             width: this.state.widthSize < 400 &&'30px'}} alt='learn' src={'./uploads/awslogo.png'} className="stack-img-2ws" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-5'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/mdb.png'} className="stack-img-3" />
 </div>
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}}  className='pj-name-1'>
    <span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>30min</span>
 </div>
 </div>
 }
  </div>









                        
  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_two} onMouseLeave={this.project_two} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/cr2.jpg'} className="project-img" />
 {this.state.over2?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'>
             <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>GT-View</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                            height: this.state.widthSize < 400 && '40px'
                                    }}   className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 All models. All years. As always GT-VIEW  focus on galleries of car pictures that get the andrenaline going
 </span>
 </div>
 <a style={{ textDecoration: 'none' }} href="https://gtview.netlify.com">
 <div style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'>
                                    <span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>Live website</span></div>
 </a>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-1'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jango.png'} className="stack-img-4" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-5'>
  <img alt='learn' src={'./uploads/sop.jpg'} className="stack-img-3" />
 </div>
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>GT-View</span>
 </div>
 </div>
 }
  </div>




  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_three} onMouseLeave={this.project_three} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/fod.jpg'} className="project-img" />
 {this.state.over3?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>Cloudfound</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 Get information about films and much more with all stages of the development cycle for web project
 </span>
 </div>
 <a style={{ textDecoration: 'none' }} href="https://cloudfoundapi.herokuapp.com">
 <div  style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'><span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>Live website</span></div>
 </a>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-1'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (1).jpg'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-3'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/herok.png'} className="stack-img-1" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-4'>
  <img style={{
            height: this.state.widthSize < 400 &&'10px',
             width: this.state.widthSize < 400 &&'14px'}} alt='learn' src={'./uploads/jsscrpts (2).png'} className="stack-img-2" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-5'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/mdb.png'} className="stack-img-3" />
 </div>
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>Cloudfound</span>
 </div>
 </div>
 }
  </div>






  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_four} onMouseLeave={this.project_four} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/cov2.jpg'} className="project-img-9" />
 {this.state.over4?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>Covid-19</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
  Corona Virus closed the gate to mobile world congress, but the Covid-Tracker AI have launch new data platform                                          
 </span>
 </div>
 <a style={{ textDecoration: 'none' }} href="https://covidrsa.netlify.com">
 <div style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'>
                                    <span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>Live website</span></div>
 </a>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-1'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (1).jpg'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>Covid-19</span>
 </div>
 </div>
 }
  </div>



                                            
  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_five} onMouseLeave={this.project_five} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/js3.jpg'} className="project-img" />
 {this.state.over5?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>Explorer</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 The Explorer Code additer can help you manage your code and assist you to improve your coding skills                                          
 </span>
 </div>
 <div onClick={() => this.props.history.push('./python')} style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'><span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>View Demo</span></div>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-1'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jango.png'} className="stack-img-4" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-3'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (4).png'} className="stack-img-1" />
</div>
<div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-4'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (2).png'} className="stack-img-1" />
 </div>
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>Explorer</span>
 </div>
 </div>
 }
  </div>




  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_six} onMouseLeave={this.project_six} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/c1.jpg'} className="project-img-9" />
 {this.state.over6?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>Calendar</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 It can help people to manage the time and have grate performence to carring out these task effciently and successfull
                                        </span>
 </div>
 <div onClick={() => this.props.history.push('./calendar')} style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'><span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>View Demo</span></div>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>Calendar</span>
 </div>
 </div>
 }
  </div>





  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_seven} onMouseLeave={this.project_seven} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/f12.jpg'} className="project-img-9" />
 {this.state.over7?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span className='p-name'>Form</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 Whether you want to make a contact form or ,sign-up, or  a survey Smart Form is the easiest way to create you form              </span>
 </div>
 <div onClick={() => this.props.history.push('./formdemo')} style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'><span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>View Demo</span></div>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>Form</span>
 </div>
 </div>
 }
  </div>



  <div style={{
             marginLeft: this.state.widthSize < 400 &&'0px',             
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} onMouseEnter={this.project_eigth} onMouseLeave={this.project_eigth} className='my-projects-1'>
  
  <img style={{
            height: this.state.widthSize < 400 &&'130px',
             width: this.state.widthSize < 400 &&'210px'}} alt='learn' src={'./uploads/n1.jpg'} className="project-img-9" />
 {this.state.over8?<div className='brightness-img'>
 <div className='brightness-img-1'>
 <div style={{
             marginTop:this.state.widthSize < 400 &&'-25px',
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'70px'}} className='project-name'><span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='p-name'>Todolist</span></div>
 </div>
 <div className='brightness-img-2'>
 <div style={{
                                        height: this.state.widthSize < 400 && '40px'
                                    }} className='wrap-text-project'>
 <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='wrap-text'>
 If you never seem to have enough time to complete you tasks, maybe you need a program like ToDoList
 </span>                </div>
 <div onClick={() => this.props.history.push('./todolist')} style={{
            height: this.state.widthSize < 400 &&'17px',
                                        width: this.state.widthSize < 400 && '70px'
                                    }} className='text-direct'><span style={{ fontSize: this.state.widthSize < 400 && '9px' }} className='live-website'>View Demo</span></div>
 </div>
 <div className='brightness-img-3'>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/jsscripts (3).png'} className="stack-img" />
 </div>
 <div style={{
            height: this.state.widthSize < 400 &&'20px',
             width: this.state.widthSize < 400 &&'20px'}} className='stack-2'>
  <img style={{
            height: this.state.widthSize < 400 &&'12px',
             width: this.state.widthSize < 400 &&'12px'}} alt='learn' src={'./uploads/netli.png'} className="stack-img-1" />
 </div>
 
 </div>
 </div>: 
 <div className='pj-name'>
<div style={{
            height: this.state.widthSize < 400 &&'40px',
            width: this.state.widthSize < 400 &&'150px'}} className='pj-name-1'>
<span style={{fontSize:this.state.widthSize < 400 &&'30px'}}>Todolist</span>
 </div>
 </div>
 }
  </div>





  
  </div>
  </div>
  </section>


<section className='find-me-section'>
            <div className='find-me'>
                <div className='find-me-2'>
                <div className='about-me-text'>
                    <span style={{fontSize:this.state.widthSize < 400 &&'25px'}} className='h-there-bold'>FIND ME ON</span>
                    </div>
                    <div className='about-me-text-1'>
                        <span style={{fontSize:this.state.widthSize < 400 &&'9px'}} className='h-there-S'>Feel free to <span style={{color:'rgb(21, 255, 0)'}}>connect</span> with me</span>
                    </div>
                    <div className='links'>
                    <a href='https://github.com/nophora/'><img style={{
            height: this.state.widthSize < 400 &&'50px',
             width: this.state.widthSize < 400 &&'50px'}} alt='learn' src={'./uploads/p2.png'} className="linkpng" /></a>
                    <a href='https:/www.linkedin.com/in/siphosethu-nongwe-83007a208/'><img style={{
            height: this.state.widthSize < 400 &&'50px',
             width: this.state.widthSize < 400 &&'50px'}} alt='learn' src={'./uploads/inki.png'} className="linkpng" /></a>

                    </div>
                    <a style={{ textDecoration: 'none' }} href={pdf}>
                    <div   className='resume'>
                    <img 
                     alt='learn' src={'./uploads/downl.png'} className="resumepng" />
                    <span className='h-there-r'>Resume</span>
                    </div>
                    </a>
</div>
            </div>
            </section>
        </div>
    )
}
}

export default  Newfolio
