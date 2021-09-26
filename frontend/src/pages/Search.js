import React from "react";
import articles from "../dummydata/articles";
import SearchBar from "../components/searchbar";
import titleFilter from "../components/searchFilter/titleFilter";
import { useState } from "react";

const Search = () => 
{
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filterTitle = titleFilter(articles, searchQuery);

  return(
    <div class="se-practice-container">
    <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      <table class = "search-table">
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Source</th>
          <th>Publication Year</th>
          <th>DOI</th>
          <th>Claimed Benefits</th>
          <th>Evidence</th>
        </tr>
        <td class = "article-title">
          {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.title}</tr>
          ))} 
        </td>
        <td class = "article-authors">
        {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.authors}</tr>
          ))} 
        </td>
        <td class = "article-source">
        {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.source}</tr>
          ))} 
        </td>
        <td class = "article-publication-year">
        {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.pubyear}</tr>
          ))} 
        </td>
        <td class = "article-doi">
        {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.doi}</tr>
          ))} 
        </td>
        <td class = "article-claim">
        {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.claim}</tr>
          ))} 
        </td>
        <td class = "article-evidence">
        {filterTitle.map(articles => (
            <tr key={articles.id}>{articles.evidence}</tr>
          ))} 
        </td>
    </table>
    </div>
  );
}

export default Search;