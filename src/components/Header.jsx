import { ArrowRightFromLine, BadgePercent, X } from 'lucide-react';
import React from 'react';
import FeedDropdown from '../util/FeedDropdown';
import FeedCard from '../util/FeedCard';

const Header = () => {

    return (
        <>
            <header className="lg:ms-[260px] fixed flex-col top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex justify-between basis-full items-center w-full py-2.5 px-2 sm:px-5">
                    <div className="flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2.5">
                            <span
                                id="header-nav-title"
                                className="hidden md:block text-lg font-semibold text-gray-800 dark:text-white"
                            >
                                Overview
                            </span>
                        </div>
                        <div className="lg:hidden">
                            <button
                                type="button"
                                className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                <ArrowRightFromLine className="size-4" />
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-full lg:mx-0"></div>
                    <div
                        className="hs-dropdown [--placement:bottom-right] relative inline-flex"
                    >
                        <div className="hs-tooltip [--placement:bottom] inline-block">
                            <button
                                id="hs-pro-dnhd"
                                type="button"
                                className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                aria-label="Dropdown"
                            >
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                            </button>
                            <span
                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                role="tooltip"
                            >
                                Help and Support
                            </span>
                        </div>
                        <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dnhd"
                        >
                            <div className="p-1">
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://help.feedspace.io/en/category/faqs-yf60ha/?utm_source=app&utm_medium=faq&utm_campaign=help+section"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-question">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                    FAQs
                                </a>
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://help.feedspace.io/en/category/tutorials-1uf70pn/?utm_source=help-section&utm_medium=homepage&utm_campaign=tutorials-in-the-help-section"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tv-minimal-play">
                                        <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
                                        <path d="M7 21h10" />
                                        <rect width="20" height="14" x="2" y="3" rx="2" />
                                    </svg>
                                    Tutorials
                                </a>
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lightbulb">
                                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                        <path d="M9 18h6" />
                                        <path d="M10 22h4" />
                                    </svg>
                                    Request a Feature
                                </a>

                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                        <path d="M8 12h.01" />
                                        <path d="M12 12h.01" />
                                        <path d="M16 12h.01" />
                                    </svg>
                                    Give us a Feedback
                                </a>
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://www.feedspace.io/contact/?utm_source=app&utm_medium=contact+us&utm_campaign=help+section"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-at-sign">
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                    </svg>
                                    Contact Us
                                </a>

                                <div
                                    className="my-1 border-t border-gray-200 dark:border-neutral-800"
                                ></div>


                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://feedspacecommunity.slack.com/join/shared_invite/zt-nr9oq7ud-UkUtpqigIzW9fPNDmBZ8ug#/shared-invite/email"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-slack">
                                        <rect width="3" height="8" x="13" y="2" rx="1.5" />
                                        <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
                                        <rect width="3" height="8" x="8" y="14" rx="1.5" />
                                        <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
                                        <rect width="8" height="3" x="14" y="13" rx="1.5" />
                                        <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
                                        <rect width="8" height="3" x="2" y="8" rx="1.5" />
                                        <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
                                    </svg>
                                    Join Slack Community
                                </a>
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://x.com/getfeedspace"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"></path>
                                    </svg>
                                    Find us on Twitter
                                </a>
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://www.linkedin.com/company/getfeedspace"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    Find us on LinkedIn
                                </a>
                                <a
                                    className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="https://www.instagram.com/getfeedspace"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                    Find us on Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[38px]">
                        <div
                            id="header-profile-dd"
                            className="hs-dropdown inline-flex [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start"
                        >
                            <button
                                id="header-profile-dd-btn"
                                type="button"
                                className="inline-flex shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-none"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                aria-label="Dropdown"
                            >
                                <div className="flex items-center justify-center">
                                    <div className="w-9 h-9 rounded-full bg-[#6172f3] flex items-center justify-center">
                                        <span className="text-white text-lg ">P</span>
                                    </div>
                                </div>
                            </button>

                            <div
                                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="header-profile-dd-btn"
                            >
                                <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                                    <a
                                        className="cursor-pointer py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <div className="flex items-center justify-center">
                                            <div className="w-9 h-9 rounded-full bg-[#6172f3] flex items-center justify-center mt-1">
                                                <span className="text-white text-lg ">P</span>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <span
                                                className="text-sm font-semibold text-gray-800 dark:text-neutral-300"
                                            >
                                                James Collison
                                            </span>
                                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                Preline@HS
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-1">
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg
                                            className="shrink-0 mt-0.5 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        My Profile
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-bell shrink-0 mt-0.5 size-4"
                                        >
                                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                        </svg>
                                        Notifications
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-handshake size-4">
                                            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                                            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                                            <path d="m21 3 1 11h-2" />
                                            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                                            <path d="M3 4h8" />
                                        </svg>
                                        Refer & Earn
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-receipt-text size-4">
                                            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                                            <path d="M14 8H8" />
                                            <path d="M16 12H8" />
                                            <path d="M13 16H8" />
                                        </svg>
                                        Manage Subscription
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database size-4">
                                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                                            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                                            <path d="M3 12A9 3 0 0 0 21 12" />
                                        </svg>
                                        Manage Storage
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-dollar-sign size-4">
                                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                                            <path d="M12 18V6" />
                                        </svg>
                                        Plans
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-braces shrink-0 mt-0.5 size-4"
                                        >
                                            <path
                                                d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
                                            />
                                            <path
                                                d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
                                            />
                                        </svg>
                                        API Access
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-code-xml shrink-0 mt-0.5 size-4"
                                        >
                                            <path d="m18 16 4-4-4-4" />
                                            <path d="m6 8-4 4 4 4" />
                                            <path d="m14.5 4-5 16" />
                                        </svg>
                                        Webhook Setup
                                    </a>
                                    <a
                                        className="cursor-pointer flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-full-screen-modal" data-hs-overlay="#profile-modal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-users shrink-0 mt-0.5 size-4">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>

                                        Manage Team
                                    </a>
                                </div>
                                <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-800 dark:text-neutral-300">Dark Mode</span>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>

                                    </div>
                                </div>
                                <div className="p-1 border-gray-200 dark:border-neutral-800">
                                    <a
                                        href="#"
                                        data-navigo
                                        type="button"
                                        className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-log-out shrink-0 size-4 mt-0.5"
                                        >
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" x2="9" y1="12" y2="12" />
                                        </svg>
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
            <main id="content" className="lg:ps-[260px] pt-[59px] bg-gray-50">
                <div className="p-2 sm:p-5 md:pt-5 space-y-5">
                    <div
                        id="app"
                        className="min-h-[calc(100vh-115px)] sm:min-h-[calc(100vh-163px)]"
                    >
                        <div id="dismiss-alert" className="mt-[-20px] mr-[-20px] ml-[-20px] mb-5 hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 text-sm font-medium p-4 dark:text-white dark:from-neutral-700 dark:to-neutral-700 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-dismiss-button-label">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <BadgePercent className="shrink-0 size-5 mt-0.5" />
                                </div>
                                <div className="ms-2">
                                    <h3 id="hs-dismiss-button-label" className="text-sm font-medium">
                                        Refer a friend and get up to 30% off!
                                    </h3>
                                </div>
                                <div className="ps-3 ms-auto">
                                    <div className="mt-1">
                                        <button type="button" className="inline-flex text-[#6b7280] hover:text-black focus:outline-none dark:bg-transparent dark:text-neutral-400" data-hs-remove-element="#dismiss-alert">
                                            <X className="shrink-0 size-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="grid sm:grid-cols-12 gap-4">
                                <div className="sm:col-span-5 sm:order-2">
                                    <div className="bg-gray-100 rounded-xl overflow-hidden dark:bg-neutral-700 h-[160px]">
                                    </div>
                                </div>
                                <div className="sm:col-span-7 sm:order-1">
                                    <div className="h-full flex flex-col justify-between space-y-3">
                                        <div>
                                            <h3 className="text-lg sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                                This is a heading text for top banner. Can be up to 2 -3 liner.
                                            </h3>
                                            <p className="mt-1 sm:mt-3 text-gray-500 dark:text-neutral-500">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            </p>
                                        </div>
                                        <p>
                                            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                                                Upgrade
                                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 md:p-5 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="flex flex-wrap justify-between items-center gap-x-2">
                                <h1 className="order-1 text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    All types of Feeds
                                </h1>
                                <div className="w-[100%] md:w-auto mt-2 md:mt-0 ml-auto order-3 md:order-2 flex flex-wrap justify-end items-center gap-2">
                                    <FeedDropdown />
                                </div>
                            </div>
                            <div className="grid pt-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-5">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <FeedCard key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Header;