import styled from 'styled-components'
import { HiOutlineThumbUp } from 'react-icons/hi'
import { RiHandHeartLine } from 'react-icons/ri'
import { BiComment } from 'react-icons/bi'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { Link } from "react-router-dom"

const StyledArticle = styled.div`
	width: 100%;
	/* min-height: 350px; */
	background-size: cover;
	background-position: center center;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 1rem;
	position: relative;
	background-color: transparent;
	/* border: 2px solid white; */
	#image {
		width: 100%;
		min-height: 250px;
		max-height: 250px;
		object-fit: cover;
		object-position: top center;
	}
	#text {
		/* display: none; */
		/* position: absolute; */
		height: 100px;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0 1rem;
		color: white;
		border-radius: 8px;
		position: relative;
		/* border: 2px solid white; */
		#innerText {
			background-image: linear-gradient(to top, #282828f3 85%, transparent 99%);
			/* border: 2px solid white; */
			padding: 1rem;
			/* padding-right: .8rem; */
			/* padding-top: 0; */
			position: absolute;
		
			left: 0;
			bottom: 0;
			width: 100%;
		}
		#source {
			margin-bottom: .7rem;
			display: flex;
			align-content: center;
			/* border: 2px solid white; */
			img {
				max-width: 20px;
				max-height: 20px;
				margin-right: .5rem;
				border-radius: 3px;
			}
			span {
				font-size: 80%;
				margin-right: .5rem;
				&:first-of-type::after {
					content: '•';
					padding-left: .5rem;
					opacity: .7;
				}
			}
		}
		h1 {
			font-size: 115%;
		}
		#icons {
			margin-top: .5rem;
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
					background-color: rgba(0, 0, 0, 0.7);
					border-radius: 99999px;
				}
			}
			#ellipsis {
				padding: 6px 6px;
				display: flex;
				align-items: center;
				background-color: rgba(0, 0, 0, 0.7);
				border-radius: 99999px;
			}
		}
	}
`

const Article = ({ article }) => {
	return (
		<StyledArticle image={article.image} split={article.split}>
			{article.split && <Link to="/article/id"><img id="image" src={article.image} alt="" /></Link>}
			{article.split && (
				<div id="text">
					<div id="innerText">
						<div id="source">
							{article.sourceIcon && <img src={article.sourceIcon} alt="" />}
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
				</div>
			)}
		</StyledArticle>
	)
}

export default Article
