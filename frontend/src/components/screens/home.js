import React, {Fragment} from 'react'
import Carousel from '../home/carousel';
import Animated_text from '../home/animated_text';





class Home extends React.Component{
	render(){
		return(
			<Fragment>

				<Carousel />
        		<Animated_text />
        		{/*<Card />*/}
        		{/*<Reviews />*/}
        		
        	</Fragment>
			);
	}
}

export default Home;