function ProgramCard({ image, title, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img src={image} className="card-img-top p-4" alt={title} style={{ height: '120px', objectFit: 'contain' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
