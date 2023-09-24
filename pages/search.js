import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/kits?query=${query}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Kit Search</h1>
      <p>Please enter your kit's Label ID to track your kit!</p>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((kit) => (
          <li key={kit.label_id}>
            <strong>Kit Id:</strong> {kit.id}
            <br />
            <strong>Kit Label:</strong> {kit.label_id}
            <br />
            <strong>Tracking Number:</strong> {kit.shipping_tracking_code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
