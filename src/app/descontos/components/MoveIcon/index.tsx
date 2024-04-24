import Image from "next/image";

export default function MoveIcon() {
    return (
        <>
            <div className="move_icon">
                <Image
                    width={12}
                    height={12}
                    loading="lazy"
                    src="/assets/imgs/icons/svg/move_icon.svg"
                    alt="Move Icon"
                />
            </div>
        </>
    )
}