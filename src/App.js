
// React
import React from 'react';

// Components
import Container from './components/Container';
import Header from './components/Header';
import Button from './components/Button';
import MichiPic from './components/MichiPic';
import MichiForm from './components/MichiForm';

// Service
import { GetMichi, GetMichiText } from './service/michi';

const App = () => {

  // States
  const [ loading, setLoading ] = React.useState(false); 
  const [ formVisible, setFormVisible ] = React.useState(false);
  const [ text, setText ] = React.useState();
  const [ count, setCount ] = React.useState(0);
  const [ michiUrl, setMichiUrl ] = React.useState();
  const [ isGif, setGif ] = React.useState(true);


  // Methods
  const textChange = (texto) => {
    setText(texto);
    handleMichiChange(texto);
  };

  const handleMichiChange = async (text) => {
    setLoading(true);
    const newUrl = text ? await GetMichiText(text, isGif) : await GetMichi(isGif);
    setMichiUrl(newUrl);
    setCount(count + 1);
    setLoading(false);
  };

  const handleShowText = () => {
    if(formVisible) {
      if(text) {
        handleMichiChange();
      }
      setText();
    }
    setFormVisible(!formVisible);
  }

  // Effects
  React.useEffect(() => {
    handleMichiChange();
  }, []);

  return (
    <>
      <Header>MichiGify</Header>
      <Container>
        <MichiPic loading={loading} src={michiUrl} count={count}></MichiPic>
        <div>
          <input checked={isGif} type="checkbox" onClick={() => setGif(!isGif)}></input>
          <Button onClick={() => handleMichiChange(text)} type="primary">Ver otro michi</Button>
          <Button onClick={handleShowText} type="secondary">{formVisible ? 'Ocutar Texto' : 'Texto'}</Button>


        </div>
        <MichiForm onPress={textChange} visible={formVisible}></MichiForm>
      </Container>
    </>
  );
} 

export default App;
