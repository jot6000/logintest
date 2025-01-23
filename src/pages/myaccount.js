export default function MyAccount(props) {
  return(
    <div>
      <h1>My Account Page</h1>
      <p>You are signed in as: {props.userAccount? props.userAccount:"No one I guess, go sign in bro!"}</p>
      <p>This is the My Account page</p>
    </div>
  );
}