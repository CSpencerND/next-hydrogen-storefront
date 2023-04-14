import Children from "types"
import { Card } from "./Card"
import { Link } from "./Link"
import { Image } from "./Image"
import { Swatch } from "./Swatch"
import { Title } from "./Title"

function Product({ children }: Children) {
    return <>{children}</>
}

Product.Card = Card
Product.Image = Image
Product.Link = Link
Product.Title = Title
Product.Swatch = Swatch

export default Product
