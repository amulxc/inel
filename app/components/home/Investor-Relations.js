import Button from "../Ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import StockDataCard from "../Common/stockmarket/StockDataCard";

const quickLinks = [
 
  {
    title: "Annual Report FY24",
    href: "/files/INEL Annual Report - 2023-24.pdf",
  },
  {
    title: "Corporate Presentation",
    href: "/#",
  },
  {
    title: "Investor Presentation",
    href: "/#",
  },
  
];

export default function InvestorRelations() {
  return (
    <section className="diamond-gradient relative ">
      <div className="container mx-auto  py-20 md:pb-60 text-white">
        <div className="flex flex-col md:flex-row  gap-12">
          <div className="w-full md:w-1/3 space-y-6">
            <div>
                <h5>Investor Relations</h5>
                <h1>Creating Value, 
                Driving Growth</h1>
            </div>
            <p>A legacy of strong financial performance, sustainable growth, and innovation-driven expansion.</p>
            <Button variant="white" href="/investors">Investor Insights</Button>
          </div> 
          <div className="w-full md:w-1/3 space-y-6">
            <StockDataCard background="bg-[#CBCBCB30]" />
          </div>
          <div className="w-full md:w-1/3 space-y-6">
            <p  className="text-white bg-[url('/images/home/Subtract.png')] bg-contain bg-center bg-no-repeat p-4 w-fit">Quick Links</p>
            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" className="font-thin flex justify-between border-b border-white pb-2">
                    {link.title}
                    <GoArrowUpRight className="text-[20px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
