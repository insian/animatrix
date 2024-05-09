import React, { useState, useEffect } from "react";
import validator from "validator";

const TextAreaV = (props) => {
    const [value, setValue] = useState(props.value || "");
    const [errors, setErrors] = useState("");

    const validate = (value, validations) => {
        let res = [];
        if (validations) {
            validations.forEach((element) => {
                const v = element;
                try {
                    const args = v.args;
                    let flag = true;
                    if (!args || args.length === 0) {
                        flag = validator[v.handle](value);
                    } else {
                        flag = validator[v.handle](value, ...args);
                    }
                    if (v.not) flag = !flag;

                    if (!flag)
                        res.push(
                            v.errorMsg ? v.errorMsg : "Error in: " + v.handle
                        );
                } catch (e) {
                    console.log(e);
                    res.push(
                        "CRITICAL ERROR, PLEASE CHECK LOGS. You may be calling a non-existing validator or using the wrong arguments."
                    );
                }
            });
        }

        if (res.length === 0) {
            setErrors((errors) => "");
        } else {
            const msg = res.join("\n");
            setErrors((errors) => msg);
        }

        if (props.informValidity) {
            props.informValidity(props.componentId, res.length === 0);
        }
    };

    const handleOnChange = (event) => {
        setValue(event.target.value);
        validate(event.target.value, props.validations);

        if (props.informData) props.informData(event.target.value);
    };

    useEffect(() => {
        if (props.forceValidation) {
            validate(value, props.validations);
        }
    }, []);

    return (
        <div>
            <textarea
                className={props.className}
                type="text"
                id={props.id}
                placeholder={props.placeholder}
                onChange={handleOnChange}
                value={value}
                name={props.name}
            />
            <p className="text-[#ff7777] text-lg font-serif text-shadow-input w-1/2 text-left px-4">{errors}</p>
        </div>
    );
};

export default TextAreaV;
