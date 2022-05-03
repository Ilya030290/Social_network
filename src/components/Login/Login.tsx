import React from 'react';
import {Button, Checkbox, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import s from "./Login.module.css";

export const LoginPage = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className={s.loginPage}>
            <h1>LOGIN</h1>
            <form className={s.form}>
                <div>
                    <FormControl sx={{ m: 2, width: '30ch'}}>
                    <InputLabel htmlFor={"outlined-adornment-login"}>Login</InputLabel>
                    <OutlinedInput
                        id={"outlined-adornment-login"}
                        /*value={values.amount}
                        onChange={handleChange('amount')}*/
                        /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
                        label={"Login"}
                    />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 2, width: '30ch'}} variant={"outlined"}>
                    <InputLabel htmlFor={"outlined-adornment-password"}>Password</InputLabel>
                    <OutlinedInput
                        id={"outlined-adornment-password"}
                        /*type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}*/
                        endAdornment={
                            <InputAdornment position={"end"}>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    /*onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}*/
                                    edge="end"
                                >
                                    {/*{values.showPassword ? <VisibilityOff /> : <Visibility />}*/}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </div>
                <div>
                    <Checkbox {...label} defaultChecked color={"secondary"} />Remember me
                </div>
                <div>
                    <Button variant={"contained"}
                            color={"secondary"}
                            onClick={() => {}}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

