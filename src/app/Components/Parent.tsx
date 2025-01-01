
import Child from "./Child"; 

export default function Parent() {
 
  const cars = [
    {
      carImage: "/car1.png",
      carName: "Tesla Model S",
      carPrice: "$89,990",
      carReviews: "4.8/5",
    },
    {
      carImage: "/car2.png",
      carName: "BMW i8",
      carPrice: "$147,500",
      carReviews: "4.5/5",
    },
    {
      carImage: "/Car3.png",
      carName: "Audi R8",
      carPrice: "$142,700",
      carReviews: "4.6/5",
    },
    {
      carImage: "/car2.png",
      carName: "Mercedes-Benz AMG GT",
      carPrice: "$118,600",
      carReviews: "4.7/5",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {cars.map((car, index) => (
        <Child
          key={index}
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
        />
      ))}
    </div>
  );
}
