import Image from "next/image";

interface PageProps {
    src: string;
}

export default function ProductImage({ src }: PageProps) {
    return (
        <>
            <div className="product_img">
                <Image
                    width={50}
                    height={50}
                    loading="lazy"
                    src={src}
                    alt="product image"
                />
            </div>
        </>
    )
}