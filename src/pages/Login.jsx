import Logo from "../img/moovly logo.svg";
import Awards from "../img/Moovlyawards.png";
const LoginPage = () => {
  return (
    <>
      <div>
        <img src={Logo} alt="Moovly Logo" />
        <p>
          "With Moovly, I create professional training videos, and my customers
          really appreciate the quality."
        </p>
        <span>Wladzio Wladecki</span>
        <span>Consultant @ MF consulting</span>
        <img src={Awards} alt="Moovly Rating Awards" />
      </div>
      <div>
        <h1>Welcom!</h1>
        <p>Create account to continue</p>
        <form>
          <label>
            Email
            <input type="text" name="email" placeholder="Enter email" />
          </label>
          <label>
            PASSWORD
            <input type="text" name="password" placeholder="Enter password" />
          </label>
          <label>
            REPEAT PASSWORD
            <input type="text" name="password2" placeholder="Enter password" />
          </label>
          <div>
            <input type="checkbox" /> remember me
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
export default LoginPage;
