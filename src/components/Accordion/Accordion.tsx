import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

const Accordion = React.memo((props: AccordionPropsType) => {
    if(props.collapsed === false) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>)
    }
})

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
})

const AccordionBody = React.memo(() => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
})
export default Accordion;