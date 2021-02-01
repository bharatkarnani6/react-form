import react, { useState, useEffect } from 'react'

export default function Details(props) {
    const [Name, setName] = useState('');
    const [FatherName, setFatherName] = useState('');
    const [MotherName, setMotherName] = useState('');
    const [MobileNumber, setMobileNumber] = useState('');
    const [Category, setCategory] = useState('');
    const [Qualification, setQualification] = useState('');

    useEffect(() => {
        if (localStorage.length != 0) {
            setName(localStorage.getItem('Name').replace(/['"]+/g, ''));
            setFatherName(localStorage.getItem('Father Name').replace(/['"]+/g, ''));
            setMotherName(localStorage.getItem('Mother Name').replace(/['"]+/g, ''));
            setMobileNumber(localStorage.getItem('Mobile Number').replace(/['"]+/g, ''));
            setCategory(localStorage.getItem('Category').replace(/['"]+/g, ''));
            setQualification(localStorage.getItem('Qualification').replace(/['"]+/g, ''));
        }

    }, [])

    return (
        <div>
            <h1 className="mt-5" style={{ marginTop: '100px' }}>Details</h1>
            <div className="card mt-5 mb-5" style={{ width: '18rem', marginLeft: '600px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Details</h5>
                    <div className="row">
                        <div className="col">Full Name</div>
                        <div className="col">{Name}</div>
                    </div>
                    <div className="row">
                        <div className="col">Father Name</div>
                        <div className="col">{FatherName}</div>
                    </div>
                    <div className="row">
                        <div className="col">Mother Name</div>
                        <div className="col">{MotherName}</div>
                    </div>
                    <div className="row">
                        <div className="col">Mobile Number</div>
                        <div className="col">{MobileNumber}</div>
                    </div>
                    <div className="row">
                        <div className="col">Category</div>
                        <div className="col">{Category}</div>
                    </div>
                    <div className="row">
                        <div className="col">Qualification</div>
                        <div className="col">{Qualification}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}