import React, { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidebar">
      <button className="btn btn-secondary d-md-none" type="button" onClick={toggleCollapse}>
        {collapsed ? 'Show Sidebar' : 'Hide Sidebar'}
      </button>
      <ul className={`nav flex-column ${collapsed ? 'collapse' : ''}`}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
