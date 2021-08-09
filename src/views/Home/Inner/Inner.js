import styled from 'styled-components'
import Articles from './Articles/Articles'
import Icons from './Icons/Icons'
import Searchbar from './Searchbar/Searchbar'
import TopHeadlines from "./TopHeadlines/TopHeadlines"
import Trending from "./Trending/Trending"

const StyledInner = styled.div`
	/* overflow-y: scroll; */
	height: 100vh;
	padding: 1rem 0;
	padding-right: 0;
	background-color: transparent;
`

const Inner = () => {
	
	return (
		<StyledInner id="inner">
			<Searchbar />
			<Icons />
			<Articles />
			<TopHeadlines />
			<Articles bg='black' />
			<Trending />
		</StyledInner>
	)
}

export default Inner
