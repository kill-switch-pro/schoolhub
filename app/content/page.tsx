import Navigation from "../Navigation/page";
import Search from "../search/page";

import Main from "../Main-component/page";

const Content = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navigation />
        <Main />
        <Search />
      </div>
    </>
  );
};

export default Content;
