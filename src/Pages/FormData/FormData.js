import react, { useState } from 'react';
import Details from '../Details/Details';

export default function FormData() {
    const [show, setshow] = useState(false);
    const [data, setdata] = useState({
        full_name: '',
        father_name: '',
        mother_name: '',
        mobile_number: 0,
        category: '',
        qualification: '',
    });

    const InputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        console.log(name, value);

        setdata((prev) => {
            if (name === 'full_name') {
                return {
                    full_name: value,
                    father_name: prev.father_name,
                    mother_name: prev.mother_name,
                    mobile_number: prev.mobile_number,
                    category: prev.category,
                    qualification: prev.qualification
                }
            } else if (name === 'father_name') {
                return {
                    full_name: prev.full_name,
                    father_name: value,
                    mother_name: prev.mother_name,
                    mobile_number: prev.mobile_number,
                    category: prev.category,
                    qualification: prev.qualification
                }
            } else if (name === 'mother_name') {
                return {
                    full_name: prev.full_name,
                    father_name: prev.father_name,
                    mother_name: value,
                    mobile_number: prev.mobile_number,
                    category: prev.category,
                    qualification: prev.qualification
                }
            } else if (name === 'mobile_number') {
                return {
                    full_name: prev.full_name,
                    father_name: prev.father_name,
                    mother_name: prev.mother_name,
                    mobile_number: value,
                    category: prev.category,
                    qualification: prev.qualification
                }
            } else if (name === 'category') {
                return {
                    full_name: prev.full_name,
                    father_name: prev.father_name,
                    mother_name: prev.mother_name,
                    mobile_number: prev.mobile_number,
                    category: value,
                    qualification: prev.qualification
                }
            } else if (name === 'qualification') {
                return {
                    full_name: prev.full_name,
                    father_name: prev.father_name,
                    mother_name: prev.mother_name,
                    mobile_number: prev.mobile_number,
                    category: prev.category,
                    qualification: value
                }
            }
        })
    }
    const onSubmits = (event) => {
        event.preventDefault();
        setshow(true)
        localStorage.setItem('Name', JSON.stringify(data.full_name));
        localStorage.setItem('Father Name', JSON.stringify(data.father_name));
        localStorage.setItem('Mother Name', JSON.stringify(data.mother_name));
        localStorage.setItem('Mobile Number', JSON.stringify(data.mobile_number));
        localStorage.setItem('Category', JSON.stringify(data.category));
        localStorage.setItem('Qualification', JSON.stringify(data.qualification));
    }
    return (
        <div className="container-fluid mt-5" style={{ width: '50%', margin: "0 auto" }} >
            <h1 className="text-center mb-5">College Registration Form</h1>
            <form onSubmit={onSubmits}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="full_name"
                        className="form-control"
                        value={data.full_name}
                        onChange={InputEvent}
                    />

                </div>
                <div className="mb-3">
                    <label className="form-label">Father Name</label>
                    <input
                        type="text"
                        name="father_name"
                        className="form-control"
                        value={data.father_name}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mother Name</label>
                    <input
                        type="text"
                        name="mother_name"
                        className="form-control"
                        value={data.mother_name}
                        onChange={InputEvent} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                        type="number"
                        name="mobile_number"
                        className="form-control"
                        value={data.mobile_number}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                        className="form-select"
                        name="category"
                        onChange={InputEvent}
                        value={data.category}>
                        <option defaultValue>Open this select menu</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC/ST">SC/ST</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Highest Qualification</label><br></br>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value='12th' name="qualification" onChange={InputEvent} />
                        <label className="form-check-label">12th </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="diploma" name="qualification" onChange={InputEvent} />
                        <label className="form-check-label" >Diploma</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}