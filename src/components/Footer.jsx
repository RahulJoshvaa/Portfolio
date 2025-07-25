import React from "react";

export default function Footer(){

    return (
        <div className="flex flex-col bg-black">
        <div className="flex flex-row justify-evenly">
            <div className="flex flex-col my-[50px]">
                <div className="anton-regular text-white text-[30px] ">
                    Rahul Joshva M
                </div>
                <div className="caveat-regular text-white text-[25px]">
                    Building Ideas With Code And Creativity<br/>
                    rahuljoshva2310840@ssn.edu.in
                </div>

            </div>
            <div className="flex flex-row my-[75px] ml-[290px]">
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
            <div className="text-center text-white justify-center inter-regular mb-5">
                © 2025 Rahul Joshva M.<br/>
                <h1 >Made with 💻 & ☕ in India.</h1>

            </div>
        </div>

    );

}