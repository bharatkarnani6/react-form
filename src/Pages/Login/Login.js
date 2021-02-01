import react, { useState } from 'react'
import Signup from '../Signup/Signup'
import { Modal, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import SecuredROutes from '../../Router/SecuredRoutes';

export default function Login() {
    let history = useHistory();
    const { register, handleSubmit } = useForm();
    const [show, setshow] = useState(false);
    const [error, seterror] = useState('');
    const modalToggle = () => {
        setshow(true);
    }
    const handleClose = () => {
        setshow(false)
    }
    const onSubmit = (data) => {
        if (data.email === 'admin@gmail.com' && data.password === '123') {
            console.log("success");
            localStorage.setItem('login', true);
            history.push('/dashboard')
        } else {
            seterror('Email or passowrd wrong')
        }

        if (data.password === data.confpassword) {
            console.log("success2");
            localStorage.setItem('Profile Name', data.name);
            history.push('/dashboard')
        } else {
            seterror('Password not  match')
        }
    };
    return (
        <div className="container-fluid" style={{ padding: '20px', width: '30%', marginTop: '200px', border: '2px solid black' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" ref={register} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" ref={register} />
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    <div className="col offset-2">
                        <button type="button" className="btn btn-danger" onClick={modalToggle}>Create a Account</button>
                    </div>
                </div>
            </form>
            {error}
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create an Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter Full Name" name="name" ref={register} />
                        </div>

                        <div className="form-group mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" ref={register} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="password" ref={register} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label"> Comfirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" name="confpassword" ref={register} />
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close</Button>
                        <Button type="submit" variant="primary">
                            Signup
                    </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}