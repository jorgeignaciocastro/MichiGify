import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const MichiFormContainer = styled.div`
    margin-top: 10px;
`;

const MichiText = styled.input`
    padding: 8px;
    margin-right: 10px;
`;

const MichiForm = ({ visible, onPress }) => {
    const inputEl = React.useRef(null);

    const handlePress = () => {
        onPress(inputEl.current.value);
    };

    if(!visible) {
        return null;
    }

    return (
        <MichiFormContainer>
            <MichiText ref={inputEl} placeholder="Texto del michi..."></MichiText>
            <Button onClick={handlePress}> > </Button>
        </MichiFormContainer>
    );
} 


export default MichiForm;