import React from 'react'
import {AppBar, Toolbar, Button , Typography} from '@material-ui/core'

import { makeStyles } from "@material-ui/styles"

import $ from "jquery"

export default function NavBar() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles()

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
        <div>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      Yafe Chat
                    </Typography>
                    <Button color="inherit" onClick = {changeToLogIn}>Log In</Button>
                    <Button color="inherit" onClick = {changeToSignUp}>Sign Up</Button>
                  </Toolbar>
                </AppBar>
        </div>
    )
}
