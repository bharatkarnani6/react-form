import react, { useState } from 'react';
import './Sidebar.css';
import FormData from '../../Pages/FormData/FormData'
import Details from '../../Pages/Details/Details';
export default function Sidebar() {
    const [formdatashow, setformdatashow] = useState(true);
    const [detailsdatashow, setdetailsdatashow] = useState(false);
    const formtoggle = () => {
        setdetailsdatashow(false)
        setformdatashow(true)
    }
    const detailstoggle = () => {
        setdetailsdatashow(true)
        setformdatashow(false)
    }
    return (
        <div>
            <div className="sidenav">
                <div className="links">
                    <h3 style={{ cursor: 'pointer' }} onClick={formtoggle}>Form</h3>
                    <h3 style={{ cursor: 'pointer' }} onClick={detailstoggle}>Details</h3>
                </div>
            </div>
            {formdatashow && (<FormData />)}
            {detailsdatashow && (<div className="mt-5 text-center"><Details /></div>)}

        </div>
    );
}