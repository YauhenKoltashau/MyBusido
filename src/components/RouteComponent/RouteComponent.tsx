import {Dialogs} from "../Dialogs/Dialogs";
import {Content} from "../Content/Content";

type RouteComponentType = {
    path: any
    component: any
}
export const RouteComponent = (props: RouteComponentType) => {
    return(
        <>
            <Dialogs/>
            <Content/>
        </>
    )
}