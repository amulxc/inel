import Image from "next/image";
import Link from "next/link";
import Button from "../Ui/button";

export default function CTA(){
    return(
        <>
        <section className="bg-primary relative clip-path btmright clip-grey">
            <div className="flex flex-col justify-end items-center md:gap-6 md:flex-row">
                <div className="w-full  lg:w-1/2">
                    <Image src="/images/home/about.png" alt="about-section" className="w-full h-[revert-layer] object-cover" width={500} height={400} />
                </div>
                <div className=" text-white py-6 px-5  lg:w-1/2  space-y-5">
                    <h5>About Us</h5>
                    <h1>Engineered for<br/> Automotive Power</h1>
                    <p>INEL is a global leader in advanced mechatronic systems, delivering custom ignition and control solutions for OEMs in the 2 & 3-wheeler and portable engine sectors. We cater to both ICE and EV markets, integrating cutting-edge technology with scalable, world-class manufacturing.</p>
                    <Button variant="white"   href="/about-us">Learn More</Button>
                </div>
            </div>
        </section>
        </>
    )
}
