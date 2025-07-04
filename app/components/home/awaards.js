import Image from "next/image";


const awards = [
    {
        image: "/images/home/acma.png",
        alt: "acma",
        title: "Best Cluster Company Award by ACMA",
    },
    {
        image: "/images/home/tvs.png",
        alt: "honda",
        title: "Best Supplier for 2021-22",
    },
    {
        image: "/images/home/ficci.png",
        alt: "award",
        title: "HR Summit & Score Awards 2024",
    }
]
export default function Awards(){
    return(
        <section className="bg-[#F8F8F8]">
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-3  gap-20 py-20">
                {awards.map((award, index) => (
                    <div key={index} className="w-full h-full flex gap-3 items-center justify-center">
                        <Image src={award.image} alt={award.alt} width={500} height={500} className="max-w-40 h-28 bg-black/10 rounded-lg p-5 object-contain" />
                        <h3 className="text-xl ">{award.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
