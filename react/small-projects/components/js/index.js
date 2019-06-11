const Card = props => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
};

const app = (
  <div>
    <Card name="Max" age="25"/>
    <Card name="Remmy" age="1"/>
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));