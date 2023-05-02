import Loader from "react-spinners/HashLoader"
import { LoaderSizeProps } from "react-spinners/helpers/props"

export function LoadingSpinner({ ...props }: LoaderSizeProps) {
    return (
        <Loader
            loading={true}
            color="#3abff8"
            size={96}
            className="mx-auto"
            aria-label="Loading Spinner"
            data-testid="loader"
            {...props}
        />
    )
}
