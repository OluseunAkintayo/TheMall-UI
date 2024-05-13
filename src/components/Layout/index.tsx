import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      { props.children }
      <Footer />
    </Fragment>
  )
}

export default Layout;
