import React, { useState, useEffect } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import AppsIcon from '@mui/icons-material/Apps';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SearchIcon from '@mui/icons-material/Search';
import SegmentIcon from '@mui/icons-material/Segment';

import { loginStatus } from '../../services/api';

import '../../styles/common/Header.css'

localStorage.setItem("theme", true);

function Header() {
    const [user, setUser] = useState(null);
    const [currentTheme, setCurrentTheme] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "false") {
            setCurrentTheme(false);
        }
    }, [])

    useEffect(() => {
        loginStatus()
            .then((account_id) => {
                console.log(account_id);
                setUser(account_id);
            })
            .catch((error) => {
                console.log('User not logged in:', error);
            });
    }, []);

    const toProfile = () => {
        window.location.href = '/account'
    }

    console.log(user);
    return (
        <header className="p-3 background-dark-light" id='headerNav'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-lg container-fluid ">

                    <a className="navbar-brand fw-bold me-lg-5 me-2 text-light" href="/">Ink<span style={{ color: "lightgreen" }}>spire</span></a>

                    <div className="border d-flex align-items-center d-lg-none w-50 px-3 py-2 rounded-5" role="search">
                        <a href='search' className="w-100 text-decoration-none">Search</a>
                        <span className=" border-0"><SearchIcon className='text-light' /></span>
                    </div>
                    <button type="button" className="navbar-toggler border-0" data-bs-toggle="modal" data-bs-target="#navModal">
                        <SegmentIcon className=" fs-1 text-light" />
                    </button>

                    {/* Here's the navigation */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 align-items-center d-lg-flex d-none">
                            <li className="nav-item ms-2">
                                <a className="nav-link text-light" href="#"><AppsIcon style={{ marginBottom: "3px" }} />Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#"><BookmarkIcon style={{ marginBottom: "3px" }} />Rankings</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light" href="#"><SupervisedUserCircleIcon style={{ marginBottom: "3px" }} />Author</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#" ><SearchIcon style={{ marginBottom: "3px" }} />Search</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav justify-content-end gap-4  d-lg-flex d-none'>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" onClick={themeToggle}>{currentTheme ? <LightModeIcon className='text-light' /> : <DarkModeIcon className='text-dark' />}</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#"><NotificationsIcon className="text-light" /></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#"><BarChartIcon className="text-light" /></a>

                            </li>
                            <li className={`nav-item rounded-5 ${user ? 'profileContainer border' : ''} border-dark`}>
                                {!user ? <a href='/login' className={`nav-link border rounded-5 px-3 text-dark`} style={{ backgroundColor: "lightgreen" }}>Sign In</a> : <img src='https://i.pinimg.com/originals/f4/98/16/f498165435a4eea60088a93eb72a3ff8.jpg' onClick={toProfile} style={{ width: "100%", cursor: "pointer" }} />}
                            </li>
                        </ul>
                    </div>

                    {/* Modal */}
                    <div className="modal fade" id="navModal" aria-labelledby="navModal" aria-hidden="true">
                        <div className="modal-dialog modal-slideout modal-dialog-centered modal-fullscreen ms-auto">
                            <div className="modal-content">
                                <div className="modal-body position-relative d-flex flex-column align-items-center justify-content-between h-100  background-dark">
                                    <div className="position-absolute top-0 end-0 p-3">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    {/* Main content for modal */}
                                    <div className="mt-5 d-flex flex-column align-items-center gap-5 text-light">

                                        <div className={`rounded-5 ${user ? 'profileContainer border' : ''} border-dark`}>
                                            {!user ? <a href='/login' className={`nav-link border rounded-5 px-3 py-2 text-dark`} style={{ backgroundColor: "lightgreen" }}>Sign In</a> : <img src='https://i.pinimg.com/originals/f4/98/16/f498165435a4eea60088a93eb72a3ff8.jpg' onClick={toProfile} style={{ width: "100%", cursor: "pointer" }} />}
                                        </div>
                                        <a href='#' className='nav-link text-decoration-none fs-4'>Category</a>
                                        <a href='#' className='nav-link text-decoration-none fs-4'>Rankings</a>
                                        <a href='#' className='nav-link text-decoration-none fs-4'>Author</a>

                                    </div>

                                    {/* Theme toogle */}
                                    {/* <div className="d-flex justify-content-center">
                                        <a className="nav-link" href="#" onClick={themeToggle}>{currentTheme ? <LightModeIcon className='text-light' style={{ fontSize: "2rem" }} /> : <DarkModeIcon style={{ fontSize: "2rem" }} />}</a>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header