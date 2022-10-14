import { DescriptionContainer, TitleContainer } from "./style";

const DescriptionProduct = ({description}) => (
    <div className="d-flex flex-column align-items-center">
        <TitleContainer className="mb-0 text-center">
            Description
        </TitleContainer>
        <div className="border-top w-100 mb-4"></div>
        <DescriptionContainer>{description}</DescriptionContainer>
    </div>
);

export default DescriptionProduct;