import React, { useCallback, useMemo, useState } from "react";
import "./ValidInput.css";

export const ValidInput = (props) => {
    const [isValid, setIsValid] = useState();

    const validClassName = useMemo(() => {
        if (isValid === true) {
            return "valid";
        } else if (isValid === false) {
            return "invalid";
        } else {
            return "";
        }
    }, [isValid]);

    const checkValid = useCallback((event) => {
        const inputText = event.target.value;

        if (inputText.length >= props.minLength) {
            if (props.onValidChanged) {
                props.onValidChanged(true);
            }
            setIsValid(true);
        } else {
            if (props.onValidChanged) {
                props.onValidChanged(false);
            }
            setIsValid(false);
        }

    }, [props.minLength]);

    return (
        <input
            className={`valid-input ${validClassName}`}
            placeholder={props.placeholder}
            onChange={checkValid}
        />
    );
}