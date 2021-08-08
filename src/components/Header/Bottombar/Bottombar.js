import { useEffect } from 'react'
import styled from 'styled-components'
import Icons from './Icons/Icons'

const StyledBottombar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-color: var(--navBGC);
	color: white;
`

const Bottombar = () => {
  
  useEffect(() => {
    const prev = window.scrollY
		const see = () => {
			var current = window.scrollY
			if (current > prev) {
				document.getElementById('bottombar').style.visibility = 'hidden'
        console.log( current, prev)
			} else if (current < prev) {
        console.log( current, prev)
				document.getElementById('bottombar').style.visibility = 'visible'
			}
		}

		window.addEventListener('scroll', see)
	})
	return (
		<StyledBottombar id="bottombar">
			<Icons />
		</StyledBottombar>
	)
}

export default Bottombar
