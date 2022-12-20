const ExpertiseItem = ({name, image, setBgColor = false}) => (
    <div className="expertise-card h-100">
        <div className={`expertise-card-body ${setBgColor ? "bg-secondary" : ""}`}>
            <div className="d-flex flex-column align-items-center">
                <img src={image} className="expertise-img" alt={name} />
                <h5 className="text-center">{name}</h5>
            </div>
        </div>
    </div>
);

export default ExpertiseItem;