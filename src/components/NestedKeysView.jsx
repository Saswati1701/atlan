import React, { useState } from 'react';

const SQLTextArea = ({ onClose, title }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', position: 'relative' }}>
      <span>{title}</span>
      <button style={{ position: 'absolute', right: '5px' }} onClick={onClose}>
        X
      </button>
      <textarea style={{ width: '100%', height: '100px' }} />
    </div>
  );
};

const NestedKeysView = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const [dynamicComponents, setDynamicComponents] = useState([]);

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleDynamicComponentClose = (index) => {
    const updatedComponents = [...dynamicComponents];
    updatedComponents.splice(index, 1);
    setDynamicComponents(updatedComponents);
  };

  const renderKeys = (obj, depth = 0) => {
    return Object.keys(obj).map((key, index) => (
      <div key={key} style={{ marginLeft: `${depth * 20}px` }}>
        {typeof obj[key] === 'object' ? (
          <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {expand ? '▼' : '►'} {key}
          </span>
        ) : (
          <div>
            <span
              onClick={() => {
                const newComponents = [...dynamicComponents];
                newComponents.push(key);
                setDynamicComponents(newComponents);
              }}
              style={{ cursor: 'pointer' }}
            >
              {key}
            </span>
            
          </div>
        )}
        {typeof obj[key] === 'object' && expand && <div>{renderKeys(obj[key], depth + 1)}</div>}
        <div>
        {dynamicComponents.includes(key) && (
              <SQLTextArea
                onClose={() => handleDynamicComponentClose(dynamicComponents.indexOf(key))}
                title={`Untitled - ${key}`}
              />
            )}
        </div>
      </div>
    ));
  };

  return (
    <div>
      {renderKeys(data)}
      {/* You can add other components or UI elements here as needed */}
    </div>
  );
};

export default NestedKeysView;
