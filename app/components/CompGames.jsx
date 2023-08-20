import Link from "next/link"

export default function CompGames(){
    return(
        <div className="computer-game text-light">
    <h2 className="mb-5">العاب الكومبيوتر</h2>
        <div className="carousel slide text-light d-flex justify-content-between mb-5">
        {Array.from(Array(6), (e, i) => {
        return (
          <div className="box bg-dark">
          <div className="img">
            <img src="https://app.apkbaba.com/wp-content/uploads/Crash-Bandicoot-%D9%85%D9%87%D9%83%D8%B1%D8%A9-icon-apkbaba-150x150.webp" alt="" />
          </div>
          <div className="title"><h2>العنوان</h2></div>
          <div className="category"><Link href='pages/category'>القسم</Link></div>
          <div className="vote">التقييم</div>
        </div>
        )
      })}
      </div>
</div>
    )
}