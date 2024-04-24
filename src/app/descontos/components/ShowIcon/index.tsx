import Image from "next/image";

export default function ShowIcon() {
    return (
        <>
            <div className="">
                <Image
                    width={28}
                    height={28}
                    loading="lazy"
                    src="/assets/imgs/icons/svg/show.svg"
                    alt="Move Icon"
                />
            </div>
        </>
    )
}