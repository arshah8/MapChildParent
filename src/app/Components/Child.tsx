

export default function Child({ carImage, carName, carPrice, carReviews }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <img
        src={carImage}
        alt={carName}
        className="w-full h-30 object-cover rounded-t-lg"
      />
      <h3 className="text-lg text-gray-600 font-bold mt-2">{carName}</h3>
      <p className="text-gray-500">{carPrice}</p>
      <p className="text-sm text-yellow-500">{carReviews}</p>
    </div>
  );
}
