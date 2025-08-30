import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <div className="px-4 py-5 flex items-center space-x-6">
      <img
        src={photo}
        alt="Krzysztof Maziarz"
        className="w-32 h-32 rounded-full object-cover shadow-lg"
      />
      <div>
        <h1 className="text-3xl text-gray-200 font-bold mb-2">Krzysztof Maziarz</h1>
        <p className="text-gray-400 italic">I teach machines to do science</p>
      </div>
    </div>
  );
}
