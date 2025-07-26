import React, { useState, useEffect } from "react";

export default function Experience() {

    let image1 = 'src/assets/maiti.png'
    let image2 = 'src/assets/NITT_logo.png'

    let eximage1 = 'src/assets/design.jpg'
    let eximage2 = 'src/assets/aiml.jpg'

    let heading2 = 'Research Intern - NITT'
    let description2 = 'Worked on a computer vision project for face generation from pencil sketches using deep learning. Trained and evaluated image-to-image translation models, comparing them using SSIM and PSNR. Conducted experiments to improve model output and co-authored a paper detailing methods, results, and comparative analysis.'

    let heading1 = 'Design Intern - Maitilabs'
    let description1 = 'Designed the home page and subpages for Maitilabs, contributing to the overall user experience and interface of the website. Worked on creating a visually appealing and user-friendly design, ensuring consistency across the main page and subpages. Collaborated with the team to implement responsive layouts and optimized functionality to improve user engagement'

    const [image, setImage] = useState(image1);

    const [eximage, setEximage] = useState(eximage1);

    const [content, setContent] = useState({
    heading: heading1,
    description: description1,
    });

    useEffect(() => {
        setContent(
        eximage === eximage1
            ? { heading: heading1, description: description1 }
            : { heading: heading2, description: description2 }
        );
    }, [eximage]);

    useEffect(() => {
        const imageChange2 = setInterval(() => {
            setEximage(prev => (prev === eximage1 ? eximage2 : eximage1));
        }, 3000);

        return () => clearInterval(imageChange2);
    }, []);

    useEffect(() => {
        const imageChange = setInterval(() => {
            setImage(prev => (prev === image1 ? image2 : image1));
        }, 1500);

        return () => clearInterval(imageChange);
    }, []);


    return (
        <div className="flex flex-col mb-9">
            <div className="flex flex-row justify-center items-center">
            <div className="text-center anton-regular text-[90px] mr-7">
                Experience Working For
            </div>
            <div className="w-[100px] h-[100px] transition-all">
                <img key={image} src={image} alt="logo" className="fade-inn"></img>
            </div>
            </div>
            <div className="flex flex-row">
                <div className="w-[600px] h-[330px] ml-9 my-3 rounded-xl border-[2px] border-black ">
                    <img  key={eximage} className="w-full h-full rounded-xl fade-inn" src={eximage}/>
                </div>
                <div className="flex flex-col ml-[60px] w-[570px] my-3">
                    <div className="anton-regular text-[50px]">{content.heading}</div>
                    <div className="inter-regular min-h-[200px]">{content.description}</div>
                    <div className="flex flex-row items-center">
                    <a href="/Rahul Joshva-3122235002096.pdf" download="RahulJoshvaM.pdf">
                    <button className="bg-[#fff000] text-black font-bold px-4 py-2 rounded-xl border border-black shadow-[4px_4px_0_#000] hover:shadow-none transition-all duration-200 w-[100px]">RESUME</button>
                    </a>
                    <h1 className="caveat-regular ml-6 text-[25px]">&lt;--Click to download</h1>
                    </div>

                </div>
            </div>

        </div>
    );
}