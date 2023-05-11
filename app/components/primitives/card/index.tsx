import { CardRoot } from "./CardRoot"
import { CardContent, CardDescription, CardHeader, CardTitle } from "./CardComponents"
import { CardFigure } from "./CardFigure"
import { CardFooter } from "./CardFooter"

const Card = ({ children }: { children: React.ReactNode }) => <>{children}</>

Card.Root = CardRoot
Card.Content = CardContent
Card.Description = CardDescription
Card.Header = CardHeader
Card.Title = CardTitle
Card.Figure = CardFigure
Card.Footer = CardFooter

export { Card }
