import { useState, useEffect } from 'react';
import ResultList from './ResultList';

import search from '../utils/API';

const SearchResultContainer = () => {
  
  const [results, setResults] = useState([]);

 
  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  
  useEffect(() => {
    searchGiphy('kittens');
  }, []);

  return (
    <div>
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultContainer;


