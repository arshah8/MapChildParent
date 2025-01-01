

export default function Child(props:any) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <img
        src={props.carImage}
        alt={props.carName}
        className="w-full h-30 object-cover rounded-t-lg"
      />
      <h3 className="text-lg text-gray-600 font-bold mt-2">{props.carName}</h3>
      <p className="text-gray-500">{props.carPrice}</p>
      <p className="text-sm text-yellow-500">{props.carReviews}</p>
    </div>
  );
}
