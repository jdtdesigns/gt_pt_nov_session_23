import React, { Component } from 'react';
import axios from 'axios';
// import jsonp from 'jsonp';
class Note extends Component {
  

  getQuote() {


    // jsonp('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=', null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //   }
    // });

    axios.get('http://api.giphy.com/v1/gifs/random?api_key=3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL')
      .then(res => {
        const note = res.data;
        // this.setState({ });

        console.log(note);
      });
  
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Note;