import styled from 'styled-components'
import Articles from './Articles/Articles'
import Icons from './Icons/Icons'
import Searchbar from './Searchbar/Searchbar'

const StyledInner = styled.div`
	overflow-y: scroll;
	height: 100vh;
	padding: 4.25rem 0;
	padding-right: 0;
	margin-bottom: 120px;

`

const Inner = () => {
	
	return (
		<StyledInner id="inner">
			<Searchbar />
			<Icons />
			<Articles />
		</StyledInner>
	)
}

export default Inner
