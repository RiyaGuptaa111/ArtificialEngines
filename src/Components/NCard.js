
import React, { useState } from 'react';
import noimg from './download.jpg';
import NCardItem from './NCardItem';
import './Ncard.css'; // Import CSS for NCard

const NCard = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="ncard-container">
      <div className={`ncard-background ${expandedIndex !== null ? 'blurred' : ''}`}>
        <div className="row">
          {data.map((element, index) => (
            <div className="col-md-3" key={element.url}>
              <NCardItem
                key={index}
                index={index} // Pass the index
                title={element.title}
                description={element.description ? element.description.slice(0, 100) : "Content Not Available Right Now"}
                imageUrl={element.urlToImage ? element.urlToImage : noimg}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source}
                content={element.content}
                isExpanded={false} // The cards in the grid are never 'expanded' in this context
                onExpand={handleExpand} // Pass the expand handler
              />
            </div>
          ))}
        </div>
      </div>
      {expandedIndex !== null && (
        <div className="expanded-card-overlay">
          <NCardItem
            key={expandedIndex}
            index={expandedIndex}
            title={data[expandedIndex].title}
            description={data[expandedIndex].description ? data[expandedIndex].description : "Content Not Available Right Now"}
            imageUrl={data[expandedIndex].urlToImage ? data[expandedIndex].urlToImage : noimg}
            newsUrl={data[expandedIndex].url}
            author={data[expandedIndex].author}
            date={data[expandedIndex].publishedAt}
            source={data[expandedIndex].source}
            content={data[expandedIndex].content}
            isExpanded={true}
            onClose={handleClose} // Use the close handler for the overlay card
          />
        </div>
      )}
    </div>
  );
};

export default NCard;





