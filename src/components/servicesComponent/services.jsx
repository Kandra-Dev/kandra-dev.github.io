export default function Services(props) {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>These are some of the technologies we work with</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i class={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}
