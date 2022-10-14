import { BgBtn } from "./style";

const Btn = ({title, bgColor = "#97ae76", txtColor = "#fff"}) => (
    <BgBtn bgColor={bgColor} txtColor={txtColor} className="py-3 px-5 rounded-pill text-uppercase text-center">
        {title}
    </BgBtn>
);

export default Btn;