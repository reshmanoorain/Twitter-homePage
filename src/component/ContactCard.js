import "./ContactCardStyles.css";

function ContactCard(props) {
  return (
    <div className="card">
      <span className="sp1">{props.name}</span>
      <span className="sp2">{props.id}</span>
      <p className="p1">{props.tweet}</p>
    </div>
  );
}

export default ContactCard;
