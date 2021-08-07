import styled from 'styled-components'
import Article from './Article/Article'
import article1 from '../../../../assets/articles/article-1.jpg'
import article2 from '../../../../assets/articles/article-2.jpg'
import article3 from '../../../../assets/articles/article-3.jpg'

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
			sourceIcon: '',
			publishedAt: '8 hours',
			likes: 366,
			comments: 55
		},
		{
			image: article2,
			split: true,
			title: "Israeli ambassador: Israel wants Iranian government 'overthrown'",
			source: 'Washington Examiner',
			sourceIcon: '',
			publishedAt: '1 hour',
			likes: 31,
			comments: 14
		},
		{
			image: article3,
			split: true,
			title: "Arrest Made in Murder of Banking Exec in Reseda",
			source: 'NBC Los Angeles',
			sourceIcon: '',
			publishedAt: '3 hours',
			likes: 1,
			comments: null
		},
	]
	return (
		<StyledArticles>
			<Article article={articles[0]} />
			<Article article={articles[1]} />
			<Article article={articles[2]} />
			<Article article={articles[2]} />
		</StyledArticles>
	)
}

export default Articles
