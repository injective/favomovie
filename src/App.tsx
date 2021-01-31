import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import API from "./utils/API";


class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            title: null,
            poster: null,
            boxOffice: null
        };
    }

    render() {
        console.log(this.state);

        return (
            <div className="App">
                <Header></Header>

                <img src={this.state.poster} alt={this.state.title}/>
                <p>{this.state.title}</p>
                <p>{this.state.boxOffice}</p>
                <p>Here is your key: 4433273e</p>
                <p>OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4433273e</p>

                <Footer></Footer>
            </div>
        );
    }
    async componentDidMount() {
        let userData = await API.get(`/?apikey=4433273e&i=tt3896198`, {
            params: {
                results: 1,
                inc: 'title,poster,boxOffice'
            }
        });

        console.log(userData.data.BoxOffice);

        const title = userData.data.Title;
        const poster = userData.data.Poster;
        const boxOffice = userData.data.BoxOffice;
        console.log(title);
        console.log(poster);
        console.log(boxOffice);

        this.setState({
            ...this.state, ...{
                title,
                poster,
                boxOffice
            }
        });
    }
};



export default App;
