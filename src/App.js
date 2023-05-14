import logo from './logo.svg';
import './App.css';
import Video from './Video'; //import the Video component

function App() {
  const videos = [
    {
      id: 1,
      title: 'Video Title',
      description: 'Video description',
      url: 'https://www.youtube.com/watch?v=video_id'
    },
    {
      id: 2,
      title: 'Video Title',
      description: 'Video description',
      url: 'https://www.youtube.com/watch?v=video_id'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my first app test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my first app test
        </a>
      </header>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
