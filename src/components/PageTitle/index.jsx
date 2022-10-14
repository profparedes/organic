import { BottonDetail, PageBanner } from "./style";

const PageTitle = ({title, bgImage}) => {
    return(
    <PageBanner bgImage={bgImage} className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-center mb-2 text-white fs-7">{title}</h2>
            <BottonDetail></BottonDetail>
    </PageBanner>
)};

export default PageTitle;