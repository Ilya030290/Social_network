import React from 'react';
import s from "./Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AuthReducerStateType} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {Input} from "../../common/Forms/Forms";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.formBlock}>
                <div>
                    <Field placeholder={"Login"}
                           name={"login"}
                           component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={"Password"}
                           name={"password"}
                           component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field type={"checkbox"}
                           name={"rememberMe"}
                           component={Input}
                    />
                    Remember me
                </div>
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);


type LoginPagePropsType = AuthReducerStateType & {
    makeLogIn: (email: string, password: string, rememberMe: boolean) => void
    makeLogOut: () => void
}


export const LoginPage = (props: LoginPagePropsType) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
        props.makeLogIn(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={s.loginPage}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

