import Image from "next/image";
import Button from "../Ui/button";


export default function About(){
    return(
        <div className="container mx-auto py-20" id="about">
            <div className="flex flex-col-reverse lg:flex-row gap-10">
                <div className="w-full lg:w-1/2">
                    <Image src="/images/about/about-us.webp" alt="about" width={800} height={500} 
                    className="rounded-3xl h-full w-full object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2 space-y-5">
                    <h5>About</h5>
                    <h1>Crafting Precision Solutions</h1>
                    <p>India Nippon Electricals Limited (INEL) was established in 1984 and became a joint venture in 1986 between Lucas Indian Service (a Lucas-TVS subsidiary) and MAHLE Electric Drives Japan, part of the MAHLE Group, Germany. The company manufactures electronic ignition systems for two-wheelers, three-wheelers, and portable engines, supplying most major OEMs in these segments.</p>
                    <p>
                    With operations starting in Hosur, INEL expanded with advanced facilities in Pondicherry and Rewari to better serve customers,</p>

                    <Button href="/contact-us" variant="blue">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}
