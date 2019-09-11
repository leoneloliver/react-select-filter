import React from 'react';
import SelectDrop from 'react-select';
import sampleData from '../src/sample.js';
import subsampleData from '../src/chocolate'

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

// import ReactDependentScript from 'react-dependent-script';
// import Script from 'react-load-script'


// const subsampleData = [
//   { value: 'chocolate2', label: 'Chocolate2' },
//   { value: 'strawberry2', label: 'Strawberry2' },
//   { value: 'vanilla2', label: 'Vanilla2' },
//   { value: 'chocolate2', label: 'Chocolate2' }
// ]


const subsampleDataini = [];



const options = sampleData;
let options2 = subsampleDataini;


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}




class App extends React.Component {

  componentDidMount(){
    //alert($('#new').val());
    $('select').selectpicker();
  }

  state = {
    selectedOption: null,
    selectedOption2: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    console.log(selectedOption.value);
    if(selectedOption.value==='chocolate'){
      options2 = subsampleData;
    }else{
      options2 = subsampleDataini;
    }
    
  };

  handleChange2 = selectedOption2 => {
    this.setState({ selectedOption2 });
    console.log(`Option selected:`, selectedOption2);
    console.log(selectedOption2.value);
  };
  render() {
    const { selectedOption } = this.state;
    const { selectedOption2 } = this.state;

    return (
      <>

    {/* <ReactDependentScript
      loadingComponent={<div>jQuery is loading...</div>}
      scripts={['https://lendified-demo.netlify.com/assets/js/pristine.js','https://lendified-demo.netlify.com/assets/js/functions.js']}
    >
      <div>

      
      </div>
    </ReactDependentScript> */}


    {/* <Script
      url = "http://localhost:3000/active.js"
      
    /> */}
    <div className="col-md-12 text-center m-5">dsafadsf</div>
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
      <div className="row p-5">
        <div className="col-6">
          <SelectDrop
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            name={'candy'}
            // styles={customStyles}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#efefef',
                primary50: '#efefef',
                primary: '#ccc'
              },
            })}
          />
        </div>
        <div className="col-6">
          <SelectDrop
            value={selectedOption2}
            onChange={this.handleChange2}
            options={options2}
            name={'candy2'}
            styles={customStyles}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#efefef',
                primary50: '#efefef',
                primary: '#ccc'
              },
            })}
          />
        </div>
        
      </div>
     


      
      
      </>
    );
  }
}

export default App;