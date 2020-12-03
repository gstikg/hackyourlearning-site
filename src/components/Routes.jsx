// Importing Components from node_modules
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// Importing the page components for routing
import LandingPage from '../pages/LandingPage';

/*
  Function used to update each page's <title> tag
  <title> tag is typically found in the public folder
  (index.html), and would otherwise be static
*/
const Page = (props) => {
  useEffect(() => {
    document.title = props.title || 'ZOO\'s Site';
  }, [props.title]);

  return props.children;
};

/*
  The following is used to setup the routing for the application through `react-router-dom`
  Also the current method ensures that the Navbar and Footer are automatically rendered onto every
  page. This can be changed by simply removing from a routes render property.
*/
function Routes() {
  return (
    <Switch>

      <Route
        exact
        path="/"
        render={() => (
          <>
            {/* <Navbar /> */}
            <Page title="Hack You Learning">
              <LandingPage />
            </Page>
          </>
        )}
      />

    </Switch>
  );
}

export default Routes;
