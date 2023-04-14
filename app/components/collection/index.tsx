import Children from "types"
import { Card } from "./Card"
import { Grid } from "./Grid"
import { Heading } from "./Heading"
import { Image } from "./Image"
import { Section } from "./Section"
import { Title } from "./Title"

function Collection({ children }: Children) {
    return <>{children}</>
}

Collection.Card = Card
Collection.Grid = Grid
Collection.Heading = Heading
Collection.Image = Image
Collection.Section = Section
Collection.Title = Title

export default Collection
