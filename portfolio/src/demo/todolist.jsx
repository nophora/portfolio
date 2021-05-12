import React, { Component } from 'react'
import './todolist.css'
import Back from './feedback_back.png'

class Todolist extends Component {
    state = {
        wide: window.innerWidth,
        list: [
            { note: 'my list is the best', date: '05:03', _id: 3 },
            { note: 'this is my fist note', date: '07:34', _id: 6 },
            { note: 'ithink am gonna get hired', date: '20:13', _id: 9 },
            { note: 'am agreet as well get hired', date: '07:13', _id: 5 },
            { note: 'you must a work hard', date: '15:18', _id: 2 },

        ],
        seach: true,
        div: true,
        note: '',
        achive: [],
        read: [],
        readz: [],
        achiver: false,
    }

    achiver = () => {
        this.setState({
            achiver: !this.state.achiver,
        })
    }
    turns = () => {
        this.setState({
            read: [],
            reader: false,
            note: '',
        })
        this.setState({
            seach: !this.state.seach,
        })
    }

    add = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })


    }


    adder = () => {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes()
        const notes = this.state.list.filter(e => { return e })
        const add = [{ note: this.state.note, date: `${hour <= 9 ? '0' : ''}${hour}:${min <= 9 ? '0' : ''}${min}`, _id: Date.now() }]

        this.setState({
            list: [...notes, ...add],
            note: '',
            achiver: false,
        })
        this.turns()
    }
    read = (e) => {
        const notes = this.state.list.filter(v => { return v._id === e })
        this.setState({
            read: notes,
            reader: true
        })

    }

    readback = () => {
        this.setState({
            read: [],
            reader: false
        })
    }
    readz = (e) => {
        const notes = this.state.list.filter(v => { return v._id === e })
        this.setState({
            readz: notes,

        })

    }

    readbackz = () => {
        this.setState({
            readz: [],

        })
    }



    delete = (e) => {
        const notes = this.state.list.filter(v => { return v._id !== e })

        this.setState({
            list: notes,

        })
    }
    achive = (e) => {
        const notes = this.state.list.filter(v => { return v._id !== e })
        const acv = this.state.list.filter(v => { return v._id === e })

        this.setState({

            achive: [...this.state.achive, ...acv],
            list: notes,

        })
    }



    acvdelete = (e) => {
        const notes = this.state.achive.filter(v => { return v._id !== e })

        this.setState({
            achive: notes,

        })
    }
    acvachive = (e) => {
        const notes = this.state.achive.filter(v => { return v._id !== e })
        const acv = this.state.achive.filter(v => { return v._id === e })

        this.setState({

            achive: notes,
            list: [...this.state.list, ...acv],

        })
    }

    div = () => {
        this.setState({
            note: '',
            div: !this.state.div
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
    }

    render() {
        const rendersch = this.state.list.filter(them => { return them.note.toLowerCase().indexOf(this.state.note) !== -1; });
        return (
            <div className="todolist">
                <div className={this.state.wide <= 500 ? "mtodolis" : "todolis"}>
                    <div className="todolish">
                        <h1 className="th1">T</h1>
                        <h1 className="th2">O</h1>
                        <h1 className="th3">D</h1>
                        <h1 className="th4">O</h1>
                        <h1 className="th5">L</h1>
                        <h1 className="th6">I</h1>
                        <h1 className="th7">S</h1>
                        <h1 className="th8">T</h1>
                    </div>
                    <div className="todolissh">
                        <input placeholder={this.state.seach === true ? 'search list' : 'Add Note'} className="addfid" type='text' onChange={this.add} value={this.state.note} name='note' />
                        <div className='add'>
                            {this.state.seach === true ? <img src={'./uploads/f3.png'} alt='sct' className='sct' /> :
                                <img src={'./uploads/add.png'} onClick={this.adder} alt='sct' className='sct' />}
                        </div>
                    </div>

                    {this.state.div === true && this.state.seach === true && this.state.note.length > 0 && <div className="todolisb">
                        <div className="blist">
                            <div className="bav">
                                <p className="bav1">search</p>

                            </div>
                            {typeof this.state.readz[0] === 'object' ? this.state.readz.map(e => {
                                return (<div className="emptyr">
                                    <div className="inread"> <img src={'./uploads/back.png'} onClick={this.readbackz} alt='sct' className='sctn' />
                                    </div>
                                    <div className="inreadr">{e.note.slice(0, 100)}{e.note.length < 100 ? '' : '...'}</div>
                                    <div className="inreadd">{e.date}</div>

                                </div>)
                            }) : typeof rendersch[0] === 'object' ? <div className="blist1">
                                {rendersch.map(e => {
                                    return (<div id={e._id} key={e._id} className='blisth'>
                                        <div className='dvac'>
                                            <img onClick={() => { this.delete(e._id) }} src={'./uploads/delete.png'} className="noteimg" alt='copy' />
                                            <img onClick={() => { this.achive(e._id) }} src={'./uploads/acv.png'} className="noteimg" alt='copy' />
                                        </div>
                                        <div className='dvnote'>
                                            <div onClick={() => { this.readz(e._id) }} className="tagnote">{e.note.slice(0, 21)}{e.note.length < 21 ? '' : '...'}</div><div className="tagtime">{e.date}</div>
                                        </div>
                                    </div>)
                                })}

                            </div> : <div className="empty">
                                        search not found
                                        <img src={'./uploads/empty.png'} className="noimg" alt='copy' />
                                    </div>}
                        </div>
                    </div>}

                    <div onMouseEnter={this.div} onMouseLeave={this.div} className="todolisb">
                        <div className="blist">
                            {
                                typeof this.state.read[0] === 'object' ? this.state.read.map(e => {
                                    return (<div className="emptyr">
                                        <div className="inread"> <img src={'./uploads/back.png'} onClick={this.readback} alt='sct' className='sctn' />
                                        </div>
                                        <div className="inreadr">{e.note.slice(0, 100)}{e.note.length < 100 ? '' : '...'}</div>
                                        <div className="inreadd">{e.date}</div>

                                    </div>)
                                })
                                    : this.state.achiver === false ? typeof this.state.list[0] === 'object' ? <div className="blist1">
                                        {this.state.list.map(e => {
                                            return (<div id={e._id} key={e._id} className='blisth'>
                                                <div className='dvac'>
                                                    <img onClick={() => { this.delete(e._id) }} src={'./uploads/delete.png'} className="noteimg" alt='copy' />
                                                    <img onClick={() => { this.achive(e._id) }} src={'./uploads/acv.png'} className="noteimg" alt='copy' />
                                                </div>
                                                <div className='dvnote'>
                                                    <div onClick={() => { this.read(e._id) }} className="tagnote">{e.note.slice(0, 21)}{e.note.length < 21 ? '' : '...'}</div><div className="tagtime">{e.date}</div>
                                                </div>
                                            </div>)
                                        })}

                                    </div> : <div className="empty">
                                            list empty
                                            <img src={'./uploads/empty.png'} className="noimg" alt='copy' />
                                        </div> :
                                        typeof this.state.achive[0] === 'object' ? <div className="blist1">
                                            {this.state.achive.map(e => {
                                                return (<div id={e._id} key={e._id} className='blisth'>
                                                    <div className='dvac'>
                                                        <img onClick={() => { this.acvdelete(e._id) }} src={'./uploads/delete.png'} className="noteimg" alt='copy' />
                                                        <img onClick={() => { this.acvachive(e._id) }} src={'./uploads/acv.png'} className="noteimg" alt='copy' />
                                                    </div>
                                                    <div className='dvnote'>
                                                        <div onClick={() => { this.read(e._id) }} className="tagnote">{e.note.slice(0, 21)}{e.note.length < 21 ? '' : '...'}</div><div className="tagtime">{e.date}</div>
                                                    </div>
                                                </div>)
                                            })}

                                        </div> : <div className="empty">
                                                achieve empty
                                                <img src={'./uploads/empty.png'} className="noimg" alt='copy' />

                                            </div>

                            }
                        </div>


                        <div onClick={this.achiver} className="bav">
                            <p className="bav1">{this.state.achiver === false ? `achieve(${this.state.achive.length})` : `list (${this.state.list.length})`}</p>
                            <div className="bav2"></div>
                        </div>
                    </div>
                    <div onClick={this.turns} className="todolisad">
                        <h1>+</h1>
                    </div>
                </div>



                <div onClick={() => this.props.history.push('./')} className='backl'>
                    <img src={Back} alt='back' className='bckimg' />
                </div>
            </div>
        );
    }
}

export default Todolist;