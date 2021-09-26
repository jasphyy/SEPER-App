import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import Search from "../components/Search.js";
import filterArticles from "../components/searchfilter.js";
import { useState } from 'react';

const SEPractice = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filter = filterArticles(articles, searchQuery);

 
  

    return (
  
      <div class="se-practice-container">
        <Search 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          />
        <ul>
        {filter.map(articles => (
          <li key={articles.id}>{articles.title}</li>
        ))} 
        </ul>

      

        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <hr></hr>
        <p>There will be a way to select an SE practice from our SEPER repository here</p>
        <p>Also the display table of evidence levels for different claims will show here for the SE practice selected</p>
        <Dropdown/>
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  