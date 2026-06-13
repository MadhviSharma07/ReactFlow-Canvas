import Topbar from "../Topbar"
import LeftRail from "../LeftRail"
import RightPanel from "../RightPanel"
function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />

      <div className="flex flex-1">
        <LeftRail />

        <main className="flex-1">
          Canvas Area
        </main>

        <RightPanel />
      </div>
    </div>
  )
}

export default Dashboard
