import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export default function QuantitySelector({ cantidad, setCantidad }) {
  const onValueChanged = (value) => {
    if (cantidad + value < 1) return;

    setCantidad(cantidad + value);
  };

  return (
    <div className="flex">
      <button onClick={() => onValueChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="flex items-center justify-center w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        {cantidad}
      </span>

      <button onClick={() => onValueChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
}
