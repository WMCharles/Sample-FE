import React from "react";
import ListingsDisp from "./ListingsDisp";
// import "../listings.css";

function LandingFetch({
  lists,
  deleteLists,
  setLists,
  // search,
}) {
  let listlist = "Load list...";

  if (lists) {
    const tfilter = lists.filter((list) => {
      return list.description
    });

    listlist = tfilter.map((list) => {
      return (
        <ListingsDisp
          list={lists}
          setLists={setLists}
          key={list.id}
          image={list.image}
          title={list.title}
          location={list.location}
          deadline={list.deadline}
          requirements={list.requirements}
          description={list.description}
          salary={list.salary}
          id={list.id}
          deleteLists={deleteLists}
        />
      );
    });
  }

  return (
    <>
    <h1 className='popular'>Popular Listed Jobs</h1>
    <>

</>
    </>
  );
}

export default LandingFetch;
