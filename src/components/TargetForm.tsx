import { ChangeEvent, FormEvent, useState } from "react";

const TargetForm = () => {

    const [target, setTarget] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTarget(Number(event.target.value));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setTarget(0);
    }

    return(
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="savingTarget">Set saving target</label>
                    <input type="number" name="savingTarget" id="savingTarget" value={target} onChange={handleChange} required/>
                </div>
                <button>Add target</button>
            </form>
            {/* <p>Current saving: </p> */}
            <p>Target:{target}</p>
            {/* <progress max={2000} value={100}/> */}
        </div>
    );
}

export default TargetForm;