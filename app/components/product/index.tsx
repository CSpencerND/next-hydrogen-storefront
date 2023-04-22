import Children from "types"

import { Card } from "./Card"
import { CartButton } from "./CartButton"
import { Description } from "./Description"
import { Image } from "./Image"
import { Layout } from "./Layout"
import { Link } from "./Link"
import { Price } from "./Price"
import { Size } from "./Size"
import { Swatch } from "./Swatch"
import { Title } from "./Title"
import { Variant } from "./Variant"

function Product({ children }: Children) {
    return <>{children}</>
}

Product.Card = Card
Product.CartButton = CartButton
Product.Description = Description
Product.Image = Image
Product.Layout = Layout
Product.Link = Link
Product.Price = Price
Product.Size = Size
Product.Swatch = Swatch
Product.Title = Title
Product.Variant = Variant

export default Product
