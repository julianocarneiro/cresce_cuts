import MoveIcon from "../MoveIcon";
import ProductImage from "../ProductImage";

interface PageProps {
    item: any;
}

export default function ProductGroup({ item }: PageProps)
{
    return (
        <div className="product_group">
            <MoveIcon />
            <ProductImage src={item.image}/>
            <span className="product_name">
                {item.description}
            </span>
        </div>
    )
}
