import React from 'react';

class SearchFilter extends React.Component {
  constructor(props){
    super(props);

    this.handleLanguageClick = this.handleLanguageClick.bind(this);
  }

  handleLanguageClick(e){
    this.props.changeFilter(e.currentTarget.value);
  }

  render(){
    return(

        <div id='filter'>
          <h3>Filter by language: </h3>

          <div id='language'>

            <div>
              <input type="radio" id="langChoice1"
                name="language" value="en"
                className='lang_radio'
                onClick={this.handleLanguageClick} />
                <label htmlFor="language">English</label>
            </div>

            <div>
              <input type="radio" id="langChoice2"
                name="language" value="fr"
                className='lang_radio'
                onClick={this.handleLanguageClick} />
                <label htmlFor="language">French</label>
            </div>

            <div>
              <input type="radio" id="langChoice3"
                name="language" value="es"
                className='lang_radio'
                onClick={this.handleLanguageClick}/>
                <label htmlFor="language">Spanish</label>
            </div>
          </div>
        </div>
    );
  }
}

export default SearchFilter;
