import Children from "types"
import { Description } from "./Description"
import { Grid } from "./Grid"
import { Heading } from "./Heading"
import { Section } from "./Section"
import { Title } from "./Title"

function Collection({ children }: Children) {
    return <>{children}</>
}

Collection.Description = Description
Collection.Grid = Grid
Collection.Heading = Heading
Collection.Section = Section
Collection.Title = Title

export default Collection
