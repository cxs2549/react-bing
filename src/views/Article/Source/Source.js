import styled from 'styled-components'
import bi from '../../../assets/articles/bi.png'

const StyledSource = styled.div`
  padding: .75rem 1rem;
  height: 80px;
  background-color: #282828;
  margin-top: .75rem;
  color: white;
  display: flex;
  align-items: center;
  img {
    border-radius: 6px;
    height: 100%;
    margin-right: 1rem;
  }
  span {
    font-weight: 600;
  }
`

const Source = () => {
  return (
    <StyledSource>
      <img src={bi} alt="" />
      <span>Business Insider</span>
    </StyledSource>
  )
}

export default Source
