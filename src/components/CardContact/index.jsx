import { ContactContainer } from "./style";

const CardContact = ({icon, description}) => (
    <ContactContainer className="d-flex flex-column align-items-center justify-content-center">
        <span>{icon}</span>
        <p className="mb-0 fs-6 fw-bold text-muted">{description}</p>
    </ContactContainer>
);

export default CardContact;