import React, { Component } from 'react'
import './todolist.css'
import './python.css'
import Back from './feedback_back.png'

import CaretPositioning from './EditCaretPositioning'


class Python extends Component {
    state = {
        wide: window.innerWidth,
        code:'',
        rename: false,
        options:false,
        search: false,
        searchinng: '',
        load: true,
        keyup:false,


        newValue: `const projectiqul'small'@
        let themjectiqul'script'@
        @
        let numiqulArray@
        for module iquliquliqul 12:@
        return plusnum@
        @@
        const sigentiqulasync(event)=>{@
        let coveriqul23.01@
        const pendiqulawait cover.filter(e=>{e>iqulevent.string})@
        var markiqul case({this.window()})@
        const globaliqulmark.include(e=>e.num=get(null))@
        global.file.set(index.Object('script')@
        file.pipe(defalt _module)`,
        shifter: 0,
        caretPosition : {
            start : 0,
            end : 0
          }
    }

  
    angery = () => {
        let query = document.querySelector('.editor')
        let str = query.innerText;
        let pink1d = str.replace(/(return)+/g, `<span class="statement">return</span>`)
        let pink1 = pink1d.replace(/(const)+/g, `<span class="statement">const</span>`)
        let pink2 = pink1.replace(/(let)+/g, `<span class="statement">let</span>`)
        let pink3 = pink2.replace(/(var)+/g, `<span class="statement">var</span>`)
        let pink4 = pink3.replace(/(for)+/g, `<span class="statement">for</span>`)
        let pink5 = pink4.replace(/(of)+/g, `<span class="statement">of</span>`)
        let pink6 = pink5.replace(/(if)+/g, `<span class="statement">else</span>`)
        let pink7 = pink6.replace(/(function)+/g, `<span class="statement">function</span>`)
        let pink8 = pink7.replace(/(=>)+/g, `<span class="statement">=></span>`)
        let pink9 = pink8.replace(/(new)+/g, `<span class="statement">new</span>`)
        let pink10 = pink9.replace(/(async)+/g, `<span class="statement">async</span>`)
        let pink11 = pink10.replace(/(await)+/g, `<span class="statement">await</span>`)
        let pink12 = pink11.replace(/(breack)+/g, `<span class="statement">breack</span>`)
        let pink13 = pink12.replace(/(case)+/g, `<span class="statement">case</span>`)
        let div = pink13.replace(/(@)+/g,`<div class="nhapho">@</div>`)
        //let symbl = div.replace(/(|)+/g, `<span class="symbl">|</span>`)
        let opt1 = div.replace(/(&)+/g, `<span class="oprt">&</span>`)
        let opt4b = opt1.replace(/(-)+/g, `<span class="oprt">-</span>`)
        let opt4c = opt4b.replace(/(iqul)+/g, `<span class="oprt">=</span>`)
        let opt4 = opt4c.replace(/(thas)+/g, `<span class="oprt">*</span>`)
    
        let opt5 = opt4.replace(/(map)+/g, `<span class="oprt">map</span>`)
        let opt6 = opt5.replace(/(find)+/g, `<span class="oprt">find</span>`)
        let opt7 = opt6.replace(/(filter)+/g, `<span class="oprt">filter</span>`)
        let opt8 = opt7.replace(/(concat)+/g, `<span class="oprt">concat</span>`)
        let opt9 = opt8.replace(/(replace)+/g, `<span class="oprt">replace</span>`)
        let opt10 = opt9.replace(/(push)+/g, `<span class="oprt">push</span>`)
        let opt11 = opt10.replace(/(include)+/g, `<span class="oprt">include</span>`)
        let opt12 = opt11.replace(/(require)+/g, `<span class="oprt">require</span>`)
        let opt13 = opt12.replace(/(index)+/g, `<span class="oprt">index</span>`)
        let yel1 = opt13.replace(/(Object)+/g, `<span class="yellow">Object</span>`)
        let yel2 = yel1.replace(/(Array)+/g, `<span class="yellow">Array</span>`)
        let red1 = yel2.replace(/(})+/g, `<span class="red">}</span>`)
        let red2e = red1.replace(/({)+/g, `<span class="red">{</span>`)
        let red2c = red2e.replace(/(plus)+/g, `<span class="red">+</span>`)
        let red2 = red2c.replace(/(crete)+/g, `<span class="red">></span>`)  
        let red3 = red2.replace(/(this)+/g, `<span class="red">this</span>`)
        let red4 = red3.replace(/(file)+/g, `<span class="red">file</span>`)
        let red5 = red4.replace(/(get)+/g, `<span class="red">get</span>`)
        let red6 = red5.replace(/(set)+/g, `<span class="red">set</span>`)
        let red7 = red6.replace(/(default)+/g, `<span class="red">default</span>`)
        let or1 = red7.replace(/(null)+/g, `<span class="orange">null</span>`)
        let or2 = or1.replace(/(undifined)+/g, `<span class="orange">undifined</span>`)
        let or3 = or2.replace(/(0)+/g, `<span class="orange">0</span>`)
        let or4 = or3.replace(/(1)+/g, `<span class="orange">1</span>`)
        let or5 = or4.replace(/(2)+/g, `<span class="orange">2</span>`)
        let or6 = or5.replace(/(3)+/g, `<span class="orange">3</span>`)
        let or7 = or6.replace(/(4)+/g, `<span class="orange">4</span>`)
        let or8 = or7.replace(/(5)+/g, `<span class="orange">5</span>`)
        let or9 = or8.replace(/(6)+/g, `<span class="orange">6</span>`)
        let or10 = or9.replace(/(7)+/g, `<span class="orange">7</span>`)
        let or11 = or10.replace(/(8)+/g, `<span class="orange">8</span>`)
        let or12 = or11.replace(/(9)+/g, `<span class="orange">9</span>`)
        let string1 = or12.replace(/(pipe)+/g, `<span class="green">pipe</span>`)
        let string2 = string1.replace(/(small)+/g, `<span class="green">small</span>`)
        let string3 = string2.replace(/(siphosethu)+/g, `<span class="green">siphosethu</span>`)
        let string4 = string3.replace(/(row)+/g, `<span class="green">row</span>`)
        let string5 = string4.replace(/(script)+/g, `<span class="green">script</span>`)
        let string6 = string5.replace(/(object)+/g, `<span class="green">object</span>`)
        let string7 = string6.replace(/(string)+/g, `<span class="green">string</span>`)
        let string8 = string7.replace(/(hope)+/g, `<span class="green">hope</span>`)
        let string9 = string8.replace(/(module)+/g, `<span class="green">module</span>`)
        let string10 = string9.replace(/(')+/g, `<span class="green">"</span>`)











        this.setState({
            "newValue": string10,
            })
    }
   

    onChangeHandler = event => {
        let query= document.querySelector('.editor')
        let savedCaretPosition = CaretPositioning.saveSelection(query);
        let str = query.innerText;
              

        var keywords = [ "Object", "Array", "null", "undifined","const", "let", "var", "for", "in", "of", "false", "true", "=>", "function", "©", "|", "new", "Promise", "await", "async", "fetch", "JSON", "stringfy",
            "&", ">", "<", "-", "=", "#",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "}",
            "if", "else", "break", "case", "push", "include",
            "{", "this", "as", "has", "is", "get", "set"
            , "length", "key", "enabled", "replace", "concat","export","parse","default", ".", "import",
            "map", "filter", "find", "throw", "indexof", "lastIndex", "switch", "typeof", "require",
            "pipe","sipho","nongwe","grow","vscode","hip",
            "inathi","javascript","best","done","almost","center","back"];

        var variables=["const","throw","import","switch", "let","var", "for","if","else","break","case", "in", "of","new","function","=>", "await", "async"]
        var nhap=["©"]
        var symbl = ["|"]
        var oparator = ["&", ">", "<", "-", "=", ".",
           "map","filter","find","indexof","typeof","require" ,"#", "concat", "replace", "push", "include"]
        var red=["}","{","this","as","has","is","get","set","export","parse","lastIndex","default"]
        var yellow=["Object", "Array"]
        var orange=[ "null", "undifined",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
        var namesv=["pipe","sipho","nongwe","grow","vscode","hip",
    "inathi","javascript","best","done","almost","center","back"]
        var rx = /(^"|"$)/
       
    

        let chunks = str.split(new RegExp(
            keywords.map(w => `(${w})`)
              .join('|'), 'i'))
           .filter(Boolean),
          
         

            markup = chunks.reduce((acc, chunk) => {
              
              acc+= variables.includes(chunk)?
                   `<span class="statement">${chunk}</span>` :
                   nhap.includes(chunk)?`<div class="nhapho">${chunk}</div>`
                   :symbl.includes(chunk)?`<span class="symbl">${chunk}</span>`
                   :oparator.includes(chunk)?`<span class="oprt">${chunk}</span>`
                   :orange.includes(chunk)?`<span class="orange">${chunk}</span>`
                   :red.includes(chunk)?`<span class="red">${chunk}</span>`
                    :yellow.includes(chunk)?`<span class="yellow">${chunk}</span>`
                    :namesv.includes(chunk) ? `<span class="greenr">${chunk}</span>`
                                  :rx.test(chunk) ? `<span class="green">${chunk}</span>`
                                  :`<span class='other'>${chunk}</span>`
           
         return acc
            }, '') 
      
          
          
      this.setState({
            "newValue": markup,
            "caretPosition":{ start: savedCaretPosition.start+(this.state.shifter===1?2:0) , end: savedCaretPosition.end+(this.state.shifter===1?2:0) }
        }, () => {
            CaretPositioning.restoreSelection(query, this.state.caretPosition);
        })

        if (this.state.shifter > 0) {
            this.setState({shifter:this.state.shifter-1})   
         }
      }






    keyup = () => {
       
      
        window.addEventListener("keyup", (event) => {
         
            if (2===3) {
                event.preventDefault()
                let query= document.querySelector('.editor')
                let savedCaretPosition = CaretPositioning.saveSelection(query);
               
                let str = query.innerText;
                const strv = str.split('')
              
               
                strv[savedCaretPosition.start] = '©|'
              
               
                const newx=strv.join().replace(/(,)+/g,'')
              
                var keywords = ["const", "let", "var", "for", "in", "of", "false", "true", "=>", "function", "©", "|", "new", "Promise", "await", "async", "fetch", "JSON", "stringfy",
                "&", ">", "<", "-", "=", "#", "Object", "Array", "null", "undifined",
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "}",
                "if", "else", "break", "case", "push", "include",
                "{", "this", "as", "has", "is", "get", "set"
                , "length", "key", "enabled", "replace", "concat","export","parse","default", ".", "import",
                "map", "filter", "find", "throw", "indexof", "lastIndex", "switch", "typeof", "require",
                "pipe","sipho","nongwe","grow","vscode","hip",
                "inathi","javascript","best","done","almost","center","back"];
    
            var variables=["const","throw","import","switch", "let","var", "for","if","else","break","case", "in", "of","new","function","=>", "await", "async"]
            var nhap=["©"]
            var symbl = ["|"]
            var oparator = ["&", ">", "<", "-", "=", ".","map","filter","find","indexof","typeof","require" ,"#", "concat", "replace", "push", "include"]
            var red=["}","{","this","as","has","is","get","set","export","parse","lastIndex","default"]
            var yellow=["Object", "Array"]
            var orange=[ "null", "undifined","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
            var namesv=["pipe","sipho","nongwe","grow","vscode","hip","inathi","javascript","best","done","almost","center","back"]
            var rx = /(^"|"$)/
           
           
                this.setState({shifter:1})
                let chunks = newx.split(new RegExp(
                    keywords.map(w => `(${w})`)
                      .join('|'), 'i'))
                   .filter(Boolean),
                  
                    markup = chunks.reduce((acc, chunk) => {
                      acc+=variables.includes(chunk)?
                      `<span class="statement">${chunk}</span>` :
                      nhap.includes(chunk)?`<div class="nhapho">${chunk}</div>`
                      :symbl.includes(chunk)?`<span class="symbl">${chunk}</span>`
                      :oparator.includes(chunk)?`<span class="oprt">${chunk}</span>`
                      :orange.includes(chunk)?`<span class="orange">${chunk}</span>`
                      :red.includes(chunk)?`<span class="red">${chunk}</span>`
                       :yellow.includes(chunk)?`<span class="yellow">${chunk}</span>`
                       : namesv.includes(chunk) ? `<span class="greenr">${chunk}</span>`
                                     :rx.test(chunk) ? `<span class="green">${chunk}</span>`
                                     :`<span class='other'>${chunk}</span>`
                   
                 return acc
                   }, '') 
               
                this.setState({
                    "newValue": markup,
                    "caretPosition": { start: savedCaretPosition.start + 2, end: savedCaretPosition.end + 2 }

                }, () => {
                    //restore caret position(s)
                    CaretPositioning.restoreSelection(query, this.state.caretPosition);
                })

              }
        
            
            })
        
    }

    options = () => {
        this.setState({
            rename:false,
            options:true
        })
    }
    optionsx = () => {
        this.setState({
            rename:false,
            options:false
        })
}
   
rename=()=>{
    this.setState({
        rename:true,
        options:''
    })
}

    





    code = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    }

    seach = () => {
        this.setState({
           search:!this.state.search
        })
    }
    seachr = () => {
        this.setState({
            search: false
        })
    }
  
    size = () => {
        const change = () => {
            this.setState({
                wide: window.innerWidth
            })
        };
        window.addEventListener('resize', change, false)
    }

    componentDidMount() {
        this.size()
        this.keyup()

        setTimeout(() => {
            this.angery()
        },3000)
      
    }



   
    render() {
     
       return (
            <div className="todolistc">
               
              
               <div style={{ filter: 'blur(2px)' }}  className="theboox">
                   <div className="explo1">
                   <div className="exp1">EXPLORER</div>
                       <div className="exp2">
                           <div  className="colmrx">
                               <img onClick={this.angery} src={'./uploads/copy.png'} alt='copyg' className='copyxs' />
                               <img onClick={this.seach} src={'./uploads/search.png'} alt='copyh' className='copyxs' />
                               <img onClick={this.seachr} src={'./uploads/edit.png'} alt='copyd' className='copyxs1' />
                               <img onClick={this.seachr} src={'./uploads/adit2.png'} alt='copyv'className='copyxs2'/>
                           </div>
                           <div onMouseLeave={this.optionsx} className="colmrx2">
                               <div className="addfile">
                               </div>
                               <div className="addfile">
                               <img src={'./uploads/js.png'} alt='copy'className='jsx'/>
                               <div className="addnamew">scipt.js</div>
                               </div>
                               <div  className="addfile">
                               <img  src={'./uploads/pyt.png'} alt='copy'className='jsxp'/>
                                   {this.state.options===false ? <div onClick={this.options} className="addnamew">pythonscipt.py</div> :
                                      this.state.options===true&&<div className="option">
                                           <div onClick={this.rename} className="option1">rename</div>
                                           <div className="option1">delete</div>
                                       </div>}
                                   
                                   {this.state.rename&&<input  type='text' value={this.state.code} name='code' onChange={this.code} placeholder='' className='titlenam' />}
                               </div>
                               <div className="addfile">
                               <img src={'./uploads/js.png'} alt='copy'className='jsx'/>
                               <div className="addnamew">types.js</div>
                               </div>
                               <div  className="addfile">
                               <img  src={'./uploads/pyt.png'} alt='copy'className='jsxp'/>
                                   {this.state.options===false ? <div onClick={this.options} className="addnamew">numeric.py</div> :
                                      this.state.options===true&&<div className="option">
                                           <div onClick={this.rename} className="option1">rename</div>
                                           <div className="option1">delete</div>
                                       </div>}
                                   
                                   {this.state.rename&&<input  type='text' value={this.state.code} name='code' onChange={this.code} placeholder='' className='titlenam' />}
                               </div>
                               <div className="addfile">
                               <img src={'./uploads/js.png'} alt='copy'className='jsx'/>
                               <div className="addnamew">index.js</div>
                               </div>
                               <div className="addfile">
                               <img src={'./uploads/js.png'} alt='copy'className='jsx'/>
                               <div className="addnamew">babel.js</div>
                               </div>
                           </div>
                   </div>
                   </div>
                   <div className="explo2">
                       <div className="allf1">
                           {this.state.search===false&&<div className="listfil">
                               <div className="thelist">
                                   <div onClick={this.replace} className="wrod">script.js</div>
                                   <div className="th"></div>
                               </div>
                               <div className="thelist2">
                                   <div className="wrod2">pythonscript.py</div>
                                   <div className="th2"></div>
                               </div>
                           </div> }
                       </div>
                       <div className="allf2">
 
                           <div className="haadde1">
                              
                               <div   className="editor"     contentEditable="true" dangerouslySetInnerHTML={{ __html: this.state.newValue }}></div>
                                  
                       </div>
                       </div>
                     {this.state.search===true&& <div className="searchi">
                                   <div className="searchi2">
                                       <div className="searchi2x1">
                                       <input  type='text' value={this.state.searchinng} name='searchinng' onChange={this.codej} placeholder='>' className='titlenamc' />
                                       </div>
                               <div onMouseLeave={this.seachr} className="searchi2x2">
                                   <div className="vscrll">
                                       <div className="vscrll2">
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>

                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                           <div className="vscrll2x"></div>
                                   </div>
                                   </div>
                                       </div>
                           </div></div>}
                       
                       <div className="allf3">
                           <div className="saves1">Save</div>
                           <div className="saves2">New</div>
                       </div>
                   </div>
                   <div className="explo3"></div>
               </div>

               <div style={{ height: `${window.innerHeight}px` }} className="pending">
                   <div className="bachm">
                       <div onClick={() => this.props.history.push('./')} className='modefg'>
                           <img src={Back} alt='back' className='bckimg' />
                       </div>
                   </div>
                   <div className="modex">
                       <div className="modex1">
                           <div className="modex2">Project Pending...</div>
                       </div>

                   </div>
               </div>
               
               

            </div>
        );
    }
}

export default Python;
