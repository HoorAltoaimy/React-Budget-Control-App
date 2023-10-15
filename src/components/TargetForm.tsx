import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type TargetType = {
  getSaving: (mySaving: number) => void;
  saving: number;
};

const TargetForm = (props: TargetType) => {
  const [target, setTarget] = useState(0);

  const [invalidInput, setInvalidInput] = useState(false);
  useEffect(() => {
    if (target < 0) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
    }
  }, [target]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getSaving(props.saving);
    setTarget(0);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="savingTarget">Set saving target</label>
          <input
            type="number"
            name="savingTarget"
            id="savingTarget"
            value={target}
            onChange={handleChange}
            required
          />
        </div>
        <button>Reset</button>
      </form>
      <p>Current saving: {props.saving}</p>
      <p>Target:{invalidInput ? "" : target}</p>
      <p>Progress: </p>
      <progress max={target} value={(props.saving / target) * 100} />
    </div>
  );
};

export default TargetForm;
