export default function Phone() {
  return (
    <div
      className="flex justify-center py-2"
      style={{ backgroundColor: "#ADD8F6", color: "#4D4949" }}
    >
      <picture>
        <source type="image/webp" srcSet="phone.webp" />
        <source type="image/png" srcSet="phone.png" />
        <img src="/phone.png" alt="Phone" className="w-6 h-6 mr-2" />
      </picture>
      <a href="tel:010-9539-9012">
        <span className="font-bold">Call us</span> 010-9539-9012
      </a>
    </div>
  );
}
