export default function Nav() {
  return (
    <div className="main-head">
      <div className="wrp d-flex justify-content-evenly">
        <div className="main-head-right p-3">
          <h2 className="title">العاب مهكرة 2023</h2>
          <p>قم بتحميل العاب و تطبيقات اندرويد مهكرة من متجر ابك بابا الأن!</p>
          <a className="btn btn-success" href="#">
            <span className="uppercase fbold smf">عرض الألعاب</span>
          </a>
          <a
            className="btn btn-orange"
            style={{ display: "none" }}
            href="https://app.apkbaba.com/apps"
          >
            <span className="uppercase fbold smf">عرض التطبيقات</span>
          </a>
        </div>
        <div className="main-head-left p-5">
          <h2 className="title">تطبيقات أندرويد</h2>
          <p>
            قم بتحميل احدث تطبيقات الأندرويد مهكرة
          </p>
          <p>
            بروابط مباشرة من ابك بابا
          </p>
          <a className="btn" href="https://app.apkbaba.com/apps">
            <span className="uppercase fbold smf">عرض التطبيقات</span>
          </a>
        </div>
      </div>
    </div>
  );
}
