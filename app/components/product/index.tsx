import Children from "types"
import { Card } from "./Card"
import { ProductImage } from "./Image"
import { Swatch } from "./Swatch"
import { Title } from "./Title"
import { Item } from "./Item"

function Product({ children }: Children) {
    return <>{children}</>
}

Product.Card = Card
Product.Image = ProductImage
Product.Title = Title
Product.Swatch = Swatch
Product.Item = Item

export default Product
