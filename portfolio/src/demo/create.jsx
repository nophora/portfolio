import React, { Component } from 'react'
import { ReactComponent as User } from './user.svg'

import './create.css'
import './forms.css'

class Create extends Component {
    state = {



        image: '',
        indexs: false,
        user_name: '',
        user_lastname: '',
        email: '',
        password: '',
        check: false,
        mail: false,

    }

    profile = (e) => {

        let files = e.target.files;
        let file = files[0];
        let formdata = new FormData();
        formdata.append('file', file)


        let reader = new FileReader();
        reader.readAsDataURL(files[0])


        return reader.onload = (e) => {

            this.setState({ image: `${e.target.result}` })



        }
    }


    submit = event => {
        event.preventDefault();

        const reg = /\./;
        const reg2 = /@gmail\.com/;
        const reg3 = /@hotmail\.com/
        const find = reg.test(this.state.email);
        const find2 = reg2.test(this.state.email);
        const find3 = reg3.test(this.state.email);
        console.log('check', find === false || (find2 === false || find3 === false))

        if (this.state.user_name.length > 3 && this.state.user_lastname.length > 3 && this.state.email.length > 10 && this.state.password.length > 4 && find && (find2 || find3)) {
            const data = {
                image: this.state.image,
                user_name: this.state.user_name,
                user_lastname: this.state.user_lastname,
                user_email: this.state.email,
                user_password: this.state.password,
                date: Date.now(),
            };


            this.setState({ indexs: !this.state.indexs });

            localStorage.setItem('accont', JSON.stringify(data))

            setTimeout(() => {
                this.setState({
                    image: '',
                    user_name: '',
                    user_lastname: '',
                    email: '',
                    password: '',
                })
            }, 30)



        }
        else {
            if (this.state.user_name.length > 3 && this.state.user_lastname.length > 3 && this.state.email.length > 10 && this.state.password.length > 4 && (find === false || (find2 === false || find3 === false))) {
                this.setState({ mail: true })
            } else {
                this.setState({
                    check: true
                })
            }
        }

    }
    links = () => {
        return setTimeout(() => {
            return '/'
        }, 2000)
    }

    fleght = () => {
        this.setState({
            check: false,
            mail: false,
        })
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    };

    render() {
        /*        marginLeft: '11%',
                                marginTop: this.state.user_name.length >= 1 ? '-11%' : '-5%'
        */
        return (
            <div className="mformc">
                <div className="mf1">
                    <div className="mfeedback">
                    </div>
                    <div className="mreap">
                        <div className='ximage'>
                            <input type='file' className='mltn' onChange={(e) => { this.profile(e) }} name='img' />
                            {this.state.image.length < 1 ? <User className='userv' style={{ width: '30px', height: '30px', fill: '#ffff', }} alt='movtreil' /> :
                                <img src={this.state.image} className='googler' alt='g' onClick={this.props.goog} />}
                        </div>
                        <div className="gxname">Login</div>
                    </div>
                </div>
                <div className="mf2">
                    <div className="mfirstname1">
                        <div className="inwap">
                            <input
                                className='Mfirst'
                                type='text'
                                style={{
                                    borderBottomColor:
                                        this.state.check === true ? ' rgb(255, 38, 0)' :
                                            this.state.user_name.length >= 1 && this.state.user_name.length <= 2 ? ' rgb(255, 38, 0)' :
                                                this.state.user_name.length >= 5 && this.state.user_name.length <= 6 ? ' rgb(0, 255, 0)' : ' rgb(116, 116, 116)'

                                }}
                                name='user_name'
                                onClick={this.fleght}
                                value={this.state.user_name}
                                noValidate
                                onChange={this.handleChange}
                            />
                            <label style={{
                                marginTop: this.state.user_name.length >= 1 ? '-11%' : '-5%'

                            }} className='msl1f1'>Firstname</label>
                        </div>
                        {this.firstname()}

                    </div>

                    <div className="mfirstname">
                        <div className="inwap">

                            <input
                                className='Mfirst'
                                type='text'
                                style={{
                                    borderBottomColor:
                                        this.state.check === true ? ' rgb(255, 38, 0)' :
                                            this.state.user_lastname.length >= 1 && this.state.user_lastname.length <= 2 ? ' rgb(255, 38, 0)' :
                                                this.state.user_lastname.length >= 5 && this.state.user_lastname.length <= 6 ? ' rgb(0, 255, 0)' : ' rgb(116, 116, 116)'

                                }}
                                name='user_lastname'
                                onClick={this.fleght}
                                value={this.state.user_lastname}
                                noValidate
                                onChange={this.handleChange}
                            />
                            <label style={{
                                marginTop: this.state.user_lastname.length >= 1 ? '-11%' : '-5%'
                            }} className='msl1f1'>Lastname</label>
                        </div>
                        {this.lastname()}
                    </div>

                    <div className="mfirstname">
                        <div className="inwap">

                            <input
                                className='Mfirst'
                                type='text'
                                style={{
                                    borderBottomColor:
                                        this.state.mail === true ? ' rgb(255, 38, 0)' :
                                            this.state.check === true ? ' rgb(255, 38, 0)' :
                                                this.state.email.length >= 1 && this.state.email.length <= 2 ? ' rgb(255, 38, 0)' :
                                                    this.state.email.length >= 5 && this.state.email.length <= 6 ? ' rgb(0, 255, 0)' : ' rgb(116, 116, 116)'

                                }}

                                name='email'
                                onClick={this.fleght}
                                value={this.state.email}
                                noValidate
                                onChange={this.handleChange}
                            />
                            <label style={{
                                marginLeft: '-65%',
                                marginTop: this.state.email.length >= 1 ? '-11%' : '-5%'
                            }} className='msl1f1'>Email</label>
                        </div>
                        {this.email()}
                    </div>

                    <div className="mfirstname">
                        <div className="inwap">


                            <input
                                className='Mfirst'
                                type='password'
                                style={{
                                    borderBottomColor:
                                        this.state.check === true ? ' rgb(255, 38, 0)' :
                                            this.state.password.length >= 1 && this.state.password.length <= 2 ? ' rgb(255, 38, 0)' :
                                                this.state.password.length >= 5 && this.state.password.length <= 6 ? ' rgb(0, 255, 0)' : ' rgb(116, 116, 116)'

                                }}
                                name='password'
                                onClick={this.fleght}
                                value={this.state.password}
                                noValidate
                                onChange={this.handleChange}
                            />
                            <label style={{
                                marginTop: this.state.password.length >= 1 ? '-11%' : '-5%'
                            }} className='msl1f1'>Password</label>
                        </div>
                        {this.password()}
                    </div>


                </div>
                <div className="mf3">
                    <button onClick={this.submit} className='mcreate'>create</button>

                    <button onClick={this.props.login} className='mlogin'>longin</button>
                </div>
            </div>
        );
    }

    firstname = () => {
        const { user_name } = this.state
        return <div style={{
            color: this.state.check === true ? ' rgb(255, 38, 0)' : user_name.length >= 1 && user_name.length <= 2 ? ' rgb(255, 38, 0)' :
                user_name.length >= 5 && user_name.length <= 6 && ' rgb(0, 255, 0)'

        }} className="worng">{
                this.state.check === true ? 'Please check your name' :
                    user_name.length >= 1 && user_name.length <= 2 ?
                        'minimun of 3 charecters requed' :
                        user_name.length >= 5 && user_name.length <= 6 ?
                            'Good client' : ''
            }</div>
    }
    lastname = () => {
        const { user_lastname } = this.state
        return <div style={{
            color: this.state.check === true ? ' rgb(255, 38, 0)' : user_lastname.length >= 1 && user_lastname.length <= 2 ? ' rgb(255, 38, 0)' :
                user_lastname.length >= 5 && user_lastname.length <= 6 && ' rgb(0, 255, 0)'

        }} className="worng">{
                this.state.check === true ? 'Please check your lastname' :
                    user_lastname.length >= 1 && user_lastname.length <= 2 ?
                        'minimun of 3 charecters requed' :
                        user_lastname.length >= 5 && user_lastname.length <= 6 ?
                            'Good client' : ''
            }</div>
    }
    email = () => {
        const { email } = this.state
        return <div style={{
            color: this.state.mail === true ? ' rgb(255, 38, 0)' : this.state.check === true ? ' rgb(255, 38, 0)' : email.length >= 1 && email.length <= 2 ? ' rgb(255, 38, 0)' :
                email.length >= 5 && email.length <= 6 && ' rgb(0, 255, 0)'

        }} className="worng">{
                this.state.mail === true ? 'Please check your email' : this.state.check === true ? 'Please check your email' :
                    email.length >= 1 && email.length <= 2 ?
                        'minimun of 3 charecters requed' :
                        email.length >= 5 && email.length <= 6 ?
                            'Good client' : ''
            }</div>
    }
    password = () => {
        const { password } = this.state
        return <div style={{
            color: this.state.check === true ? ' rgb(255, 38, 0)' : password.length >= 1 && password.length <= 2 ? ' rgb(255, 38, 0)' :
                password.length >= 5 && password.length <= 6 && ' rgb(0, 255, 0)'

        }} className="worng">{
                this.state.check === true ? 'Please check your password' :
                    password.length >= 1 && password.length <= 2 ?
                        'minimun of 3 charecters requed' :
                        password.length >= 5 && password.length <= 6 ?
                            'Good client' : ''
            }</div>
    }
}


export default Create;