import React, { Component } from 'react'
import './calendar.css'
import Back from './feedback_back.png'

class Calendar extends Component {
    state = {
        tun: false,
        left: 100,
        rote: false,
        top: 100,
        calend: [
            { d: 1, date: 1, m: 'October' },
            { d: 2, date: 21, m: 'October' },
            { d: 3, date: 8, m: 'September' },
            { d: 4, date: 16, m: 'June' },
            { d: 5, date: 18, m: 'October' },
            { d: 6, date: 9, m: 'April' },
            { d: 7, date: 18, m: 'March' },
            { d: 8, date: 14, m: 'June' },
            { d: 9, date: 1, m: 'October' },
            { d: 10, date: 17, m: 'july' },
            { d: 11, date: 1, m: 'October' },
            { d: 12, date: 21, m: 'October' },
            { d: 13, date: 8, m: 'September' },
            { d: 14, date: 16, m: 'June' },
            { d: 15, date: 18, m: 'October' },


        ],

        x1: false,
        x2: false,
        x3: false,
        x4: false,
        x5: false,
        x6: false,

        o: false,

        z1: false,
        z2: false,
        z3: false,
        z4: false,
        z5: false,
        z6: false,
        z7: false,
        z8: false,
    }

    turn = () => {
        this.setState({ tun: true })
    }
    turns = () => {
        this.setState({ tun: false })
    }
    mousemove = (e) => {

        if (this.state.tun === false) {
            const w = e.nativeEvent.offsetX;
            const h = e.nativeEvent.offsetY;

            console.log('x,', e.nativeEvent.offsetX)
            console.log('y,', e.nativeEvent.offsetY)

            this.setState({
                left: w,
                top: h,
            })
        }

    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                x1: true,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: true,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 1300)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: true,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 1500)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: true,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 1700)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: true,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 1900)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: true,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 2100)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: true,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 2300)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: true,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 2500)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: true,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 2700)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: true,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 2900)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: true,
                z5: false,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 3100)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: true,
                z6: false,
                z7: false,
                z8: false,
            })
        }, 3300)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: true,
                z7: false,
                z8: false,
            })
        }, 3500)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: true,
                z8: false,
            })
        }, 3700)
        setTimeout(() => {
            this.setState({
                x1: false,
                x2: false,
                x3: false,
                x4: false,
                x5: false,
                x6: false,

                o: false,

                z1: false,
                z2: false,
                z3: false,
                z4: false,
                z5: false,
                z6: false,
                z7: false,
                z8: true,
            })
        }, 3900)





        setInterval(() => {
            setTimeout(() => {
                this.setState({
                    x1: true,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 1000)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: true,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 1300)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: true,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 1500)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: true,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 1700)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: true,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 1900)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: true,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 2100)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: true,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 2300)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: true,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 2500)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: true,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 2700)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: true,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 2900)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: true,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 3100)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: true,
                    z6: false,
                    z7: false,
                    z8: false,
                })
            }, 3300)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: true,
                    z7: false,
                    z8: false,
                })
            }, 3500)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: true,
                    z8: false,
                })
            }, 3700)
            setTimeout(() => {
                this.setState({
                    x1: false,
                    x2: false,
                    x3: false,
                    x4: false,
                    x5: false,
                    x6: false,

                    o: false,

                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: true,
                })
            }, 3900)

        }, 4000)


        setTimeout(() => {
            this.setState({
                rote: true
            })
        }, 4000)
    }

    render() {
        return (
            <React.Fragment>
                <div className='calendars'>
                    <div style={{ transform: `perspective(${this.state.rote === true ? 1107 : 0}px)rotateY(${this.state.rote === true ? 15 : 0}deg)rotateX(15deg)` }} className='calendar'>
                        <div style={{ height: `${window.innerHeight}px` }} ref='size' className='toulsnd'>
                            <div style={{
                                marginLeft: `${this.state.left}px`,
                                marginTop: `${this.state.top}px`,
                            }} className='touch'></div>
                        </div>

                        <div className='names'>
                            <h1 style={{ color: this.state.x1 === true ? 'rgb(14, 78, 255)' : 'rgba(14, 78, 255, 0)' }} className='namex'>E</h1>
                            <h1 style={{ color: this.state.x2 === true ? 'rgb(14, 78, 255)' : 'rgba(14, 78, 255, 0)' }} className='namex'>V</h1>
                            <h1 style={{ color: this.state.x3 === true ? 'rgb(14, 78, 255)' : 'rgba(14, 78, 255, 0)' }} className='namex'>E</h1>
                            <h1 style={{ color: this.state.x4 === true ? 'rgb(14, 78, 255)' : 'rgba(14, 78, 255, 0)' }} className='namex'>N</h1>
                            <h1 style={{ color: this.state.x5 === true ? 'rgb(14, 78, 255)' : 'rgba(14, 78, 255, 0)' }} className='namex'>T</h1>
                            <h1 style={{ color: this.state.x6 === true ? 'rgb(14, 78, 255)' : 'rgba(14, 78, 255, 0)' }} className='namex'>S</h1>

                            <h1 style={{ color: this.state.o === true ? 'rgba(255, 255, 255, 0.418)' : 'rgba(14, 78, 255, 0)' }} className='nameo'>&</h1>

                            <h1 style={{ color: this.state.z1 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>R</h1>
                            <h1 style={{ color: this.state.z2 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>E</h1>
                            <h1 style={{ color: this.state.z3 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>M</h1>
                            <h1 style={{ color: this.state.z4 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>I</h1>
                            <h1 style={{ color: this.state.z5 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>N</h1>
                            <h1 style={{ color: this.state.z6 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>D</h1>
                            <h1 style={{ color: this.state.z7 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>E</h1>
                            <h1 style={{ color: this.state.z8 === true ? 'rgb(14, 255, 26)' : 'rgba(14, 78, 255, 0)' }} className='namez'>R</h1>
                        </div>

                        <div style={{ height: `${window.innerHeight}px` }} onMouseMove={this.mousemove} className='calendaland'>

                            {this.state.calend.map(e => {
                                return (<div key={e.d} onMouseEnter={this.turn} onMouseLeave={this.turns} className="cck">
                                    <div className="dats">
                                        <h1 className="hs1">{e.date}</h1><h1 className="hs2">{e.m}</h1>
                                    </div>
                                    <p className="note">
                                        the project will be poblish soon maybe by the end
                                        november it will depend
                                    </p>
                                </div>)
                            })}


                        </div>
                    </div>
                    <div onClick={() => this.props.history.push('./')} className='back'>
                        <img src={Back} alt='back' className='bckimg' />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Calendar