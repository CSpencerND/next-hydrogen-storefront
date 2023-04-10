import Children from "types"
import { Description } from "./Description"
import { Grid } from "./Grid"
import { Section } from "./Section"
import { Title } from "./Title"

function Collection({ children }: Children) {
    return (
        <>{children}</>
    )
}

Collection.Description = Description
Collection.Grid = Grid
Collection.Section = Section
Collection.Title = Title

export default Collection
