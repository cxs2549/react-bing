import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'
import logo from '../../../assets/b-logo.png'

const StyledTopbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2.5rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-color: var(--navBGC);
  z-index: 10;
`

const Topbar = () => {

	return (
		<StyledTopbar>
			<img src={logo} alt="" />

			<IoIosSearch />
		</StyledTopbar>
	)
}

export default Topbar
