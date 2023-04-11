import Children from "types"
import { Card } from "./Card"
import { ProductImage } from "./Image"
import { Title } from "./Title"

function Product({ children }: { children: Children }) {
    return <>{children}</>
}

Product.Card = Card
Product.Image = ProductImage
Product.Title = Title

export default Product
