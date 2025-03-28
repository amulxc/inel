import Image from "next/image";

export default function About(){
    return(
        <div className="container mx-auto py-20 px-5 md:px-0">
            <div className="flex flex-col-reverse md:flex-row gap-10">
                <div className="w-full md:w-1/2">
                    <Image src="/images/about/about-us.png" alt="about" width={500} height={500} 
                    className="rounded-3xl h-full w-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-5">
                    <h5>About</h5>
                    <h1>Crafting Precision Solutions</h1>
                    <p>India Nippon Electricals Limited was incorporated in 1984 and converted into a joint venture in 1986 between Lucas Indian Service Limited, a wholly-owned subsidiary of Lucas-TVS Limited and MAHLE Electric Drives Japan Corporation, Japan – a company of MAHLE Group, Germany, to manufacture Electronic Ignition Systems for two-wheelers, three wheelers and portable engines. Over the years the company has enlarged its customer base and now supplies to most of the manufacturers of two-wheelers, three wheelers and gensets. Company’s net sales for the year ended March, 2015 was Rs.3274 Million (USD 50 Million). India Nippon Electricals Limited makes the entire range of 2/3 wheelers, digital and analog ignition products.
                    Commencing its operation in Hosur (Tamil Nadu), over the years India Nippon Electricals Limited has set up two more units with excellent facilities, one at Pondicherry and the other at Rewari (Haryana) to be nearer to customers and offer service such as just-in-time supplies and to improve response time for introduction of new products.</p>
                </div>
            </div>
        </div>
    )
}
