const PleaseSignIn = (props) => {
  // check if user is authenticated via context
  // if so display children and if not display Sign In
  return props.children;
};

export default PleaseSignIn;
