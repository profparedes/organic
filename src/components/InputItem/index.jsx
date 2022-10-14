import { InputContainer } from "./style";

const InputItem = ({title, idLabel, type, placeholder}) => (
    <InputContainer className="d-flex flex-column">
        <label className="mb-3 fs-5" for={idLabel}>{title}</label>
        <input className="py-3 border" type={type} id={idLabel} placeholder={placeholder}/>
    </InputContainer>
);

export default InputItem;