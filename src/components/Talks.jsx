import photo_mlinpl from "../assets/talk_mlinpl.png";
import photo_mlsss from "../assets/talk_mlsss.png";

export default function Talks() {
  const talks = [
    {
      title: "Fake It Till You Make It: Planning Chemical Syntheses for Drug Discovery",
      description: "Deep dive into our RetroChimera model for predicting chemical reactions.",
      conference: "ML in PL",
      link: "https://www.youtube.com/watch?v=hfULoWinFY4",
      thumbnail: photo_mlinpl,
    },
    {
      title: "Reaction Prediction and Retrosynthesis",
      description: "Introduction to the field of retrosynthesis as part of an ML Summer School in Kraków.",
      conference: "MLSS^S",
      link: "https://www.youtube.com/watch?v=aKPZXVx67rs",
      thumbnail: photo_mlsss,
    },
  ];

  return (
    <section id="talks" className="bg-gray-900 text-gray-200">
      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2">
          Talks
        </h2>

        <div className="space-y-6">
          {talks.map((talk, index) => (
            <a
              key={index}
              href={talk.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:bg-gray-750 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="aspect-video w-full md:w-40 flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={talk.thumbnail}
                    alt={`Thumbnail for ${talk.title}`}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 relative inline-block">
                    {talk.title}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-gray-300 mb-4">{talk.description}</p>

                  <span className="inline-block w-full md:w-32 text-center bg-gray-700 px-2 py-1 rounded-full text-gray-200">
                    {talk.conference}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}