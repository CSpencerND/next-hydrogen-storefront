import Children from "types"
import { Card } from "./Card"
import { ProductImage } from "./Image"
import { Title } from "./Title"
import { Swatch } from "./Swatch"

function Product({ children }: { children: Children }) {
    return <>{children}</>
}

Product.Card = Card
Product.Image = ProductImage
Product.Title = Title
Product.Swatch = Swatch

export default Product
