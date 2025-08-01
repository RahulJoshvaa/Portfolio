import React, { useEffect, useState } from "react";
import aimlimage from '../assets/aiml.jpg';
import portfolioimage from '../assets/portfolio.png';
import binimage from '../assets/binNetwork.jpg';


export default function Project() {
    let heading1 = 'Face Generation From Sketches'
    let description1 = "Designed a GAN-based sketch-to-face translation model using Attention U-Net for better spatial learning, with VGG-based perceptual loss to improve realism. Stabilized training by updating the discriminator less frequently, achieving higher SSIM (avg. 0.86) and PSNR scores than existing methods, and co-authored a paper on the approach."

    let heading2 = "Portfolio Website"
    let description2 = "Designed and developed a responsive portfolio website using React, Tailwind CSS, and HTML to showcase projects and skills, featuring smooth navigation, modern UI components, and optimized layout for all screen sizes."

    let heading3 = "Garbage Bin Management Network - [Ongoing]"
    let description3 = "Developing an AI-powered garbage bin monitoring system that uses computer vision to detect fill levels. Built a React-based dashboard to display bin statuses and planned optimized waste collection routes using mapping and routing algorithms for Garbage Trucks"

    let image1 = aimlimage
    let image2 = portfolioimage
    let image3 = binimage

    const [content, setContent] = useState({"heading":heading1, "description":description1});

    const [image, setImage] = useState(image1);

    const [index, setIndex] = useState(1)

    useEffect(() => {
        const imageChange = setInterval(()=>{
            setIndex(prev => (prev < 3 ? prev + 1 : 1));


        }, 4000);

        return () => clearInterval(imageChange);

    }, []);

    useEffect(() => {
        if(index===1){
            setImage(image1);
            setContent({"heading":heading1, "description":description1});
        }
        if(index===2){
            setImage(image2);
            setContent({"heading":heading2, "description":description2});
        }
        if(index===3){
            setImage(image3);
            setContent({"heading":heading3, "description":description3});
        }



    }, [index]);



    return (
        <div className="flex flex-col my-8 min-h-[500px]">
            <div className="mb-4 text-center anton-regular text-[45px] lg:text-[90px]">Projects</div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="mx-3 flex flex-col lg:ml-8 lg:max-w-[600px]">
                    <div className="anton-regular text-[20px] lg:text-[50px]">
                        {content.heading}
                    </div>
                    <div className="text-justify inter-regular min-h-[180px] lg:min-h-[200px]">
                        {content.description}
                    </div>
                </div>
                    <div className="max-h-[200px] lg:max-h-[330px] mx-3 lg:w-[600px] lg:h-[330px] rounded-xl border-[2px] border-black lg:mr-8 overflow-hidden">
                        <img key={image} className="h-full w-full rounded-xl  overflow-hidden fade-inn" src={image}/>
                    </div>
            </div>

        </div>
    );
}