import styled from 'styled-components'
import Article from './Article/Article'
import article1 from '../../../../assets/articles/article-1.jpg'
import article2 from '../../../../assets/articles/article-2.jpg'
import article3 from '../../../../assets/articles/article-3.jpg'
import article4 from '../../../../assets/articles/article-4.png'
import bi from '../../../../assets/articles/bi.png'

const StyledArticles = styled.div`
	margin-top: 1.5rem;
	/* height: 800px; */
	padding: 0 1rem;
  display: flex;
  flex-flow: column;
  margin-bottom: 5rem;
`

const Articles = () => {
	const articles = [
		{
			image: article1,
			split: true,
			title: 'Simone Biles Reunites with Boyfriend Jonathan Owens in Texas as She Supports Him at NF...',
			source: 'People',
			sourceIcon: bi,
			publishedAt: '8 hours',
			likes: 366,
			comments: 55
		},
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
		<StyledArticles>
			{articles.map((article, i) => (
				<Article article={article} key={i} />
			))}
		</StyledArticles>
	)
}

export default Articles
