import { BottonDetail } from "./style";

const SectionTitle = ({title, borderTop = "border-top"}) => {
    return(
    <div className={`w-100 py-5 ${borderTop} d-flex flex-column align-items-center`}>
        <h2 className="text-center mb-4">{title}</h2>
        <BottonDetail></BottonDetail>
    </div>
)};

export default SectionTitle;