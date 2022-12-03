import FilterMenu from "../components/FilterMenu";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between overflow-hidden">
      <Nav />
      <Menu />
      <div className="flex h-[600px]">
        <div className="border-r-2 sticky top-0 w-[300px]">
          <FilterMenu />
        </div>

        <div className="w-screen">
          <Table />
        </div>
      </div>

      <Footer />
    </div>
  );
}
