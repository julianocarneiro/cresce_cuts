import Image from "next/image";

export default function ProductImage() {
    return (
        <>
            <div className="product_img">
                <Image
                    width={50}
                    height={50}
                    loading="lazy"
                    src="/assets/imgs/products/mini/image1.png"
                    alt="product image"
                />
            </div>
        </>
    )
}