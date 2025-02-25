import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import '../styles/AllVehicles.css';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useLogoutMutation } from "../slices/usersApiSlice";
import { useNewvehicleMutation } from '../slices/vehicleApiSlice';
import { logout } from "../slices/authSlice";

import Image1 from '../images/sidenavbar/Dashboard.png';
import Image2 from '../images/sidenavbar/EVehicle.png';
import Image3 from '../images/sidenavbar/packages.png';
import Image4 from '../images/sidenavbar/Reservation.png';
import Image5 from '../images/sidenavbar/Maintenance.png';
import Image6 from '../images/sidenavbar/Damage.png';
import Image7 from '../images/sidenavbar/feedback.png';
import Image8 from '../images/sidenavbar/Loyalty.png';
import Image9 from '../images/sidenavbar/Delete.png';

import foot from '../images/Footer image.png';
import searchIcon from '../images/home/search.png';

import dashcars from '../images/vehicle/dashcars.png';
import Ecar from '../images/vehicle/Ecar.jpg';
import bike3 from '../images/vehicle/bike3.jpg';
import van1 from '../images/vehicle/van1.jpg';


const AllEVehicles = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [currentDate, setCurrentDate] = useState(new Date());

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    // Time
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Date
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = currentDate.toLocaleDateString();

    return (
        <div className='py-5'>

            <div className='searchbar'>
                <img src={searchIcon} className="search_icon" />
            </div>

            <div className='bacgroundImage'>

                <div className='backgroundImagePoster1'>
                    <img src={dashcars} className="Vdashboard1" />
                </div>

                <div class="body1">
                    <div class="container1">
                        <div class="card1">
                            <img src={Ecar} className='img1' />
                            <div class="intro1">
                                <h1>ECO CAR<br />(E-BENERECO-110)</h1>
                                <p className='p1' >what makes it so unique is that it’s<span> cars </span>what makes it so unique is that it’s</p>
                            </div>
                        </div>
                    </div>
                    <div class="container1">
                        <div class="card1">
                            <img src={bike3} className='img1' />
                            <div class="intro1">
                                <h1>ECO BIKE<br />(Ride1Up REVV1 FS)</h1>

                                <p className='p1'>what makes it so unique is that it’s <span> Ride1Up REVV1 FS </span>a really good SUPER73 imitation</p>
                            </div>
                        </div>
                    </div>
                    <div class="container1">
                        <div class="card1">
                            <img src={van1} className='img1' />
                            <div class="intro1">
                                <h1>ECO VAN<br />(E_NW200)</h1>
                                <p className='p1'>what makes it so unique is that it’s<span> vans </span>what makes it so unique is that it’s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttunc'>
                    <Link to='/vehicle_categories'><button className='button1'><span>Show more </span></button></Link>
                </div>
            </div>

            {/* Side Navbar */}
            <div id='side-navbar'>
                <ul>
                    <div id='clock'>
                        <div className='time font-monospace fs-1'>
                            {currentTime}
                        </div>
                        <div className='date fs-4'>
                            {formattedDate}
                        </div>
                    </div>

                    <br />
                    <LinkContainer to='/dashboard'>
                        <li>
                            <Link to='/dashboard' activeClassName='active-link' id='link'>
                                <img src={Image1} id='image1' />&nbsp;&nbsp; Dashboard
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/allvehicles'>
                        <li>
                            <Link to='/allvehicles' activeClassName='active-link' id='link'>
                                <img src={Image2} id='image1' />&nbsp;&nbsp; E-Vehicles
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/packages'>
                        <li>
                            <Link to='/packages' activeClassName='active-link' id='link'>
                                <img src={Image3} id='image1' />&nbsp;&nbsp; Packages
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/cusbookings'>
                        <li>
                            <Link to='/cusbookings' activeClassName='active-link' id='link'>
                                <img src={Image4} id='image1' />&nbsp;&nbsp; Reservation
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/maintenance'>
                        <li>
                            <Link to='/maintenance' activeClassName='active-link' id='link'>
                                <img src={Image5} id='image1' />&nbsp;&nbsp; Maintenace
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/incident'>
                        <li>
                            <Link to='/incident' activeClassName='active-link' id='link'>
                                <img src={Image6} id='image1' />&nbsp;&nbsp; Incidents
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/feedback'>
                        <li>
                            <Link to='/feedback' activeClassName='active-link' id='link'>
                                <img src={Image7} id='image1' />&nbsp;&nbsp; Feedback
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/loyalty'>
                        <li>
                            <Link to='/loyalty' activeClassName='active-link' id='link'>
                                <img src={Image8} id='image1' />&nbsp;&nbsp; Loyalty Points
                            </Link>
                        </li>
                    </LinkContainer>
                    <LinkContainer to='/logout' onClick={logoutHandler}>
                        <li>
                            <Link to='/logout' activeClassName='active-link' id='link'>
                                <img src={Image9} id='image1' />&nbsp;&nbsp; Remove Account
                            </Link>
                        </li>
                    </LinkContainer>
                </ul>
            </div>

            {/* Footer */}
            <div className='footerVehi'>
                <img src={foot} className="foot" />
                <div className='footlinks'>
                    <h4 className='heading'>Key Features</h4>
                    <a id='footlink' href="">E-Vehicles</a> <br />
                    <a id='footlink' href="">E-Vehicle Packages</a> <br />
                    <a id='footlink' href="">Reservations</a> <br />
                    <a id='footlink' href="">Maintenance</a> <br />
                    <a id='footlink' href="">Damage and Incidents</a> <br />
                    <a id='footlink' href="">Feedback and Rating</a> <br />
                    <a id='footlink' href="">Customer Loyalty</a> <br />
                </div>
            </div>
            <h5 className='copyright'> 2024 copyright EcoRide.com</h5>

        </div>
    )
}

export default AllEVehicles