import styled from 'styled-components'
import Article from './Article/Article'

import article2 from '../../../../assets/articles/article-2.jpg'
import article3 from '../../../../assets/articles/article-3.jpg'
import article4 from '../../../../assets/articles/article-4.png'
import bi from '../../../../assets/articles/bi.png'

const StyledArticles = styled.div`
	/* height: 800px; */
	padding: 1rem;
  display: flex;
  flex-flow: column;
	background-color: ${props => (props.bg || 'transparent')};
	>div:last-of-type {
		margin-bottom: 0;
	}
`

const Articles = ({bg}) => {
	const articles = [
	
		{
			image: article2,
			split: true,
			title: "Israeli ambassador: Israel wants Iranian government 'overthrown'",
			source: 'Washington Examiner',
			sourceIcon: bi,
			publishedAt: '1 hour',
			likes: 31,
			comments: 14
		},
		{
			image: article3,
			split: true,
			title: "Arrest Made in Murder of Banking Exec in Reseda",
			source: 'NBC Los Angeles',
			sourceIcon: bi,
			publishedAt: '3 hours',
			likes: 1,
			comments: null
		},
		{
			image: article4,
			split: true,
			title: "Rudy Giuliani is being investigated by the FBI over a film he was trying to make about the Bidens and...",
			source: 'Business Insider',
			sourceIcon: bi,
			publishedAt: '54 mins',
			likes: 67,
			comments: 20
		},
	]
	return (
		<StyledArticles bg={bg}>
			{articles.map((article, i) => (
				<Article article={article} key={i} />
			))}
		</StyledArticles>
	)
}

export default Articles
