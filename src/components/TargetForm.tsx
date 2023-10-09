const TargetForm = () => {
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="savingTarget">Set saving target</label>
                    <input type="number" name="savingTarget" id="savingTarget"/>
                </div>
                <button>Add target</button>
            </form>
            <p>Current saving: </p>
            <p>Target: </p>
            <progress max={2000} value={100}/>
        </div>
    );
}

export default TargetForm;