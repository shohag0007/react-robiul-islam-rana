import React from 'react';
import img200k from "../../assets/200k.jpg";
const Animation = () => {
    return (
        <div className="bg-black">
            
            <marquee>
                <div className=" font-bold text-white text-2xl">
                    MD Robiul Islam রানা ভাইয়ের 200K Celebration
                </div>
            </marquee>
            <marquee direction="right">
                <div className="text-pink-500 text-3xl">
                    MD Robiul Islam রানা ভাইয়ের 200K Celebration
                </div>
            </marquee>

            <marquee>
                <div className="mt-2 flex gap-2">
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                </div>
            </marquee>
            <marquee direction="right">
                <div className="mt-2 flex gap-2">
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                    <img className="h-[400px]" src={img200k} alt="img"/>
                </div>
            </marquee>
        </div>
    );
};

export default Animation;