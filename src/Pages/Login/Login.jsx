import React, { useCallback, useState } from "react";
import { ValidInput } from "../../Components/ValidInput/ValidInput";
import { FormError } from "../../Components/FormError/FormError";
import "./Login.css";

export const Login = () => {
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const onEmailValidChanged = useCallback((isValid) => {
        if (isValid === false) {
            setEmailError("Email введен неверно");
        } else {
            setEmailError();
        }
    }, []);

    const onPasswordValidChanged = useCallback((isValid) => {
        if (isValid === false) {
            setPasswordError("Пароль введен неверно");
        } else {
            setPasswordError();
        }
    }, []);

    return (
        <>
            <form>
                <FormError errors={[emailError, passwordError]} />
                <br />
                {/* <h1>Login</h1> */}
                <ValidInput
                    placeholder="Email"
                    minLenght={3}
                    onValidChanged={onEmailValidChanged}
                />
                <br />
                <ValidInput
                    placeholder="Пароль"
                    minLenght={5}
                    onValidChanged={onPasswordValidChanged}
                />
                <br />
                <input type="submit" className="entry-submit" name="Кнопка" value="Войти" />
            </form>
        </>
    );
}