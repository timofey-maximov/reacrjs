import React, { useEffect, useMemo, useState } from "react";

export const FormError = (props) => {
    const [errorsWithValueArray, setErrorsWithValueArray] = useState([]);

    useEffect(() => {
        var filteredErrors = props.errors.filter(error => {
            if (error) {
                return true;
            } else {
                return false;
            }
        });

        setErrorsWithValueArray(filteredErrors);
    }, [props.errors]);

    return (
        <span>
            {errorsWithValueArray.map((error, index) =>
                <span key={index}>
                    {error}
                    <br />
                </span>
            )}
        </span>
    );
}