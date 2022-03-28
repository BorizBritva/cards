import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'
import CardImg from './CardImg'

function App() {
  const imgSrc="https://www.laststicker.ru/i/post/18/18681_full.jpg"
  const testProps = {body: <CardImg src={imgSrc}/>, src: imgSrc}

  return (
      <>
        {/*Композиция через своство в props-->*/}
        <Card body={<CardImg src={imgSrc} />} />
        {/*Передача через children в объекте props*/}
        <Card>
          <CardImg src={imgSrc} />
        </Card>
        {/*Обычная карточка без композиции*/}
        {/*Передача через spread*/}
        <Card {...testProps} />
        <Card />
      </>
  );
}

export default App;
