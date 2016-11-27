import {React, PropTypes} from 'react';

const Main = props => {
  const {data} = props;
  return (
    <div className="jumbotron clearfix" id="main">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <p>{data.text}</p>
          <p>{data.fbText}</p>
          <p>{data.skillsMatterText}</p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <img src={data.pic} alt="Skills Matter logo"/>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  data: PropTypes.object
};

export default Main;
