import styled from 'styled-components'

const StyledIcon = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: .3rem;
    color: white;
    margin-right: 1.2rem;
    #image {

    }
    > div {
        background-color: black;
        width: 44px;
        height: 44px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 1.35rem;
        }
    }
    span {
        text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
        white-space: nowrap;
        font-weight: 500;
    }
`

const Icon = ({name, icon}) => {
    return (
        <StyledIcon>
            <div id="image">
                {icon}
            </div>
            <span>{name}</span>
        </StyledIcon>
    )
}

export default Icon
