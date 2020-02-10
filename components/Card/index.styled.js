import Styled from 'styled-components';

const shadowStyle = ` 
  -webkit-box-shadow: 0px 9px 8px -6px rgba(0,0,0,1);
  -moz-box-shadow: 0px 9px 8px -6px rgba(0,0,0,1);
  box-shadow: 0px 9px 8px -6px rgba(0,0,0,1);
`;
const Container = Styled.div`
  padding: 5px 5px;
  display:flex;
  min-width: 20%;
  margin: 5px 20px;
  justify-content: center;
  &:hover{
    outline-style: solid;
    outline-width: 1px;
    ${shadowStyle}
    button{
      visibility:visible;
      cursor:pointer;

    }
  }
`;

const Img = Styled.img`
  flex:1;
  margin-top:20px;
  max-width:280px;
  max-height:200px;
  align-self:center;
`;

const Paragraph = Styled.p`
  margin:0;
  margin-top: ${(props) => (props.title ? '20' : '0')}px;
  width: 100%;
  ${(props) => (props.reverse ? 'text-align: right;' : '')}
`;

const Span = Styled.span`
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.red ? props.theme.buttonPrimaryBackground : '#000')};
  text-decoration: ${(props) => (props.lineThrough ? 'line-through' : 'none')};
  margin-left: 2px;

`;

const Link = Styled.a`
  text-decoration: none;
  margin:0;
  padding:0;
`;

const Content = Styled.div`
  display: flex;
  color: #000;
  margin:0;
  width:100%;
  justify-content: center;
  flex-direction: column;
`;
const DiscountBubble = Styled.div`
  visibility:${(props) => (props.isVisible ? 'visible' : 'hidden')};
  display:flex;
  position:relative;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  min-width: 45px;
  min-height: 45px;
  top: -220px;
  left:40px;
  font-size: 12px;
  font-weight: bold;
  border-radius:50%;
  background-color: ${(props) => props.theme.bubblePrimaryBackground};
  color:#fff; 
  ${shadowStyle}
  z-index:999;
`;

const Button = Styled.button`
  visibility:hidden;
  display:flex;
  position:relative;
  align-items: center;
  justify-content: center;
  align-self: center;
  top: -90px;
  margin-bottom: -85px;
  padding: 7px 30px;
  border: 0;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size:14px;
`;

export {
  Container,
  Content,
  Img,
  Paragraph,
  Span,
  Link,
  DiscountBubble,
  Button,
};
