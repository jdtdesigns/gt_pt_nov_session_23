import React, { Component } from 'react';
import axios from 'axios';
// import jsonpAdapter from 'axios-jsonp';
import jsonp from 'jsonp';


const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
// axios.get({ 
//     url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=',
//     adapter: jsonpAdapter
//   })
//   .then(({data}) => console.log(data))
//   .catch(err => console.log(err));

jsonp(url, {param: '_jsonp'}, (err, data) => {
  if (err) {
    console.error('nope');
  } else {
    console.log(data);
  }
});

class Note extends Component {
  

  getGif = () => {


    // jsonp('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=', null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //   }
    // });

    axios.get('http://api.giphy.com/v1/gifs/random?api_key=3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL')
      .then(res => {
        // console.log(note);
        this.props.updateGif(res.data.data.images.downsized.url);
      });
  
  }

  // componentDidMount() {
  //   this.getQuote();
  // }

  render() {
    return (
      <div>
        <button onClick={this.getGif}>Get Gif</button>
      </div>
    );
  }
}

export default Note;