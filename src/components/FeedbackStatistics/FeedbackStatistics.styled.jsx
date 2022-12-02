import styled from "@emotion/styled";


export const StatisticsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const StatisticsList = styled.div`
padding: 5px;
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;

`

export const StatisticsInfo = styled.p`
    font-size: 22px;
    padding: 10px;
    border: solid 1px gray;
    margin: 0;
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
        default: return "black";
    }
}};

`

