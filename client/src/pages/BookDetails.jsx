import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../components/button/DeleteButton";
import UpdateButton from "../components/button/UpdateButton";

const BookDetails = () => {
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];
    useEffect(() => {
        const fetchBook = async () => {
            try {
                await axios.get(`http://192.168.1.106:3000/book/${bookId}`);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBook();
    }, []);

    return (
        <section className="scroll-smooth">
            <br />
            <br />
            <br />

            <h1 className="pb-6 text-center text-[22px]">Book info</h1>
            <div className="flex justify-center">
                <img
                    className="h-[220px] w-[374px] rounded-lg object-cover shadow-lg"
                    src="https://d1wnwqwep8qkqc.cloudfront.net/uploads/stage/stage_image/37836/optimized_large_thumb_stage.jpg"
                    alt=""
                />
            </div>
            <div className="flex justify-between py-4">
                <div>
                    <h2>The Homeric Hymns</h2>
                    <h4 className="font-secondary">By Michael Crudden</h4>
                </div>
                <div>$757</div>
            </div>
            <div className="mb-6 flex justify-around px-2">
                <div className="flex w-[100px] flex-col items-center rounded-lg border border-yellow-500 py-3">
                    <span>Released</span>
                    <span>2021</span>
                </div>
                <div className="flex w-[100px] flex-col items-center rounded-lg border border-yellow-500 py-3">
                    <span>Part</span>
                    <span>16</span>
                </div>
                <div className="flex w-[100px] flex-col items-center rounded-lg border border-yellow-500 py-3">
                    <span>Pages</span>
                    <span>340</span>
                </div>
            </div>
            <section>
                <div className="mb-4">
                    <ul className="flex justify-between">
                        <li className="font-secondary underline">Synopsis</li>
                        <li className="font-secondary">Details</li>
                        <li className="font-secondary">Author</li>
                        <li className="font-secondary">Review</li>
                    </ul>
                </div>
                <p className="font-secondary leading-5 text-[#858585] ">
                    'With fair-tressed Demeter, the sacred goddess, my song
                    begins, With herself and her slim-ankled daughter, whom
                    Aidoneus once Abducted...' Most people are familiar, at
                    least by repute, with the two great epics of Homer, the
                    Iliad and the Odyssey, but few are aware that other poems
                    survive that were attributed to Homer in ancient times. The
                    Homeric Hymns are now known to be the work of various poets
                    working in the same tradition, probably during the seventh
                    and sixth centuries BC. They honour the Greek gods, and
                    recount some of the most attractive of the Greek myths. Four
                    of them (Hymns 2-5) stand out by reason of their length and
                    quality. The Hymn to Demeter tells what happened when Hades,
                    lord of the dead, abducted Persephone, Demeter's daughter.
                </p>
            </section>
            <div className="mb-24 mt-6 flex justify-around">
                <DeleteButton id={bookId} />
                <UpdateButton id={bookId} />
            </div>
        </section>
    );
};

export default BookDetails;
