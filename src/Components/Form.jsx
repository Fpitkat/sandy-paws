export default function Form({ children }) {
  return (
    <form>
      {/* <form action="http://localhost:8080/API/index.php" method="post"> */}
      {children}
      {/* <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"> */}
    </form>
  );
}
