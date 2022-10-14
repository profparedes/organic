const StatisticsNumber = ({number, title}) => (
    <div className="d-flex flex-column align-items-center text-white">
        <h2 className="fs-9 fw-bold mb-3">{number}</h2>
        <p className="h4 text-uppercase text-center">{title}</p>
    </div>
);

export default StatisticsNumber;