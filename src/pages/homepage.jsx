import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainComponet";



function HomePage(){
  const headerref = React.useRef(null)

  function updateheader(value){
    headerref.current.setCartvalue(value)
   }

   function updateheaderwishlist(value){
    headerref.current.setwishlistvalue(value)
   }
    return(
        <>
          <Header ref={headerref} />
          <MainContent updateheader={updateheader} updateheaderwishlist={updateheaderwishlist}/>
          <Footer />
        </>
    )
}

export default HomePage;