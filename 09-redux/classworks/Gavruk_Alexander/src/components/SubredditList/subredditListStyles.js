import styled from 'styled-components';

const sectionBackgroundColor = '#F8F8F8';
const textColor = '#7C787E';

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 12px;
    background-color: ${sectionBackgroundColor};
`;

export const PostedSpan = styled.span`
    font-size: 0.75em;
    color: ${textColor};
`;

export const H2 = styled.h2`
    font-size: 1.125em;
    font-weight: 500;
`;

export const P = styled.p`
    font-size: 0.875em;
`;

export const CommentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
`;

export const CommentSpan = styled.span`
    color: ${textColor};
    font-size: 0.75em;
`;

export const ItemDiv = styled.div`
    width: 710px;
    background: #fff;
    padding: 30px 20px;
    margin-top: 25px;
    &:hover {
        cursor: pointer;
    }
`;
