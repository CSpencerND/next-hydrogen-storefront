import Children from "types"

import { Preview } from "./Preview"
import { CartButton } from "./CartButton"
import { Description } from "./Description"
import { Layout } from "./Layout"
import { Link } from "./Link"
import { Modal } from "./Modal"
import { Price } from "./Price"
import { Size } from "./Size"
import { Swatch } from "./Swatch"
import { Title } from "./Title"
import { Variant } from "./Variant"

const Product = ({ children }: Children) => <>{children}</>

Product.Preview = Preview
Product.CartButton = CartButton
Product.Description = Description
Product.Layout = Layout
Product.Link = Link
Product.Modal = Modal
Product.Price = Price
Product.Size = Size
Product.Swatch = Swatch
Product.Title = Title
Product.Variant = Variant

export default Product
