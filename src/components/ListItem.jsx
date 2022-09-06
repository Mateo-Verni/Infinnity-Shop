import Zapas from "../assets/af1.jpg";
import ItemQuantity from "./ItemQuantity";

export default function ListItem({
  title,
  description,
  itemQuantity,
  handleAddClick,
  handleSubClick,
}) {
  return (
    <div className="card">
      <img width={200} height={200} src={Zapas} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>Agregar al Carrito</p>
        <ItemQuantity
          itemQuantity={itemQuantity}
          handleAddClick={handleAddClick}
          handleSubClick={handleSubClick}
        />
      </div>
    </div>
  );
}
