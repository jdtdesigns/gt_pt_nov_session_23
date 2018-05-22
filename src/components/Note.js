import axios from 'axios';

class Note extends Component {
  getQuote() {

    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(res => {
        const note = res.data;


      });
  
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
