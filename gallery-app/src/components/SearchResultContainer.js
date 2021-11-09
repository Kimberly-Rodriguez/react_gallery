import { useState, useEffect } from 'react';
import ResultList from './ResultList';

import search from '../utils/API';

const SearchResultContainer = () => {
  const [result, setResult] = useState([]);

  const searchGiphy = async (query) => {
    const response = await search(query);
    setResult(response.data.data); 
  };
  
  useEffect(() => {
    searchGiphy('kittens'); 
  }, []);

  return (
    <div>
      <ResultList result={result} />
    </div>
  );
};

export default SearchResultContainer; 

