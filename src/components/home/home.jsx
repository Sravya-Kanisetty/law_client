
import React, { useState } from "react";
import "../home/home.css";
import Carousal from "../corousal/corousal";
import { IoMailOutline } from "react-icons/io5";
import { MdWifiCalling } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import Footer from "../footer/footer";
import { Menu, MenuItem } from "@mui/material";

export function Home() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div className="header-container">
                <img
                    src={require("../../images/lawlogo.png")}
                    className="logo"
                    alt="Law Logo"
                />
                <div className="profile-menu">
                    <h5 className="login-signup" onClick={handleClick}>Login/Signup</h5>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

            <div>
                <Carousal />
            </div>
            <br /><br />

            <div className="text-center display-5">
                <label className="mb-5" style={{ color: "#A235EC" }}><b><strong>STRATEGIC</strong></b></label>
            </div>

            <div className="row bg-light mx-2 mx-md-5">
                <div className="col-lg-4 col-md-6 col-sm-12 me-5 mb-4 ms-1">
                    <br />
                    <img src={require("../../images/rightcardimg.jpg")} className="img-fluid" alt="img" />
                </div>
                <div className="col-lg-6">
                    <div className="row text-center">
                        <div className="col-6 col-md-4"><br /><br />
                            <img src={require("../../images/icon1.png")} className="img-fluid" alt="icon1" /><br /><br />
                            <label><b>Over 50 years of family law experience between us</b></label><br /><br />
                        </div>
                        <div className="col-6 col-md-4"><br /><br />
                            <img src={require("../../images/icon2.png")} className="img-fluid" alt="icon2" /><br /><br />
                            <label><b>All of our lawyers collaborate and strategize together</b></label><br /><br />
                        </div>
                        <div className="col-6 col-md-4"><br /><br />
                            <img src={require("../../images/icon3.png")} className="img-fluid" alt="icon3" /><br /><br />
                            <label><b>Described as a Power House Law Firm by the Globe and Mail</b></label><br /><br />
                        </div>
                        <div className="col-6 col-md-4"><br /><br />
                            <img src={require("../../images/icon4.png")} className="img-fluid" alt="icon4" /><br /><br />
                            <label><b>Voted as the #1 Top Divorce Lawyers in BC</b></label><br /><br />
                        </div>
                        <div className="col-6 col-md-4"><br /><br />
                            <img src={require("../../images/icon5.png")} className="img-fluid" alt="icon5" /><br /><br />
                            <label><b>Successful on multiple groundbreaking family law cases</b></label><br /><br />
                        </div>
                        <div className="col-6 col-md-4"><br /><br />
                            <img src={require("../../images/icon6.png")} className="img-fluid" alt="icon6" /><br /><br />
                            <label><b>Special focus on complex family law issues including high net worth asset division and child abduction</b></label><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />


            <div className="row bg-light mx-2 mx-md-5">
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-12 text-center">
                            <label className="display-6" style={{ color: "#A235EC" }}><b>Latest Updates</b></label>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center mt-5">
                            <div className="card text-center text-light w-75" style={{ backgroundColor: "#415094" }}>
                                <h5 className="card-title mt-5">MAY 2024</h5><br />Change in domicile status
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <label><b>Why startups are returning home</b></label>
                            <p>Our Partners Sumit Sinha and Ashima Dewan, jointly authored an article on “Change in domicile status: Why startups are returning home” published by Financial Express (India).</p>
                            <a href="updates" style={{ textDecoration: "none" }}>Read More</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center mt-5">
                            <div className="card text-center text-light w-75" style={{ backgroundColor: "#415094" }}>
                                <h5 className="card-title mt-5">JUN 2024</h5><br />NUCLEAR POWER
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <label><b>Awaiting Its Turn!</b></label>
                            <p>Our Partner, Pallavi Bedi and Principal Associate, Ashita Bali recently wrote an article on 'Nuclear Power: Awaiting Its Turn!'. In this article, published on Mondaq, they discuss the current scenario for nuclear.</p>
                            <a href="updates" style={{ textDecoration: "none" }}>Read More</a>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 me-5 ms-1">
                    <br />
                    <img src={require("../../images/leftcardimg.jpg")} style={{ marginTop: "100px" }} className="img-fluid" alt="img" />
                </div>
                <br />
            </div>
            <br /><br />


            <div className="text-center display-6 text-secondary">
                <label style={{ color: "#A235EC" }}><b>Top Lawyers</b></label><br /><br />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={require("../../images/laywer3.jpg")} className="card-img-top" alt="Karen Tiwana" />
                            <div className="card-body">
                                <h5 className="card-title">Karen Tiwana</h5>
                                <p className="card-text">Estate Litigation Lawyer</p>
                                <a href="#" className="btn text-light" onClick={(e) => {
                                    e.preventDefault();
                                    alert("Confirmation mail has been sent..Book your slot");
                                }} style={{ backgroundColor: "#A235EC" }}>Book Your Consultation Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={require("../../images/lawyer6.jpg")} className="card-img-top" alt="Jenny Bains" />
                            <div className="card-body">
                                <h5 className="card-title">Jenny Bains</h5>
                                <p className="card-text">Family Lawyer</p>
                                <a href="#" className="btn text-light" onClick={(e) => {
                                    e.preventDefault();
                                    alert("Confirmation mail has been sent..Book your slot");
                                }} style={{ backgroundColor: "#A235EC" }}>Book Your Consultation Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={require("../../images/lawyer5.jpg")} className="card-img-top" alt="Harry Saini" />
                            <div className="card-body">
                                <h5 className="card-title">Harry Saini</h5>
                                <p className="card-text">Judicial Review Lawyer</p>
                                <a href="#" className="btn text-light" onClick={(e) => {
                                    e.preventDefault();
                                    alert("Confirmation mail has been sent..Book your slot");
                                }} style={{ backgroundColor: "#A235EC" }}>Book Your Consultation Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={require("../../images/laywer2.png")} className="card-img-top" alt="Mandy Lai" />
                            <div className="card-body">
                                <h5 className="card-title">Mandy Lai</h5>
                                <p className="card-text">Family Lawyer | Mediator</p>
                                <a href="#" className="btn text-light" onClick={(e) => {
                                    e.preventDefault();
                                    alert("Confirmation mail has been sent..Book your slot");
                                }} style={{ backgroundColor: "#A235EC" }}>Book Your Consultation Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={require("../../images/lawyer4.jpg")} className="card-img-top" alt="Michelle Yau" />
                            <div className="card-body">
                                <h5 className="card-title">Michelle Yau</h5>
                                <p className="card-text">Immigration Lawyer</p>
                                <a href="#" className="btn text-light" onClick={(e) => {
                                    e.preventDefault();
                                    alert("Confirmation mail has been sent..Book your slot");
                                }} style={{ backgroundColor: "#A235EC" }}>Book Your Consultation Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 mb-3">
                        <div className="card" style={{ width: "102%" }}>
                            <img src={require("../../images/lawyer9.jpg")} className="card-img-top" alt="Ashley Ahluwalia" />
                            <div className="card-body">
                                <h5 className="card-title">Ashley Ahluwalia</h5>
                                <p className="card-text">Family Lawyer</p>
                                <a href="#" className="btn text-light" onClick={(e) => {
                                    e.preventDefault();
                                    alert("Confirmation mail has been sent..Book your slot");
                                }} style={{ backgroundColor: "#A235EC" }}>Book Your Consultation Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center display-6 text-secondary white-box single-summery"><br />
                <label style={{ color: "#A235EC" }}><b>Our Partners</b></label><br /><br />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-2 mb-3" class="partners-zoom">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Harsh Arora</h5>
                                <p className="card-text">New Delhi</p>
                                <p className="card-text">VCard | EMail</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mb-3" class="partners-zoom1">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Gaurav Dudeji</h5>
                                <p className="card-text">Mumbai</p>
                                <p className="card-text">VCard | EMail</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mb-3" class="partners-zoom">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Aman Avinav</h5>
                                <p className="card-text">Kolkata</p>
                                <p className="card-text">VCard | EMail</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mb-3" class="partners-zoom1">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Pallavi Bedi</h5>
                                <p className="card-text">Mumbai</p>
                                <p className="card-text">VCard | EMail</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mb-3" class="partners-zoom">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title">Sumit Sinha</h5>
                                <p className="card-text">New Delhi</p>
                                <p className="card-text">VCard | EMail</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />


            <div className="text-center display-6 ">
                <br />
                <label style={{ color: "#A235EC" }}><b>Quick Summary</b></label>
                <br /><br />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
                        <div className="card mt-4 summary">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2">Client</h5>
                                <label className="card-text mb-2">Total Client</label>
                                <h5 className="card-title">62</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
                        <div className="card mt-4 summary">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2">Lawyer</h5>
                                <label className="card-text mb-2">Total Lawyer</label>
                                <h5 className="card-title">18</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
                        <div className="card mt-4 summary">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2">Running Cases</h5>
                                <label className="card-text mb-2">Total Cases</label>
                                <h5 className="card-title">13</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
                        <div className="card mt-4 summary">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2">Waiting Cases</h5>
                                <label className="card-text mb-2">Total Waiting Cases</label>
                                <h5 className="card-title">9</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
                        <div className="card mt-4 summary">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2">Closed Cases</h5>
                                <label className="card-text mb-2">Total Closed Cases</label>
                                <h5 className="card-title">2</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-3">
                        <div className="card mt-4 summary">
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2">Staff</h5>
                                <label className="card-text mb-2">Total Staff</label>
                                <h5 className="card-title">9</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />


            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card bg-item-badge h-100">
                            <div className="card-body bg-light">
                                <h3 style={{ color: "#415094" }}>Contact with us</h3>
                                <br />
                                <h4 className="contacts" ><MdWifiCalling className="contacts-icons" />Call us:</h4>
                                <p>+012 789654321</p>
                                <h4 className="contacts"><IoMailOutline className="contacts-icons" />Mail us:</h4>
                                <p>company@mail.com</p>
                                <h4 className="contacts"><IoMdTime className="contacts-icons" />Service Hours:</h4>
                                <p>10.00 am - 08.00 pm</p>
                                <h4 className="contacts"><GrLocation className="contacts-icons" />Address:</h4>
                                <p>2779 Rubaiyat Road, Traverse City, MI 49684</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <form className="border p-4 bg-light rounded">
                            <h4 style={{ color: "#415094" }}><b>Get in Touch</b></h4>
                            <div className="form-group mb-3">
                                <label className="get_in_touch_form">Your Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="get_in_touch_form">Your Email</label>
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="get_in_touch_form">Your Phone Number</label>
                                <input type="text" className="form-control" placeholder="Your Phone Number" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="get_in_touch_form">Your Message</label>
                                <textarea className="form-control" placeholder="Your Message" style={{ height: "20vh" }}></textarea>
                            </div>
                            <input type="submit" className="btn mt-2 text-light" value="Submit" style={{ backgroundColor: "#A235EC" }} onClick={(e) => {
                                e.preventDefault();
                                alert("Details Submitted...");
                            }} />
                        </form>
                    </div>
                </div>
            </div>


            <div className="row bg-light mx-2 mx-md-5 mt-5">
                <div className="col-12">
                    <h2 className="text-center mb-4" style={{ color: "#A235EC" }}>Our Location</h2>
                    <div className="map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019896158204!2d144.9630583153181!3d-37.81621897975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772e33d2b9eab0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1589611526487!5m2!1sen!2sau"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <br /><br />

            <Footer></Footer>

        </div >
    );
}
