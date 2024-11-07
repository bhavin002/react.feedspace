import React from 'react';

const FeedDropdown = () => {
    return (
        <div className="w-[100%] md:w-auto mt-2 md:mt-0 ml-auto order-3 md:order-2 flex flex-wrap justify-end items-center gap-2">
            <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
                <button id="hs-pro-dptfd" type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="21" x2="14" y1="4" y2="4"></line>
                        <line x1="10" x2="3" y1="4" y2="4"></line>
                        <line x1="21" x2="12" y1="12" y2="12"></line>
                        <line x1="8" x2="3" y1="12" y2="12"></line>
                        <line x1="21" x2="16" y1="20" y2="20"></line>
                        <line x1="12" x2="3" y1="20" y2="20"></line>
                        <line x1="14" x2="14" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="10" y2="14"></line>
                        <line x1="16" x2="16" y1="18" y2="22"></line>
                    </svg>
                    Feed Type
                    <span className="font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
                        5
                    </span>
                </button>

                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dptfd">


                    <div className="p-1 space-y-0.5 max-h-64 overflow-hidden overflow-y-auto">

                        <div
                            className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch0" />
                            <label
                                for="hs-pro-chthtmch0"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                All
                            </label>

                        </div>
                        <div
                            className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch1" />
                            <label
                                for="hs-pro-chthtmch1"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Audio
                            </label>

                        </div>
                        <div
                            className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch2" />
                            <label
                                for="hs-pro-chthtmch2"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Video
                            </label>

                        </div>
                        <div
                            className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch3" />
                            <label
                                for="hs-pro-chthtmch3"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Text
                            </label>

                        </div>
                        <div
                            className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch4" />
                            <label
                                for="hs-pro-chthtmch4"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Imported Feeds
                            </label>

                        </div>
                        <div
                            className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch5" />
                            <label
                                for="hs-pro-chthtmch5"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Fevorites
                            </label>

                        </div>
                    </div>
                </div>
            </div>

            <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
                <button id="hs-pro-dptfd" type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="21" x2="14" y1="4" y2="4"></line>
                        <line x1="10" x2="3" y1="4" y2="4"></line>
                        <line x1="21" x2="12" y1="12" y2="12"></line>
                        <line x1="8" x2="3" y1="12" y2="12"></line>
                        <line x1="21" x2="16" y1="20" y2="20"></line>
                        <line x1="12" x2="3" y1="20" y2="20"></line>
                        <line x1="14" x2="14" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="10" y2="14"></line>
                        <line x1="16" x2="16" y1="18" y2="22"></line>
                    </svg>
                    Feed Forms
                    <span className="font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
                        15
                    </span>
                </button>

                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dptfd">

                    <div className="p-1 space-y-0.5 max-h-64 overflow-hidden overflow-y-auto">
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch00" />
                            <label
                                for="hs-pro-chthtmch00"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                All
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch01" />
                            <label
                                for="hs-pro-chthtmch01"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Feed Form 1
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch02" />
                            <label
                                for="hs-pro-chthtmch02"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Feed Form 2
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch03" />
                            <label
                                for="hs-pro-chthtmch03"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Feed Form 3
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch04" />
                            <label
                                for="hs-pro-chthtmch04"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Feed Form 4
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch05" />
                            <label
                                for="hs-pro-chthtmch05"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Feed Form 5
                            </label>
                        </div>

                    </div>
                </div>
            </div>

            <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
                <button id="hs-pro-dptfd" type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="21" x2="14" y1="4" y2="4"></line>
                        <line x1="10" x2="3" y1="4" y2="4"></line>
                        <line x1="21" x2="12" y1="12" y2="12"></line>
                        <line x1="8" x2="3" y1="12" y2="12"></line>
                        <line x1="21" x2="16" y1="20" y2="20"></line>
                        <line x1="12" x2="3" y1="20" y2="20"></line>
                        <line x1="14" x2="14" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="10" y2="14"></line>
                        <line x1="16" x2="16" y1="18" y2="22"></line>
                    </svg>
                    Import Feeds
                    <span className="font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
                        5
                    </span>
                </button>

                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dptfd">
                    <div className="p-1 space-y-0.5 max-h-64 overflow-hidden overflow-y-auto">
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch001" />
                            <label
                                for="hs-pro-chthtmch001"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                All
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch002" />
                            <label
                                for="hs-pro-chthtmch002"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                YouTube
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch003" />
                            <label
                                for="hs-pro-chthtmch003"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Linkdine
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch004" />
                            <label
                                for="hs-pro-chthtmch004"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Product Hunt
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch005" />
                            <label
                                for="hs-pro-chthtmch005"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Facebook
                            </label>
                        </div>
                        <div className="flex gap-x-2 justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none dark:hover:bg-neutral-800">
                            <input
                                type="checkbox"
                                className="shrink-0 size-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-pro-chthtmch006" />
                            <label
                                for="hs-pro-chthtmch006"
                                className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                                Twitter
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedDropdown;