import "./AdminAccordionSummary.css"

interface IAdminAccordionSummary {
    name: string,
    phoneNumber: string,
    email: string
}

export default function AdminAccordionSummary(props: IAdminAccordionSummary) {
    return (
        <div className="AdminAccordionSummary">
            <div>Name: {props.name}</div>
            <div>Phone Number: {props.phoneNumber}</div>
            <div>Email: {props.email}</div>
        </div>
    )
}