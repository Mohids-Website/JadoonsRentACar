const cars = [
  {
    id: "civic-x",
    name: "Honda Civic X",
    price: "10000/day",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753",
    desc: "Premium sedan with comfort and performance",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5
  },
  {
    id: "yaris",
    name: "Toyota Yaris",
    price: "8000/day",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    desc: "Fuel efficient city car",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5
  },
  {
    id: "revo",
    name: "Toyota Revo",
    price: "15000/day",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c3f8d6f1a",
    desc: "Powerful off-road pickup",
    fuel: "Diesel",
    transmission: "Manual",
    seats: 5
  }
];

function openCar(id){
  window.location.href = `car.html?id=${id}`;
}

function getCar(id){
  return cars.find(c => c.id === id);
}

function bookCar(name){
  localStorage.setItem("selectedCar", name);
  window.location.href = "booking.html";
}