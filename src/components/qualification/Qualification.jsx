import React from "react";
import "./qualification.css";

function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button 
                    qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                            Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content 
                    qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student</h3>
                                <span className="qualification__subtitle">Amity University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <span className="qualification__subtitle">Spring Meadows</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <span className="qualification__subtitle">DAV Public School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2004 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;