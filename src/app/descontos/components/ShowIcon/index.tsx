import Image from "next/image";

interface PageProps {
    id: number;
    onClick?: ( id:number ) => void;
}

export default function ShowIcon({
    id,
    onClick
}: PageProps) {

    const handleClick = () => {
        if(onClick) onClick(id);
    }

    return (
        <>
            <div className="" onClick={handleClick}>
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
