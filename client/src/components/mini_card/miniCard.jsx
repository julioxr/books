import React from "react";

const miniCard = () => {
    return (
        <>
            <div className="flex my-4">
                <div className="w-12 h-12">
                    <img
                        className="rounded-lg"
                        src="https://d1wnwqwep8qkqc.cloudfront.net/uploads/stage/stage_image/37836/optimized_large_thumb_stage.jpg"
                        alt=""
                    />
                </div>
                <div className="pl-4">
                    <h3 className="text-base">
                        History of the Ancient World's
                    </h3>
                    <p className="text-xs text-gray-500">
                        Dr. Tikendranath Sarkar
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-orange-300 text-3xl align-text-bottom">
                            * * * * *
                        </span>
                        <span className="text-gray-500 text-xs">50 Rating</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default miniCard;
