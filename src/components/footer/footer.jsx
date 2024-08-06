
import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { FiFacebook } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc';
import { SlSocialGoogle, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';
import { LuInstagram } from 'react-icons/lu';

export default function App() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: "#def8de" }}>
            <MDBContainer className='p-4'>
                <section>
                    <MDBRow>
                        <MDBCol lg='12' md='12'>
                            <div className='d-flex justify-content-center flex-wrap mb-4 mt-3'>
                                <a className="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: "#3b5998" }}
                                    href="#!"
                                    role="button">
                                    <FiFacebook />
                                </a>

                                <a className="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: "#55acee" }}
                                    href="#!"
                                    role="button">
                                    <SlSocialTwitter />
                                </a>

                                <a className="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: "#dd4b39" }}
                                    href="#!"
                                    role="button">
                                    <SlSocialGoogle />
                                </a>

                                <a className="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: "#ac2bac" }}
                                    href="#!"
                                    role="button">
                                    <LuInstagram />
                                </a>

                                <a className="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: "#0082ca" }}
                                    href="#!"
                                    role="button">
                                    <SlSocialLinkedin />
                                </a>
                                <a className="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: "#333333" }}
                                    href="#!"
                                    role="button">
                                    <VscGithub />
                                </a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: '#415094' }}>
                © 2024 Copyright
            </div>
        </MDBFooter>
    );
}
