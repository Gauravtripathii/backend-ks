function CA_SignUp() {
  return (
    <form action="/">
      <p>
        <input type="text" name="name" placeholder="Name" />
      </p>
      <p>
        <input type="text" name="email" placeholder="Email" />
      </p>
      <p>
        <select>
          <option>Uni Name</option>
        </select>
      </p>
      <p>
        <input type="text" placeholder="username" />
      </p>
      <p>
        <input type="password" placeholder="password" />
      </p>
      <p>
        <input type="password" placeholder="confirm password" />
      </p>
    </form>
  );
}

export default CA_SignUp;
