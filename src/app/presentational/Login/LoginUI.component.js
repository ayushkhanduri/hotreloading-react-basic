import React from 'react';

import {Link} from 'react-router';	

const Page = ({title}) => (
	<div>
		<div className="App-header">
        	<h2>{title}</h2>
      	</div>
      	<p className="App-intro">
        	This is the {title} page.
      	</p>
    </div>
); 

export default Page;