function Dashboard() {
  return (
    <div className="dashboard text-light">
      <div className="container">
        <div className="box-detils">
          <div className="info">
            <div className="num"><h3>100</h3></div>
            <div className="description"><h6>Total Applications</h6></div>
          </div>
          <div className="icon"><i class="bi bi-google-play"></i></div>
        </div>
        <div className="box-detils">
          <div className="info">
            <div className="num"><h3>100</h3></div>
            <div className="description"><h6>Total Downloads</h6></div>
          </div>
          <div className="icon"><i class="bi bi-download"></i></div>
        </div>
        <div className="box-detils">
          <div className="info">
            <div className="num"><h3>100</h3></div>
            <div className="description">Total Views</div>
          </div>
          <div className="icon"><i class="bi bi-eye"></i></div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard