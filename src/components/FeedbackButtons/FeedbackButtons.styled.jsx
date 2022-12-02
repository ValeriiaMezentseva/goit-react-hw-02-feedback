import styled from "@emotion/styled";

export const ButtonsList  = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
export const FeedbackButton = styled.button`
    padding: 10px;
    cursor: pointer;
    border: solid 1px gray;
     background-color: white; 
    margin-right: 5px;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
         border-color: ${props => {
    switch (props.category) {
        case "good": {
            return 'green';
        }
        case "neutral": {
            return "orange";
        }
        case "bad": {
            return "red";
        }
        default: return "white";
    }
}};
    &:hover {
        background-color: ${props => {
    switch (props.category) {
        case "good": {
            return 'green';
        }
        case "neutral": {
            return "orange";
        }
        case "bad": {
            return "red";
        }
        default: return "white";
    }
}};
    }
`
export const ButtonReset = styled.button`
    padding: 10px;
    margin-left: 10px;
    background-color: white; 
    border-radius: 10px; 
    border: solid 1px  #3a5cf5;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    &:hover {
        background-color:  #3a5cf5; 
    }
`