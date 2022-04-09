import React from "react";
import {AccordionTitle} from "./AccordionTitlePropsType";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    colapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    if (props.colapsed == true) {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>

    }

}

