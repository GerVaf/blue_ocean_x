/* eslint-disable react/prop-types */
import { CaretUp } from "phosphor-react";

const Tuto = () => {
  const tutorials = [
    {
      title: "BLUE OCEAN APP ကို Android TV ပေါ်တွင် ဘယ်လိုသွင်းမလဲ?",
      url: "https://youtu.be/NRDo6cKKXMg",
    },
    {
      title: "How to install BLUE OCEAN APP On Amazon Firestick?",
      url: "https://youtu.be/3S-3qSHyba0",
    },
  ];

  const downloads = [
    {
      label: "Download from PlayStore",
      url: "https://play.google.com/store/apps/details?id=com.nathnetwork.blueoceann",
    },
    {
      label: "Download from iOS",
      url: "https://apps.apple.com/us/app/smarters-player-lite/id1628995509",
    },
    {
      label: "Download from Browser",
      url: "https://pixeldrain.com/u/BCLkH3fz",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Installation Tutorials & Downloads
      </h2>

      {/* Video Tutorials */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {tutorials.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-gray-800 mb-2">
              <CaretUp size={20} className="text-primary rotate-180" />
              {item.title}
            </h3>
            <div className="aspect-video rounded overflow-hidden">
              <iframe
                src={item.url.replace("youtu.be/", "www.youtube.com/embed/")}
                title={item.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Download Links */}
      <div className="bg-white shadow rounded-xl p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Download BLUE OCEAN APP
        </h3>
        <ul className="space-y-3">
          {downloads.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <CaretUp size={18} className="rotate-180" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tuto;
