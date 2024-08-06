import { useState } from 'react';
import StyledBox from './StyledBox';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Box = () => {
    const [color, setColor] = useState("");
    const [colorError, setColorError] = useState("");
    const [colors, setColors] = useState([]);


    const handleColor = (e) => {
        e.preventDefault();
        setColorError("");
        setColors([...colors, color]);
        setColor("");
    }

    const handleChange = (e) => {
        setColor(e.target.value);
        if (e.target.value.length < 1) {
            setColorError("Color is required!");
        } else if (e.target.value.length < 3) {
            setColorError("Color must be 3 characters or longer!");
        } else {
            setColorError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleColor}>
                <div>
                    <label>Color: </label>
                    <input type="text" value={color} onChange={handleChange} />
                    {
                        colorError && <p>{colorError}</p>
                    }
                </div>
                <input type="submit" value="Add" disabled={!!colorError} className='mt-2' />
            </form>
            <div className='d-flex , mt-2' >
                {colors.map((color, index) => (
                    <StyledBox key={index} backGroundColor={color} className=" mx-3"></StyledBox>
                ))}
            </div>
        </div>
    )
}

export default Box;