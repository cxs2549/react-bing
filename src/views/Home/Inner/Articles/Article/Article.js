import styled from 'styled-components'
import { HiOutlineThumbUp } from 'react-icons/hi'
import { RiHandHeartLine } from 'react-icons/ri'
import { BiComment } from 'react-icons/bi'
import { AiOutlineEllipsis } from 'react-icons/ai'

const StyledArticle = styled.div`
	width: 100%;
	min-height: 390px;
	/* background-image: ${(props) => (props.split ? 'initial' : `url(${props.image})`)}; */
	background-size: cover;
	background-position: center center;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 1rem;
	position: relative;
	background-color: transparent;
	img {
		width: 100%;
		height: 80%;
		object-fit: cover;
		object-position: top center;
	}
	#text {
		/* display: none; */
		/* background-color: rgba(255, 255, 255, 0.6); */
		background-image: linear-gradient(to bottom, transparent 1%, #1b181a 24%);
		
		position: relative;
		position: absolute;
		height: min-content;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem 1rem;
		/* padding-bottom: 0; */
		color: white;
		border-radius: 8px;
		#source {
			margin-bottom: .75rem;
			span {
				font-size: 80%;
				margin-right: .5rem;
			}
		}
		h1 {
			font-size: 115%;
		}
		#icons {
			
			margin-top: .75rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			#trio {
				display: flex;
				align-items: center;
				> div {
					margin-right: .5rem;
					padding: 6px 2px;
				}
				svg {
					font-size: 1.2rem;
				}
				span {
					margin-left: .25rem;
					font-size: 80%;
				}
				#like {
					padding: 6px 12px;
					margin-right: .5rem;
					display: flex;
					align-items: center;
					background-color: #cdcdcd50;
					border-radius: 99999px;
				}
			}
			#ellipsis {
				padding: 6px 6px;
				display: flex;
				align-items: center;
				background-color: #cdcdcd50;
				border-radius: 99999px;
			}
		}
	}
`

const Article = ({ article }) => {
	return (
		<StyledArticle image={article.image} split={article.split}>
			{article.split && <img src={article.image} alt="" />}
			{article.split && (
				<div id="text">
					<div id="source">
						<span>{article.source}</span>
						<span>{article.publishedAt}</span>
					</div>
					<h1>{article.title}</h1>
					<div id="icons">
						<div id="trio">
							<div id="like">
								<HiOutlineThumbUp />
								<span>Like</span>
							</div>
							<div>
								<RiHandHeartLine />
								<span>{article.likes}</span>
							</div>
							{article.comments && (
								<div>
									<BiComment />
									<span>{article.comments}</span>
								</div>
							)}
						</div>
						<div id="ellipsis">
							<AiOutlineEllipsis />
						</div>
					</div>
				</div>
			)}
		</StyledArticle>
	)
}

export default Article
