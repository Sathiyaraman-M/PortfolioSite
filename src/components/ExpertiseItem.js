const ExpertiseItem = ({name, image, setBgColor = false}) => (
    <div className="expertise-card">
        <div className={`expertise-card-body ${setBgColor ? "bg-secondary" : ""}`}>
            <div className="d-flex flex-column align-items-center">
                <img src={image} className="expertise-img" alt={name} />
                <h4 className="text-center">{name}</h4>
            </div>
        </div>
    </div>
);

export default ExpertiseItem;