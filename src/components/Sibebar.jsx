import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { AppWindowMac, ArrowUpRight, Bolt, BotMessageSquare, ChevronRight, ChevronsUpDown, ClipboardList, Download, GalleryVertical, Globe, Menu, Rocket } from 'lucide-react';

function Sibebar() {
    return (
        <aside
            className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="relative flex flex-col h-full max-h-full pt-3">
                <header className="h-[46px] px-8">
                    <Link
                        className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                        to={"/"}>
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-32 h-auto" />
                    </Link>
                </header>

                <div
                    className="flex flex-col mt-1.5 h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <nav
                        className="hs-accordion-group pb-3 w-full flex flex-col flex-wrap">
                        <ul className="flex flex-col gap-y-1 sidebar-nav-list">
                            <li className="px-5">
                                <Link
                                    className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                    to={"/"}>
                                    <GalleryVertical className='size-4' />
                                    Feedbox
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                    to={"/"}>
                                    <ClipboardList className='size-4' />
                                    Feed Forms
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                    to={"/"}>
                                    <Download className='size-4' />
                                    Import Feeds
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                    to={"/"}>
                                    <AppWindowMac className='size-4' />
                                    Feed Pages
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex h-9 gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 items-center justify-between"
                                    to={"/"}>
                                    <div class="flex items-center gap-x-3">
                                        <BotMessageSquare className='size-4' />
                                        Widgets
                                    </div>
                                    <span class="py-[3px] px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">Upcoming</span>
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex h-9 gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 items-center justify-between"
                                    to={"/"}>
                                    <div class="flex items-center gap-x-3">
                                        <BotMessageSquare className='size-4' />
                                        AI Studio
                                    </div>
                                    <span class="py-[3px] px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">Upcoming</span>
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex h-9 gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 items-center justify-between"
                                    to={"/"}>
                                    <div class="flex items-center gap-x-3">
                                        <BotMessageSquare className='size-4' />
                                        Tools
                                    </div>
                                    <span class="py-[3px] px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">Upcoming</span>
                                </Link>
                            </li>
                            <li
                                className="pt-5 px-8 mt-5 border-t border-gray-200 first:border-transparent first:pt-0 dark:border-neutral-700 dark:first:border-transparent">
                                <span
                                    className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                                    Workspace
                                </span>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex  items-center gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                    to={"/"}>
                                    <Globe className='size-4' />
                                    Custom Domain
                                </Link>
                            </li>
                            <li className="px-5">
                                <Link
                                    className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                    to={"/"}>
                                    <Bolt className='size-4' />
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-6 mt-auto">
                        <div
                            className="cursor-pointer px-4 py-3 bg-gradient-to-l from-blue-50 to-white rounded-lg border border-blue-200 flex-col justify-start items-start gap-2 inline-flex dark:from-neutral-900 dark:to-neutral-950 dark:border-neutral-700"
                        >
                            <h4 className="flex gap-1 items-center text-gray-900 text-base font-semibold font-['Inter'] leading-normal dark:text-white">
                                <Rocket className='size-4' />3 Days Left!</h4>
                            <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-none dark:text-neutral-500">Pick your plan to enjoy all the features.</p>
                            <p><span className="flex gap-1 text-blue-600 text-sm font-medium font-['Inter'] leading-tight dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Upgrade Plan <ArrowUpRight className="size-4" /></span></p>
                        </div>
                    </div>
                </div>

                <footer className="border-t border-gray-200 dark:border-neutral-700">
                    <div className="px-7">
                        <div
                            id="sidebar-workspaces-dd"
                            className="hs-dropdown [--auto-close:true] relative flex"
                        >
                            <button
                                id="sidebar-workspaces-dd-btn"
                                type="button"
                                className="group w-full inline-flex items-center py-3 text-start text-gray-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none dark:text-white"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                aria-label="Dropdown"
                            >
                                <svg
                                    className="size-8 shrink-0"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="block ms-3 truncate" title="Workspace One">
                                    <span
                                        className="block text-sm font-medium text-gray-800 group-hover:text-blue-600 group-focus-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-600 dark:group-focus-hover:text-blue-600 truncate"
                                    >
                                        Workspace One
                                    </span>
                                    <span
                                        className="block text-xs text-gray-500 dark:text-neutral-500 truncate"
                                    >
                                        notion.so
                                    </span>
                                </span>
                                <ChevronsUpDown className="shrink-0 size-3.5 ms-auto" />
                            </button>
                        </div>
                    </div>
                </footer>

                <div className="lg:hidden absolute top-3 -end-3 z-10">
                    <button
                        type="button"
                        className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        <Menu className="size-4" />
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sibebar;