import Children from "types"
import { Card } from "./Card"
import { Description } from "./Description"
import { Image } from "./Image"
import { Link } from "./Link"
import { Price } from "./Price"
import { Size } from "./Size"
import { Swatch } from "./Swatch"
import { Title } from "./Title"

function Product({ children }: Children) {
    return <>{children}</>
}

Product.Card = Card
Product.Description = Description
Product.Image = Image
Product.Link = Link
Product.Price = Price
Product.Size = Size
Product.Swatch = Swatch
Product.Title = Title

export default Product
