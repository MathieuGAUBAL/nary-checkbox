
const CheckBox = ({ labels, checkedState, handleOnChange }) => {
    return (
        <>
            {
                labels.map((label, index) => (
                    <label key={label.id}>
                        {label.label}
                        <input type='checkbox' name={label.name} id={label.label} value={label.name} checked={checkedState[index]} onChange={(e) => handleOnChange(index, e.target)}/>
                    </label>

                ))
            }
        </>
    )
}

export default CheckBox;