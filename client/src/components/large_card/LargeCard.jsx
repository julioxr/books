import React from "react";
import imageCard from "../../assets/image15.png";

const LargeCard = () => {
    return (
        <section className="w-full">
            <div className="relative mb-6 h-[342px] rounded-lg">
                <span className="absolute right-4 top-4 text-2xl">🤍</span>
                <img
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                    src="https://everychildareader.net/wp-content/uploads/2021/07/Candlewick-Press_The-Mermaid-The-Witch-and-The-Sea.jpg"
                    alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 flex h-20 items-center justify-between rounded-b-lg px-8 text-white backdrop-blur-lg">
                    <h4 className="w-40">
                        Food in the Ancient World from A to Z
                    </h4>
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
