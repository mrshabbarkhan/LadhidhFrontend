export const NavItems = [
  {
    path: "/",
    class: "house",
    tittle: "Home",
  },
  {
    path: "/category",
    class: "box",
    tittle: "Category",
  },
  // {
  //   path: "/favorites",
  //   class: "heart",
  //   tittle: "Favorites",
  // },
  {
    path: "/cart",
    class: "bagshopping",
    tittle: "Cart",
  },
  {
    path: "/profile",
    class: "user",
    tittle: "Account",
  },
];

export async function useLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const response = await fetch(
      // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=66d5874d2c283371371612jlg24937f`
    );
    const data = await response.json();

    return data.display_name;
  } catch (error) {
    return "Could not retrieve location";
  }
}

export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
