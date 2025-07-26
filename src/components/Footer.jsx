import React from "react";

export default function Footer(){

    return (
        <div className="flex flex-col bg-black">
        <div className="flex flex-row justify-evenly w-screen items-center">
            <div className="flex flex-col my-[50px] ml-2">
                <div className="anton-regular text-white lg:text-[30px] ">
                    Rahul Joshva M
                </div>
                <div className="caveat-regular text-white lg:text-[25px]">
                    Building Ideas With Code And Creativity<br/>
                    rahuljoshva2310840@ssn.edu.in
                </div>

            </div>
            <div className="flex flex-col lg:flex-row lg:my-[75px] lg:ml-[290px] lg:mr-3">
                <div className="mr-5"><a href="https://www.gmail.com" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/ffffff/mail.png" alt="mail"/>
                </a>
                </div>
                <div className="mr-5">
                    <a href="https://www.linkedin.com/in/rahul-joshva/" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin"/></a>
                </div>
                <div><a href="https://www.github.com/RahulJoshvaa" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/60/ffffff/github.png" alt="github"/>
                </a></div>
            </div>
            </div>
            <div className="mb-2 text-center text-white justify-center inter-regular lg:mb-[40px]">
                © 2025 Rahul Joshva M.<br/>
                <h1 >Made with 💻 & ☕ in India.</h1>

            </div>
        </div>

    );

}