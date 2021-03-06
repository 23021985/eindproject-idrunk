

function Input({labelId, name, type, placeholder, errors, register, required,  minLength, maxLength, pattern, requiredError, minLengthError, maxLengthError, patternError}) {

    return (
        <label htmlFor={name} id={labelId}>
            <input
                type={type}
                className="textInput"
                name={name}
                id={name}
                placeholder={placeholder}
                {...register(
                    name,
                    {
                        required: required,
                        minLength: minLength,
                        maxLength: maxLength,
                        pattern: pattern
                    })}
            />
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">{requiredError}</span>}
            {errors[name] && errors[name].type === "minLength" && <span className="errorMessage">{minLengthError}</span>}
            {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage">{maxLengthError}</span>}
            {errors[name] && errors[name].type === "pattern" && <span className="errorMessage">{patternError}</span>}

        </label>
    )
}
export default Input;
