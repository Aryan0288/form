
import React, { useEffect, useState } from "react";
import '../App.css'
const Form = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
            mode: "",
            select:""
        }
    )

    const changeHanlder = (event) => {
        const { name, type, checked, value } = event.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                // [event.target.name]: event.target.value
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log("finally print the value");
        console.log(formData);
    }
    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Form</legend>
                    <h2>Name</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={changeHanlder}
                        // value={formData.name}
                    />
                    <h2>email</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={changeHanlder}
                        // value={formData.email}
                    />
                    <h2>password</h2>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={changeHanlder}
                        // value={formData.password}
                    />
                    <h2>Gender</h2>

                    <input
                        type="radio"
                        name="mode"
                        // required
                        onChange={changeHanlder}
                        id="male"
                        // value="male"
                        checked={formData.mode === "male"}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="mode"
                        // required
                        onChange={changeHanlder}
                        id="female"
                        // value="female"
                        checked={formData.mode === "female"}
                    />
                    <label htmlFor="female">Female</label>
                    <div>
                        <label>Select your car : </label>
                        <select
                            name="select"
                            onChange={changeHanlder}
                            // value={formData.select}
                        >
                            <option value="scorpio">scorpio</option>
                            <option value="foutuner">foutuner</option>
                            <option value="Audi">Audi</option>
                            <option value="Mercedez">Mercedez</option>
                        </select>
                    </div>
                    <div>
                        <button >
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default Form;