import BreadCrumb from "../components/Ui/bread-crumb"
import Newsletter from "../components/Common/newsletter"
import StockDataCard from "../components/Common/stockmarket/StockDataCard"
import InvestorTabs from "./investor-tabs"
import Button from "../components/Ui/button"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";


export default function Investors() {

const reports=[
    {
        title: "Annual Reports",
        link: "#"
    },
    {
        title: "Financial Reports",
        link: "#"
    },
    {
        title: "Policies",
        link: "#"
    },
    {
        title: "Corporate Governance",
        link: "#"
    }
]
    return (
        <>
            <BreadCrumb 
                pageTitle= "Investors"
                breadCrumbBg= "/images/invester/breadcrumb.png"
            />

            <div className="container mx-auto pt-20 pb-5 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6 space-y-5">
                    <h1>INEL at Glance</h1>
                    <p>INEL (India Nippon Electricals Limited) is a leader in automotive components, with expertise in electronic ignition systems and strong growth, including a 23% increase in aftermarket sales in FY 2023-24. The company is expanding into EV components and global markets.</p>
                    <p>
                    INEL maintains robust governance, a 30%+ dividend payout, and is committed to long-term shareholder value through growth in ICE and EV sectors. Investors can access key resources, including AGM details and share transfer information.
                    </p>
                </div>
                <div className="w-full lg:w-4/6 mx-auto">
                    <StockDataCard background="bg-[#F6F6F6]" />
                </div>
            </div>

            <div className="container mx-auto pb-20 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6"> 
                <ul className="space-y-5   pt-10">
                    {reports.map((report, index) => (
                        <li key={index} className="flex gap-10 items-center">
                            <Image src="/images/invester/pdf.png" alt={report.title} width={50} height={100} />
                            <a href={report.link} className="font-thin w-full flex justify-between border-b border-black pb-2">
                                {report.title}  
                                <GoArrowUpRight className="text-[20px]" />
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
                <div className="w-full lg:w-4/6 mx-auto flex flex-col lg:flex-row gap-5">
                    <div className="flex p-5 flex-col justify-between gap-5 h-80  lg:w-2/5 rounded-[20px] bg-[url('/images/invester/Investor-Presentation.png')] bg-cover bg-center">
                        <h2 className="text-white">Investor <br/> Presentation</h2>
                        <Button variant="white">Investor Presentation</Button>
                    </div>
                    <div className="flex p-5 flex-col justify-between gap-5 h-80 lg:w-3/5 rounded-[20px] bg-[url('/images/invester/Board-Directors.png')] bg-cover bg-center">
                        <h2 className="text-white">Board  Of<br/> Directors</h2>
                        <Button variant="white">Know More</Button>
                    </div>
                </div>
            </div>

            {/* Investor Data Section */}
            <div className="container mx-auto  p-5 py-10 md:py-5  mb-20 bg-[#F6F6F6] rounded-[20px]">
                <InvestorTabs />
            </div>

                    
            
            <Newsletter />
        </>
    )
}
