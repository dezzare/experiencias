//identidade do typo não importa, somente as restrições

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (user.username === sentValue.username && user.password === sentValue.password);
};

const bdUser = { username: 'joao', password: '1234' };
const sentUser = { username: 'joao', password: '1234', permission: 'root' };
//root é ignorado
const loggedIn = verifyUser( bdUser, sentUser );
console.log( loggedIn );
