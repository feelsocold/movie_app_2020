import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  
  getMovies = async () => {
    //const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    const {  // 구조 분해 할당을 사용하여 movies 데이터를 추출!
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    
    // console.log(movies);
    //this.setState({ movies : movies });
    this.setState({ movies, isLoading : false }); // ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다.

  };
  
  componentDidMount() {
  // 영화 데이터 로딩!
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    // axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.getMovies();
    
  }
  
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;  
  }
}

export default App; 