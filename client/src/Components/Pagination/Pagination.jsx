

import React from 'react';
import "./Pagination.css";

function Pagination({ total, paginate }) {
  const pageNumbers = [];
  let numOfPages = Math.ceil((total / 6)-1)
  numOfPages +=1;
  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }
  
	return (	
		<nav className="pagination">
      {/* <div className='pagine'>Pagine</div> */}
        {pageNumbers.map((num) => (
          <div key={num} className="item">
            <button onClick={(e) => paginate(e, num)}>
              {num} 
            </button>
          </div>
        ))}
    </nav>
	  );
}

export default Pagination;

