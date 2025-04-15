import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { WebsiteLink } from '../types/types';
import WebsiteCard from './WebsiteCard';

interface LinkDirectoryProps {
  websites: WebsiteLink[];
  activeTag: string | null;
}

const LinkDirectory = ({ websites, activeTag }: LinkDirectoryProps) => {
  const [displayedItems, setDisplayedItems] = useState<WebsiteLink[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Filter websites based on active tag
  const filteredWebsites = activeTag
    ? websites.filter(website => website.tags.includes(activeTag))
    : websites;

  // Reset when filter changes
  useEffect(() => {
    setDisplayedItems(filteredWebsites.slice(0, itemsPerPage));
    setPage(1);
    setHasMore(filteredWebsites.length > itemsPerPage);
  }, [activeTag, filteredWebsites]);

  const fetchMoreData = () => {
    const newPage = page + 1;
    const nextBatch = filteredWebsites.slice(0, newPage * itemsPerPage);
    
    setTimeout(() => {
      setDisplayedItems(nextBatch);
      setPage(newPage);
      setHasMore(nextBatch.length < filteredWebsites.length);
    }, 500);
  };

  return (
    <div className="py-6">
      <InfiniteScroll
        dataLength={displayedItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }
        endMessage={
          <p className="text-center text-gray-500 py-4">
            {displayedItems.length === 0 
              ? "No websites match your filter."
              : "You've seen all websites!"}
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default LinkDirectory; 