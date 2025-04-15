import { WebsiteLink } from "../types/types";

interface WebsiteCardProps {
  website: WebsiteLink;
}

const WebsiteCard = ({ website }: WebsiteCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <a href={website.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative pb-[60%] bg-gray-100">
          {website.image ? (
            <img 
              src={website.image} 
              alt={website.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
              <span className="text-3xl font-bold text-blue-600">{website.title.charAt(0)}</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{website.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{website.description}</p>
          
          <div className="flex flex-wrap gap-1">
            {website.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default WebsiteCard; 