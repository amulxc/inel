import Image from "next/image";
import QuickLinks from "../Ui/QuickLinks";
import Button from "../Ui/button";
import Accordion from "../Ui/accordion"


const accordions = [
    {
      "id": 1,
      "header": "The Journey",
      content: [
        "With a legacy dating back to 1984, to becoming forerunners in advanced electronic systems, our journey in the automotive industry has been propelled by collective drive of individuals united by a shared vision. ",
        "Our journey is a testament to the power of collaboration, innovation, and a shared vision. We are committed to shaping the future of the automotive industry, one step at a time.",
        "From the foundational Flywheel Magnetos to our newest breakthroughs, our product portfolio is built on cutting-edge technology, notably our in-house built High Efficiency Regulator Rectifier systems, EV Motor Controllers, Sensors, Microcontrollers and ISG Controllers."
      ]
    },
    {
      "id": 2,
      "header": "Growth Horizon",
      "content":[ 
        "A testament to our strength, our Research and Development Center holds 39    patents and positions it as the heart of innovation.",
        "We lead the 2W and 3W segments in India as the No.1 supplier of ACG, RR, and IG Coils. Ranked among the top three in ISG systems, we are also a key global source for ECV and a major supplier of HEC, driving India’s mobility sector.",
        "Expanding beyond the domestic market, our OEM footprint spans the globe, establishing a strong presence in the 2W and EV sectors across North America, Europe, and Asia."
      ]
    },
    {
        "id": 3,
        "header": "Unlocking Potential",
        "content":[ 
            "Certified as a “Great Place to Work,” INEL has earned its place as the preferred employer in the automotive sector for the fifth year in a row.",
            "Our commitment to a merit-based culture ensures the brightest minds drive unparalleled performance.",
            "Harnessing internal mobility, we offer an array of opportunities extending beyond INEL and span across LTVS groups."
        ]
    }
]


const steps = [
    {
        "id": 1,
        "header": "Step 1",
        "image": "/images/career/step-1.png",
        "content": "Explore"
    },
    {
        "id": 2,
        "header": "Step 2",
        "image": "/images/career/step-2.png",
        "content": "Apply"
    },
    {
        "id": 3,
        "header": "Step 3",
        "image": "/images/career/step-3.png",
        "content": "Connect"
    },
]
export default function OurPriority({quickLinks}) {
    return (
        <>
            <div className="container mx-auto flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 space-y-5">
                    <h5>Your Triumph, Our Priority!</h5>
                    <h1 className="pb-5">INEL: Leading the ways</h1>
                    
                    
                    <Accordion accordionData={accordions} />
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <Image src="/images/career/career.webp" alt="Career Opportunities" className="rounded-[20px] h-[450px] object-cover" width={800} height={800} />
                </div>    
            </div>
            <div className="container mx-auto py-20">
                <h1 className="text-center pb-10">How to apply</h1>
                <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="card-top-right p-5 rounded-[20px] bg-gradient-to-b from-[#ECF9FF] to-[#E4E4E4] text-center space-y-3">
                            <Image src={step.image} alt={step.header} width={50} height={100} className="mx-auto" />
                            <h3 className="text-xl font-medium">{step.header}</h3>
                            <p >{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>

        </> 
    )
}   
