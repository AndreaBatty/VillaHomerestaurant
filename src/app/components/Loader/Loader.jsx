import "./Loader.css";

export default function Loader({ size = 48, color = "#96b03a" }) {
  return (
    <div
      className="loader"
      style={{
        width: size,
        height: size,
        borderColor: `${color} transparent ${color} transparent`,
      }}
      aria-label="Caricamento in corso"
    ></div>
  );
}
