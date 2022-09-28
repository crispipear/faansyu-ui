import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Text, Divider } from 'faanshu-ui'
import './TopicsNav.css';

function TopicsNav(): React.ReactElement {
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState("/");
  const [anchorLinks, setAnchorLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (prevPathname === location.pathname) {
      return;
    }
    setPrevPathname(location.pathname);
    const mainSection = document.getElementById('main-content');
    const headings = mainSection?.getElementsByClassName('anchor');
    if (!headings?.length) {
      setAnchorLinks([]);
      return;
    }

    const links = Array.from(headings).map(h => {
      const href = `#${h.id}`;
      return (
        <li>
          <a className="topics-link" href={href}>
            {h.innerHTML}
          </a>
        </li>
      )
    });

    setAnchorLinks(links);
  }, [prevPathname, location]);


  return (
    <nav className="topics-nav">
      <Text fontSize="s" fontWeight="bold">Topics</Text>
      <Divider />
      <ul>
        {anchorLinks}
      </ul>
    </nav>
  )
}

export default TopicsNav
