import { useContext } from 'react';
import {SettingsContext} from './../context/settings';
import './../styles/Pagination.css';

function Pagination({ setCurrentPage, listLength }) {
  const context = useContext(SettingsContext);

  function handlePageClick(e) {
    setCurrentPage(parseInt(e.target.innerHTML));
  }

  function getPageNumbers() {
    const numArr = [];
    for (let i = 1; i <= Math.ceil(listLength / context.numberOfItems); i++) {
      numArr.push(i);
    }
    return numArr;
  }

  return (
    <div id='paginationDiv'>
      {
        getPageNumbers().map(num => {
          return <span className='pagination' key={num} onClick={handlePageClick}>{num}</span>
        })
      }
    </div>
  )
}

export default Pagination;