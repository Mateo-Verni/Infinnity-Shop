export default function ItemQuantity({
  itemQuantity,
  handleAddClick,
  handleSubClick,
}) {
  return (
    <div>
      <button onClick={handleSubClick}>-</button>
      <p>{itemQuantity}</p>
      <button onClick={handleAddClick}>+</button>
    </div>
  );
}
