import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import { Button, ButtonGroup, Typography , TextField, Grid} from '@material-ui/core';
import {Card} from "react-bootstrap"
import {AccountCircle} from '@material-ui/icons';
import LockIcon from "@material-ui/icons/Lock"
import {useState} from "react"
import $ from "jquery"
import NavBar from "./NavBar"
import axios from "axios"
import {io} from "socket.io-client"
import { Redirect } from 'react-router-dom';

export default function Home() {

    const [LOGINusername , setLOGINusername] = useState("")
    const [LOGINpassword , setLOGINpassword] = useState("")

    const [SIGNUPusername , setSIGNUPusername] = useState("")
    const [SIGNUPpassword , setSIGNUPpassword] = useState("")

    const onLoginSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/login', {
            username: LOGINusername ,
            password: LOGINpassword
        }).then( res => {
            if (!res.data) {
                //add error screen screen
                return
            }
            window.localStorage.setItem('username', res.data.username);
            window.location.reload();
        })
   
    }
    const onSignupSubmit = (e) => {
        e.preventDefault()
        console.log(SIGNUPusername , SIGNUPpassword)
        axios.post('http://localhost:5000/signup', {
            username: SIGNUPusername ,
            password: SIGNUPpassword
          })
    }
    const onLOGINUsernameInputChange = (e) => {
        setLOGINusername(e.target.value)
    }
    const onLOGINPasswordInputChange = (e) => {
        setLOGINpassword(e.target.value)
    }

    const onSIGNUPUsernameInputChange = (e) => {
        setSIGNUPusername(e.target.value)
    }
    const onSIGNUPPasswordInputChange = (e) => {
        setSIGNUPpassword(e.target.value)
    }

    const changeToSignUp = () => {
        $("#logInForm").addClass("hide")
        $("#signUpForm").removeClass("hide")
        $("#cardTitle").html("Sign Up")
    }
    const changeToLogIn = () => {
        $("#logInForm").removeClass("hide")
        $("#signUpForm").addClass("hide")
        $("#cardTitle").html("Log In")
    }
    return (
        <div id = "body" >
            <NavBar />
            <Typography variant="h1" id = "heading">
                Yafe Chat
            </Typography>
            <ButtonGroup  variant="contained" color="primary" id = "infoButtons"  aria-label="contained primary button group">
                <Button onClick = {changeToSignUp} style={{minWidth: '150px' , minHeight: "60px"}}> Sign up</Button>
                <Button onClick = {changeToLogIn} style={{minWidth: '150px' , minHeight: "60px" }} >Log in</Button>
            </ButtonGroup>

            <Card border="info" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title id = "cardTitle">Log In</Card.Title>
            <Card.Text style = {{paddingTop: "20px"}}>
                <form onSubmit = {onLoginSubmit} id = "logInForm">
                    {/* username input */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle fontSize="large" />
                        </Grid>
                        <Grid item>
                            <TextField name = "username" id="input-with-icon-grid" label="Username" value = {LOGINusername} onChange = {onLOGINUsernameInputChange} />
                        </Grid>
                    </Grid>
                    {/* password input */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LockIcon fontSize = "large" />
                        </Grid>
                        <Grid item>
                            <TextField name = "password" id="input-with-icon-grid" type = "password" label="Password" value = {LOGINpassword} onChange = {onLOGINPasswordInputChange} />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" style={{minWidth: '150px' , minHeight: "60px" , marginTop: "20px" }} type = "submit" >Log in</Button>
                </form>
                <form onSubmit = {onSignupSubmit} id = "signUpForm" className = "hide">
                    {/* username input */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle fontSize="large" />
                        </Grid>
                        <Grid item>
                            <TextField name = "username" id="input-with-icon-grid" label="Username" value = {SIGNUPusername} onChange = { onSIGNUPUsernameInputChange} />
                        </Grid>
                    </Grid>
                    {/* password input */}
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LockIcon fontSize = "large" />
                        </Grid>
                        <Grid item>
                            <TextField name = "password" id="input-with-icon-grid" type = "password" value = {SIGNUPpassword} label="Password" onChange = { onSIGNUPPasswordInputChange} />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" style={{minWidth: '150px' , minHeight: "60px" , marginTop: "20px" }} type = "submit" >Sign Up</Button>
                </form>
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
