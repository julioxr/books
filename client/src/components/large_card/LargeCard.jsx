import React from "react";
import imageCard from "../../assets/image15.png";

const LargeCard = () => {
    return (
        <section className="w-full">
            <div className="h-[342px] rounded-lg mb-6 relative">
                <span className="absolute right-4 top-4 text-2xl">🤍</span>
                <img
                    className="rounded-lg object-cover w-full h-full shadow-lg"
                    src="https://everychildareader.net/wp-content/uploads/2021/07/Candlewick-Press_The-Mermaid-The-Witch-and-The-Sea.jpg"
                    alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 backdrop-blur-lg flex justify-between px-8 items-center rounded-b-lg text-white">
                    <h4>Food in the Ancient</h4>
                    <div>
                        <p>15 hs Listen</p>
                        <span>Andrew Dalby</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LargeCard;
